import { useObserver } from "mobx-react-lite";
import { useTemplate } from "src/templates/template";
import { DeveloperConcise2Template } from "../..";
import styles from './index.module.scss'

export const OwnerProjects = () => {
    const { data, config } = useTemplate<DeveloperConcise2Template>()

    return useObserver(() => (
        <div className={styles.index}>
            {data.projects.map((item, index) => {
                return (
                    <div key={index} className={styles.item}>
                        <div className={styles.header}>
                            <div className={styles.name}>{item.title}</div>
                            <div className={styles.time}></div>
                        </div>
                        <div className={styles.des} dangerouslySetInnerHTML={{ __html: item.content.replace(/>\n/g, '<br/>') }}></div>
                    </div>
                )
            })}
            {
                config.githubvisible && (
                    <div className={styles.more}>
                        ➱ 更多我的个人项目请看 GitHub：
                        <span
                            style={{
                                textDecoration: 'underline',
                            }}
                        >
                            {data.github}
                        </span>
                    </div>
                )
            }
        </div>
    ))
}