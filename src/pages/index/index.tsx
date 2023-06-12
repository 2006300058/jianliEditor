import { Button } from "antd"
import clsx from "clsx"
import headBg from 'src/assets/image/head-bg.jpg'
import {Icon} from 'src/components/icon'
import { TemplateCard } from 'src/components/templateCard'
import { toEditor } from "../editor/route"
import {appStore} from 'src/stores/app'
//import { templates } from 'src/templates'
import styles from './index.module.scss'

export const IndexPage = () => {



    return (
        <div className={styles.index}>
            <header>
                <img src={headBg} alt="" />
                <div className={styles.content}>
                    <div className={styles.title}>简历编辑
                    </div>
                    <div className={styles.actions}>
                        <Button type="primary" className={styles.action} >
                            <Icon className={styles.icon} value="file-code-line"/>
                            导入配置
                        </Button>
                        <Button type="primary" className={clsx(styles.action, styles.github)}>
                            <Icon className={styles.icon} value="github-fill"/>
                            Github
                        </Button>
                    </div>
                </div>    
            </header>

            <main>
                <div className={styles.title}>简历模板</div>
                <div className={styles.templates}>
                </div>
            </main>
        </div>
    )
}