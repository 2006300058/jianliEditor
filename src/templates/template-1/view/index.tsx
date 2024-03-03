import clsx from 'clsx'
import { useObserver } from 'mobx-react-lite'
import { FC } from 'react'
import { useTemplate } from 'src/templates/template'
import { DeveloperConcise1Template } from '..'
import { Header } from './header'
import { Title } from './title'
import { WorkingHistory } from './workingHistory'
import { OwnerProjects } from './ownerProjects'
import styles from './index.module.scss'

/**
 * 主页面
 */
const View: FC = () => {
    const { config, data } = useTemplate<DeveloperConcise1Template>()
    const renderContent = useObserver(() => {
        const modules = {
            introduce: (
                <div className={clsx(styles.content, styles.introduce)}>
                    {
                        data.skill.split('\n').map((item, index) => {
                            return <div key={index}>{item}</div>
                        })
                    }
                </div>
            ),
            ownerProjects: (
                <div className={clsx(styles.content, styles.ownerProjects)}>
                    <OwnerProjects />
                </div>
            ),
            workHistory: (
                <div className={clsx(styles.conetnt)}>
                    <WorkingHistory />
                </div>
            ),
            strongPoint: (<div className={clsx(styles.content)}>{data.aboutMe}</div>)
        }
        return config.modules.filter((item) => {
            item.visable
        }).map((it, index) => {
            return (
                <div key={it.key}>
                    <div className={styles.title}>
                        <Title value={it.name} line={index !== 0} />
                    </div>
                    {modules[it.key]}
                </div>
            )
        })
    })
    return useObserver(() => (
        <div className={styles.index}>
            <div className={styles.header}>   
                <Header />
            </div>
            {renderContent}
        </div>
    ))
}
export default View