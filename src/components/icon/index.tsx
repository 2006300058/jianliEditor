import React,{FC, useMemo } from "react";

interface IconProps {
    value: string
    className?: string
    /**React组件props中的一个可选属性，用于设置组件的CSS样式。 */
    style?: React.CSSProperties | undefined 
    /** React 的 props，它表示一个点击事件处理函数。它接受一个参数，类型为 React.MouseEvent<HTMLElement, MouseEvent>，表示 HTML 元素的鼠标点击事件。其中，第一个参数 e 表示事件对象，包含了该次事件的相关信息，例如事件发生的元素、鼠标点击位置等等。函数体中的代码将在用户点击元素后执行。*/
    onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void

}

export const Icon: FC<IconProps> = (props) => {
    const { style, onClick } = props

    const value = useMemo(() => {
        if (props.value.startsWith('icon')) {
            return props.value
        } else {
            return 'icon-' + props.value
        }
    }, [props.value])

    return (
        <span
            className={props.className}
            style={{ display: 'inline-flex', ...style}}
            onClick={onClick}
        >
            <span className={value} style={{fontSize: 'inherit'}}></span>

        </span>
    )
}