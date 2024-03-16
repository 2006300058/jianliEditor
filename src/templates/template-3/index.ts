import React from "react";
import { INormalSidevarData, NormalSidebarModel } from "src/shared/formily/datas/normal-sidebar";
import {FormilyTemplate} from '../../shared/formily/template'
import poster from './assets/poster.jpeg'

const View = React.lazy(() => import('./view'));

const ConfigForm = React.lazy(() => import('./configForm'));

const DEFAULT_CONFIG = {
    primaryColor: '#002fa7',
    background: '#ffffff',
}

export class Template3 extends FormilyTemplate<INormalSidevarData, typeof DEFAULT_CONFIG > {
    key = 'template-3';
    name = '模板3'
    tags = ['单页', '侧栏', '设计感']
    view = View
    dataForm = NormalSidebarModel.form
    configForm = ConfigForm
    poster = poster
    defaultData = NormalSidebarModel.defaultData
    defaultConfig = DEFAULT_CONFIG
};