import { computed, makeObservable } from "mobx";
import React from "react";
import { FormilyTemplate, IDeveloperData } from "src/shared/formily";
import { DeveloperModel } from "src/shared/formily/datas/developer";
import poster from './assets/poster.jpeg';
import { TitleStyle1 } from './view/title/styles/style1';
import { TitleStyle2 } from './view/title/styles/style2';
import { TitleStyle3 } from './view/title/styles/style3';
import { TitleStyle4 } from './view/title/styles/style4';
import { TitleStyle5 } from './view/title/styles/style5';
import { TitleStyle6 } from './view/title/styles/style6';

const View = React.lazy(() => import('./view'));
const ConfigForm = React.lazy(() => import('./configForm'));

export const titles = [
    {
        name: 'style1',
        component: TitleStyle1,
    },
    {
        name: 'style2',
        component: TitleStyle2,
    },
    {
        name: 'style3',
        component: TitleStyle3
    },
    {
        name: 'style4',
        component: TitleStyle4
    }, 
    {
        name: 'style5',
        component: TitleStyle5
    }, 
    {
        name: 'style6',
        component: TitleStyle6
    }, 
];

const DEFAULT_CONFIG = {
    modules: [
        {
            key: 'skills' as const,
            name: '专业技能',
            visiable: true,
        },
        {
            key: 'workingHistory' as const,
            name: '工作经历',
            visiable: true,
        },
        {
            key: 'ownerProjects' as const,
            name: '项目经历',
            visiable: true,
        },
        {
            key: 'aboutMe' as const,
            name: '自我评价',
            visiable: true,
        }
    ],
    githubvisible: true,
    primaryColor: '#002FA7',
    titleStyle: titles[0].name
}

export class DeveloperConcise2Template extends FormilyTemplate<IDeveloperData, typeof DEFAULT_CONFIG> {
    key = 'template2';
    name = '简历2';
    tags = ['1', '2'];
    view = View;
    configForm = ConfigForm;
    dataForm = DeveloperModel.form;
    poster = poster;
    defaultData = DeveloperModel.Default_Data;
    defaultConfig = DEFAULT_CONFIG;

    moveModule = (index: number, targetIndex: number) {
        if(targetIndex < 0) return;
        let temp  = this.config.modules[targetIndex]
        this.config.modules[targetIndex] = this.config.modules[index]
        this.config.modules[index] = temp;
    }

    constructor() {
        super()
        makeObservable(this, {
            titleComponent: computed,
        })
    }
    get titleComponent() {
        return titles.find((item) => item.name === this.config.titleStyle)?.component
    }
}