import { FC } from "react";
import { Title } from "../title";
import styles from './index.module.scss'

interface LeftItemProps {
    title : string
    labels: string[]
}

export const LeftItem: FC<LeftItemProps> = ({title, labels}) => {
    return (
        <div className={styles.index}>
            <div className={styles.title}>
                <Title>{title}</Title>
            </div>
            <div className={styles.labels}>
                {
                    labels.map((item, index) => {
                        return (
                            <div className={styles.item} key={index}>
                                {item}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}