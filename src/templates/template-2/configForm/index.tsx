import { Button, Input, Radio, Space, Switch } from 'antd';
import React from 'react';
import { useObserver } from 'mobx-react-lite';
import { ColorSelect } from 'src/components/colorSelect';
import { Icon } from 'src/components/icon';
import { useTemplate } from 'src/templates/template';
import styles from './index.mudule.scss';
import { DeveloperConcise2Template } from '..';

export const Header = () => {
    const {data} = useTemplate<DeveloperConcise2Template>()

    return useObserver(() => {
        <div className={styles.index}>
            <div className={styles.content}>
                <div className={styles.name}>{data.name}</div>
                <div className={styles.des}>
                    <span>
                    {[data.age, data.gender, data.city, data.target, data.phoneNumber, data.email].filter(Boolean).join(' ∕ ')}
                    </span>
                    <br/>
                    <span>{`${data.education.gradurationTime} 年毕业于 ${data.education.schoolName} - ${data.education.major}`}</span>
                </div>
            </div>
        </div>
    })
}