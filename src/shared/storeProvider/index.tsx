import React, {FC, ReactNode} from "react";

/**
 * 创建上下文对象
 */
const StoreContext = React.createContext(undefined);

/**
 * 自定义Hook，用于在组件中获取上下文中存储的值
 * 
 */
export function useStore<T = any>(): T {
    return React.useContext(StoreContext) as any
}
/**
 * 用于提供存储值的上下文
 * 接受一个名为 children 的 Props，表示要包裹的子组件，
 * 以及一个名为 value 的 Props，表示要传递的值。
 */
export const StoreProvider: FC<{ children: ReactNode; value: any }> = ({children, value}) => {
    return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}