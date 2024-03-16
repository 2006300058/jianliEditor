import { useObserver } from "mobx-react-lite";
import { useTemplate } from "src/templates/template";
import { Template3 } from "../..";
import styles from './index.module.scss'

export const BaseInfo = () => {
    const { data } = useTemplate<Template3>()

    return useObserver(() => {
        const items = [
            {
                label: '年龄',
                value: data.age
            },
            {
                label: '性别',
                value: data.gender,
            },
            {
                label: '城市',
                value: data.city,
            },
            {
                label: '电话',
                value: data.phoneNumber,
            },
            {
                label: '邮箱',
                value: data.email,
            },
        ]

        return (
            <div className={styles.index}>
                {
                    items.map((item, index) => {
                        return (
                            <div key={index}>
                                {item.label}： {item.value}
                            </div>
                        )
                    })
                }
            </div>
        )
    })
}