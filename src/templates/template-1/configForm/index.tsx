import { Button, Input, Space, Switch } from 'antd'
import { Icon } from 'src/components/icon'
import { useTemplate } from 'src/templates/template'
import { backgroundImages, DeveloperConcise1Template } from '..'
import styles from './index.mudule.scss'
import { useObserver } from 'mobx-react-lite'


/**
 * 第一个模板的模块选项
 * 
 */
const ConfigForm = () => {
    const { config, moveModule } = useTemplate<DeveloperConcise1Template>()

    return useObserver(() => {
        <div className={styles.index}>
            {
                config.modules.map((item, index) => {
                    return (
                        <div key={item.key} className={styles.item}>
                            <Input
                                style={{ width: 300 }}
                                bordered={false}
                                value={item.name}
                                onChange={(e) => { item.name = e.target.value }}
                            >
                            </Input>
                            <Space>
                                <Switch
                                    checkedChildren='显示'
                                    unCheckedChildren='不显示'
                                    checked={item.visable}
                                    onChange={(val) => { item.visable = val }}

                                />
                                <Button
                                    shape='circle'
                                    onClick={() => moveModule(index, index - 1)}>
                                    icon = {<Icon value='arrow-up-line' />}
                                </Button>
                            </Space>
                        </div>
                    )
                })
            }
        </div>
    })
}