import clsx from "clsx"
import { useObserver } from "mobx-react-lite"
import React, { FC } from "react"
import { useTemplate } from "src/templates/template"
import { DeveloperConcise2Template } from ".."
import styles from './index.module.scss'
import { Header } from './header'
import { OwnerProjects } from "./ownerProjects"
import { WorkingHistory } from "./workingHistory"



 const View: FC = () => {
    const store = useTemplate<DeveloperConcise2Template>()
    const config = store.config
    const data = store.data

    const renderContent = useObserver(() => {
        const module = {
            skills: (
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
            workingHistory: (
                <div className={clsx(styles.content)}>
                    <WorkingHistory />
                </div>
            ),
            aboutMe: <div className={clsx(styles.content)}>{data.aboutMe}</div>
        }

        return config.modules.filter((item) => item.visiable).map((item) => {
            return (
                <div key={item.key}>
                    <div className={styles.title}>
                        {
                            React.createElement(store.titleComponent, {
                                value: item.name
                            })
                        }
                    </div>
                    {module[item.key]}
                </div>
            )
        })
    })
    return useObserver(() => (
        <div
            className={styles.index}
            style={
                {
                    '--color-primary': config.primaryColor,
                } as any
            }
        >
            <div className={styles.header}>
                <Header />
            </div>

            {renderContent}
        </div>
    ))
}
export default View
