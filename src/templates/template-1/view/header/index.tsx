import { useObserver } from "mobx-react-lite";
import { useTemplate } from "src/templates/template";
import { DeveloperConcise1Template } from "../..";
import styles from './index.module.scss'

/**
 * 
 * 第一个模板头部信息
 */
export const Header = () => {
    const { config, data } = useTemplate<DeveloperConcise1Template>()

    return useObserver(() => (
        <div className={styles.index}>
            {
                config.backgroundImage && (
                    <div className={styles.bg}>
                        <img className={styles.image} src={config.backgroundImage} alt="" />
                    </div>
                )
            }
            <div className={styles.content}>
                <div className={styles.name}></div>
                <div className={styles.des}>
                    <span>
                        姓名：{data.name} 性别： {data.age} - 年龄：{data.age} - 城市: {data.city} 手机号码: {data.phoneNumber} 电子邮箱： {data.email}
                    </span>
                    <br/>
                    <span>
                        毕业院校： {data.education.schoolName} 学位： {data.education.degree} - 求职方向: {data.target}
                    </span>
                </div>
            </div>
        </div>
    ))
}