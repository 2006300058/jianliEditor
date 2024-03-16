import clsx from "clsx";
import { useObserver } from "mobx-react-lite";
import { Working } from "src/components/working";
import { useTemplate } from "src/templates/template";
import { Template3 } from "..";
import { BaseInfo } from "./baseInfo";
import { Header } from "./header";
import { LeftItem } from "./leftItem";
import { Title } from "./title";
import styles from './index.module.scss'


const View = () => {
    const { config, data } = useTemplate<Template3>()

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
            <Header />
            <BaseInfo />
            <main>
                <div className={styles.left}>
                    {
                        data.sidebar.map((item, index) => {
                            return <LeftItem
                                key={index}
                                title={item.title}
                                labels={item.content.split('\n')} />


                        })
                    }
                </div>
                <div className={styles.right}>

                    <div className={styles.title}>
                        <Title>工作经历</Title>
                    </div>

                    {
                        data.workingHistory.map((item, index) => {
                            return (
                                <div className={styles.item} key={index}>
                                    <Working
                                        name={item.title}
                                        time={[item.startTime, item.endTime]}
                                        content={item.content} />
                                </div>
                            )
                        })
                    }

                    <div className={styles.introduce}>{data.introduce}</div>
                </div>
            </main>
        </div>
    ))
}

export default View;