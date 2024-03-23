import React from "react";
import { INormalSidevarData, NormalSidebarModel } from "src/shared/formily/datas/normal-sidebar";
import { FormilyTemplate } from "src/shared/formily";
import poster from '../assets/images/poster.jpeg'

const View = React.lazy(() => import('./view'))
const ConfigForm = React.lazy(() => import('./configForm'))

const DEFAULT_CONFIG = {
    primaryColor: '#002fa7',
    background: '#ffffff',
}

export class Template4 extends FormilyTemplate<INormalSidevarData, typeof DEFAULT_CONFIG> {
    key = 'template-4'
    name = '模板4'
    tags = ['', ''];
    view =View;
    dataForm = NormalSidebarModel.form
    poster = poster;
    configForm = ConfigForm;
    defaultData = NormalSidebarModel.defaultData
    defaultConfig = DEFAULT_CONFIG

    get baseInfo() {
        return {
            title: '基础信息',
            content: [
                {
                    label: '年龄',
                    value: this.data.age,
                  },
                  {
                    label: '性别',
                    value: this.data.gender,
                  },
                  {
                    label: '城市',
                    value: this.data.city,
                  },
                  {
                    label: '电话',
                    value: this.data.phoneNumber,
                  },
                  {
                    label: '邮箱',
                    value: this.data.email,
                  },
            ].filter((item) => Boolean(item.value)).reduce((pre, cur) => {
                return (pre  += `${cur.label}: ${cur.value}\n`)
            }, '')
        }
    }
}