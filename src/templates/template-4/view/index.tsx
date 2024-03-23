import { useObserver } from "mobx-react-lite";
import { Working } from "src/components/working";
import { useTemplate } from "src/templates/template";
import { Template4 } from "..";
import { Header } from "./header";
import { LeftItem } from "./leftItem";
import { Title } from "./title";
import styles from './index.module.scss'

const View = () => {
    const store = useTemplate<Template4>()
    const { config, data } = store
    return useObserver(() => (
        <div
            className={styles.index}
            style={
                {
                    '--color-primary': config.primaryColor,
                    '--background': config.background
                } as any
            }
        >
            <div className={styles.left}>
                {
                    [
                        store.baseInfo, ...data.sidebar
                    ].map((item, index) => {
                        return <LeftItem key={index} title={item.title} labels={item.content.split('\n')} />
                    })
                }
            </div>

            <div className={styles.right}>
                <Header />


                <div className={styles.title}>
                    <Title>工作经历</Title>
                </div>

                {
                    data.workingHistory.map((item, index) => {
                        return (
                            <div className={styles.item} key={index}>
                                <Working name={item.title}
                                    time={[item.startTime, item.endTime]}
                                    content={item.content}
                                />
                            </div>
                        )
                    })
                }

                <div className={styles.title}>
                    <Title>自我评价</Title>
                </div>

                <div className={styles.introduce}>{data.introduce}</div>

            </div>
        </div>
    ))
}
export default View