import { makeAutoObservable } from "mobx"
import { config } from "src/config"
import { toEditor } from "src/pages/editor/route"
import { chooseFile } from "src/shared/func/chooseFile"

/**
 * 使用 ES6 中的类表达式和立即执行函数来创建一个单例模式的对象 appStore
 */
export const appStore = new (
    class {
        print = false
        constructor() {
            makeAutoObservable(this);

            window.onbeforeprint = () => {
                this.print = true
            }

            window.onafterprint = () => {
                this.print = false
            }
        }

        callPrint = () => {
            this.print = true
            setTimeout(() => {
                //触发浏览器打印操作
              window.print()
            })
          }
          importConfig = async () => {
            const files = await chooseFile({
                multiple: false,
                accept: '.json'
            })
            const file = files[0];
            const reader = new FileReader()
            reader.onloadend = () => {
                console.log('数据结果',reader.result);
                const config = JSON.parse(reader.result as string)
                toEditor({
                    params: { key: config.templateKey },
                    data: config.templateConfig,
                  })
            }
            reader.readAsText(file);
          }
          toGithub = () => {
            window.open(config.github, '_blank')
          }
    }
)()