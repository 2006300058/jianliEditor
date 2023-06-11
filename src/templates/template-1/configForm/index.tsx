

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
    
}