import clsx  from "clsx"; //一个函数式的工具库，用于处理 CSS 类名的合并和转换。这个库可以接受不同类型的参数，包括字符串、布尔值、数组和对象等，并将它们合并成一个包含有效类名的字符串。
import React ,{ FC, ReactNode } from "react";
import { useScrollFloating } from "src/shared/hooks/useScrollFloating";
import styles from './index.module.scss'

interface FloatActionsProps {
    target: React.MutableRefObject<HTMLElement | null>
    children: ReactNode
}

export const FloatingBottom : FC<FloatActionsProps> = ({ target, children }) => {
    const { visible } = useScrollFloating(target)
    return <div
    className={clsx(styles.index, visible === false && styles.hidden)}
    >
        {children}
    </div>
}
