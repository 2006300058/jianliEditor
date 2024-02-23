import { DataForm } from "./form";

/**
 * 表单默认数据
 */
const Default_Data = {
    name: '小白',
    gender: '男',
    age: '25',
    city: '广州市',
    phoneNumber: '1888888888',
    email: '3042760692@qq.com',
    education: {
        schoolName: '广州大学',
        gradurationTime: '2024',
        major: '软件工程',
        degree: '本科',
    },
    target: '前端工程师',
    skill: ``,
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
    github: '',
    workingHistory : [
        {
            title: ``,
            startTime: ``,
            endTime: ``,
            content: ``
        },
    ],
    aboutMe: ``,
}

export type IDeveloperData = typeof Default_Data

export const DeveloperModel = {
    Default_Data: Default_Data,
    form: DataForm
}