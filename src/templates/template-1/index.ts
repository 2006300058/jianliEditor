import { FormilyTemplate, IDeveloperData  } from "src/shared/formily";
import { DeveloperModel } from 'src/shared/formily/datas/developer';
import React from "react";
import bg1 from './assets/images/bg1.png'
import bg2 from './assets/images/bg2.png'
import bg3 from './assets/images/bg3.png'
import bg4 from './assets/images/bg4.png'
import bg5 from './assets/images/bg5.png'
import bg6 from './assets/images/bg6.png'
import bg7 from './assets/images/bg7.png'
import bg8 from './assets/images/bg8.png'
import bg9 from './assets/images/bg9.png'
import bg10 from './assets/images/bg10.png'
import bg11 from './assets/images/bg11.png'
import poster from './assets/poster.jpeg'

export const backgroundImages = [bg1, bg2, bg3, bg4, bg5];



const DEFAULT_CONFIG = {
    modules : [
        {
            key: 'introduce' as const,
            name: '简介',
            visible: true
        },
        {
            key: 'workHistory' as const,
            name: "工作经历",
            visable: true
        },
        {
            key: 'ownerProjects' as const,
            name: '个人项目',
            visible: true
        },
        {
            key: 'strongPoint' as const,
            name: '特长',
            visible: true
        }
    ],
   // backgroundImage: backgroundImages[0],
    githubVisible: true
}

export class DeveloperConcise1Template extends FormilyTemplate<IDeveloperData, typeof DEFAULT_CONFIG> {
    key='template-1';
    name='模板1';
    tags=['1'];
    poster = poster;
    dataForm = DeveloperModel.form;
    defaultData = DeveloperModel.Default_Data;
    defaultConfig = DEFAULT_CONFIG

     moveModule = ( index: number, targetIndex: number) => {
        if(targetIndex < 0) return;
        let temp = this.config.modules[targetIndex]
        this.config.modules[targetIndex] = this.config.modules[index]
        this.config.modules[index] = temp;
     }
}