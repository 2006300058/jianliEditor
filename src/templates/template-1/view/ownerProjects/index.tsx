import { useObserver } from 'mobx-react-lite'
import { useTemplate } from "src/templates/template";
import { DeveloperConcise1Template } from "../..";
import styles from './index.mudule.scss';

/**
 * 
 * 个人项目展示
 */
export const OwnerProjects = () => {
    const { config, data } = useTemplate<DeveloperConcise1Template>()

    return useObserver(() => (
        <div className={styles.index}>
            {
                data.projects.map((item, index) => {
                    return (
                        <div key={index} className={styles.item}>
                            <div className={styles.header}>
                                <div className={styles.name}>{item.title}</div>
                                <div className={styles.time}></div>
                            </div>
                            <div className={styles.des} dangerouslySetInnerHTML={{ __html: item.content.replace(/\n/g, '<br/>') }}></div>
                        </div>
                    )
                })
            }
            {config.githubVisible && (
                <div className={styles.more}>
                    Github
                    <span style={{ textDecoration: 'underline' }}>{data.github}</span>
                </div>
            )}
        </div>
    ))
}