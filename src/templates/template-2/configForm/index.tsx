import { Button, Input, Radio, Space, Switch } from 'antd';
import React from 'react';
import { useObserver } from 'mobx-react-lite';
import { ColorSelect } from 'src/components/colorSelect';
import { Icon } from 'src/components/icon';
import { useTemplate } from 'src/templates/template';
import styles from './index.mudule.scss';
import { DeveloperConcise2Template, titles } from '..';

const ConfigForm = () => {
    const { config, moveModule } = useTemplate<DeveloperConcise2Template>()

    return useObserver(() => (
        <div className={styles.index}>
            <h3>模块</h3>
            <div className={styles.modules}>
                {
                    config.modules.map((item, index) => {
                        return (
                            <div key={item.key} className={styles.item}>
                                <Input
                                    style={{ width: 300 }}
                                    bordered={false}
                                    value={item.name}
                                    onChange={(e) => (item.name = e.target.value)}
                                />
                                <Space>
                                    <Switch
                                        checkedChildren="显示"
                                        unCheckedChildren="隐藏"
                                    />
                                    <Button
                                        shape='circle'
                                        onClick={() => moveModule(index, index - 1)}
                                        icon={<Icon value='arrow-up-line' />}>

                                    </Button>
                                </Space>
                            </div>
                        )
                    })
                }
            </div>

            <h3>主色调</h3>
            <Input value={config.primaryColor} onChange={(e) => (config.primaryColor = e.target.value)}/>
            <ColorSelect onSelect={(color) => (config.primaryColor = color.value)}/>

            <h3>Github</h3>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                 是否要显示 Github 地址？
                 <Switch
                    checkedChildren='显示'
                    unCheckedChildren='隐藏'
                    checked={config.githubvisible}
                    onChange={(val) => (config.githubvisible = val)}
                 />
            </div>

            <h3>标题样式</h3>

            <div style={
                {
                    '--color-primary': config.primaryColor,
                } as any
            }>
                {
                    titles.map((item) => {
                        return (
                            <div>
                                <Radio.Group value={config.titleStyle} onChange={(e) => (config.titleStyle = e.target.value)}>
                                    <Radio value={item.name}>
                                        <div style={{padding: '6px 0', width: 300}}>
                                            {
                                                React.createElement(item.component, {
                                                    value: '标题样式',
                                                } as any)
                                            }
                                        </div>
                                    </Radio>
                                </Radio.Group>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    ))
}

export default ConfigForm