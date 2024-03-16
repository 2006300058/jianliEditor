import { DataForm } from "./form";

const Default_Data = {
    name: '小白',
    gender: '男',
    age: '25',
    city: '广州市',
    phoneNumber: '1888888888',
    email: '3042760692@qq.com',
    introduce: ``,
    workingHistory : [
        {
            title: ``,
            startTime: ``,
            endTime: ``,
            content: ``
        },
    ],
    projects: [
        {
            title: '',
            content: '',
        },
        {
            title: '',
            content: '',
        }
    ],
    sidebar: [
        {
            title: `教育背景`,
            content: ``,
        },
        {
            title: `求职意向`,
            content: ``,
        },
        {
            title: `自我评价`,
            content: ``,
        },
    ]
}

export type INormalSidevarData = typeof Default_Data

export const NormalSidebarModel = {
    defaultData: Default_Data,
    form: DataForm
}