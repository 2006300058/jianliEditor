import { useObserver } from "mobx-react-lite";
import { useTemplate } from "src/templates/template";
import { Template3 } from "../..";
import styles from './index.module.scss'

export const Header = () => {
    const {data} = useTemplate<Template3>()

    return useObserver(() => (
        <div className={styles.index}>
            <div className={styles.hello}>
            </div>
            <div className={styles.name}>{data.name}</div>
        </div>
    ))
}