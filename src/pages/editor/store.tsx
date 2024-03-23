import { message } from "antd";
import { saveAs } from "file-saver";
import { toBlob } from "html-to-image";
import { makeAutoObservable } from "mobx";
import { openExportPDFHelp } from "src/components/popups/exportPDF";
import { router } from "src/router";
import { toEditor } from "./route";
import { appStore } from "src/stores/app";
import { showInfo } from "src/shared/toast";
import { templates } from "src/templates";
import { BaseTemplate } from "src/templates/template";

export class Store {

    constructor(key: string) {

        this.template = templates.find((item) => item.key === key)!
        const state: any = router.location?.state

        this.template.importConfig(state.config);
        this.template.importData(state.data)

        if (!state) {
            showInfo('已自动填充初始信息')
        }

        makeAutoObservable(this, {
            template: false
        })
    }


    template: BaseTemplate

    grayPreview = false

    currentForm: 'data' | 'config' | 'template' = 'data'

    get availableTemplates() {
        return templates.filter((item) => item.dataForm === this.template.dataForm && item.key !== this.template.key)
    }

    /**
     * 用于将模板的配置和数据导出为 JSON 文件并通过浏览器进行下载。
     */
    exportJson = () => {
        const config = this.template.exportConfig()
        const data = this.template.exportData()
        saveAs(
            new Blob([
                JSON.stringify({
                    templateKey: this.template.key,
                    templateName: this.template.name,
                    templateConfig: {
                        config,
                        data,
                    },
                })
            ],
                { type: 'text/plain;charset=utf-8' }
            ),
            `resume.json`
        )
    }

    exportMenuOpen = false;

    exportPdf = async () => {
        this.exportMenuOpen = false;
        await openExportPDFHelp()
        appStore.callPrint()
    }

    exportPng = async () => {
        this.exportMenuOpen = false;
        try {
            message.loading({
                key: 'exportPng',
                content: '正在导出为图片。。。'
            })
            const container = document.getElementById('template-view')!

            const options = {
                type: 'image/jpeg',
                cacheBust: true,
                canvasHeight: container?.clientHeight,
                canvasWidth: container?.clientWidth,
            }

            // 提前调用两次避免生成空白的页面
            await toBlob(container, options)
            await toBlob(container, options)
            const data = await toBlob(container, options)
            saveAs(data!, 'resume.jpeg')
            message.destroy('exportPng')

        } catch (err: any) {
            message.error(err.message)
        }
    }

    changeTemplate = (key: string ) => {
        console.log('改变模板');
        const targetTemplate = templates.find((item) => item.key === key);
        if(!targetTemplate) return;
        if(targetTemplate.dataForm === this.template.dataForm) {
            toEditor({
                params: {key},
                data: {
                    data: this.template.exportData(),
                }
            })
        } else {
            toEditor({
                params: {key},
            })
        }
    }


}

