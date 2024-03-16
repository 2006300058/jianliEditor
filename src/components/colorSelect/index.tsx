import { FC } from 'react' //FC类型是React模块中定义的一种函数组件类型，表示该组件接收一个props参数并返回一个React元素。在React函数式组件的定义中，需要使用FC类型来声明组件类型，
import styles from './index.module.scss'

interface Color {
    name: string,
    value: string,
}

interface ColorSelectProps {
    colors?: Color[],
    onSelect: (color: Color, index: number) => void
}

export const ColorSelect: FC<ColorSelectProps> = ({ colors, onSelect
}) => {
    return (
        <>
            <div className={styles.index}>
                {colors!.map(( item, index) => {
                    return (
                        <div key={index} style={{ background: item.value }} onClick={() => onSelect(item, index)}>
                            {item.name}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

ColorSelect.defaultProps = {
    colors: [
        { name: '黑色', value: '#000000'},
        { name: '勃艮第红', value: '#900021'},
        { name: '中国红', value: '#E60000'},
        { name: '克莱因蓝', value: '#002EA6'},
        { name: '普鲁士蓝', value: '#003153'},  
        { name: '蒂芙尼蓝', value: '#80D1C8'},
        { name: '薄荷绿', value: '#407e54'},
        { name: '岩石棕', value: '#a76230'},
        { name: '木乃伊棕', value: '#8F4B28'},
        { name: '苋菜紫', value: '#982d66'},
    ]
}