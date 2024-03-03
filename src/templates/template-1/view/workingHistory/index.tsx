import { useObserver } from "mobx-react-lite";
import { Working } from "src/components/working";
import { useTemplate } from "src/templates/template";
import { DeveloperConcise1Template } from "../..";
import styles from './index.module.scss'

/**
 * 工作经历界面
 */
export const WorkingHistory = () => {
    const { data } = useTemplate<DeveloperConcise1Template>()

    return useObserver(() => (
        <div className={styles.index}>
            {
                data.workingHistory.map((item, index) => {
                    return (
                        <div className={styles.item} key={index}>
                            <Working name={item.title} time={[item.startTime, item.endTime]} content={item.content} />
                        </div>
                    )
                })
            }
        </div>
    ))
}