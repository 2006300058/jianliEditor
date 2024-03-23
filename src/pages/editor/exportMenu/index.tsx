import { FC } from "react";
import jpeg from 'src/assets/image/icon/jpeg.png'
import pdf from 'src/assets/image/icon/pdf.png'
import { useStore } from 'src/shared/storeProvider'
import { Store } from '../store'
import styles from './index.module.scss'

export const ExportMenu: FC = () => {

    const store = useStore<Store>()
    return (
        <div className={styles.index}>
            <div className={styles.item} onClick={store}>

            </div>
        </div>
    )
}