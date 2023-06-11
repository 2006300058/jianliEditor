import { makeObservable, observable, toJS } from "mobx";
import React, { ElementType, FC, ReactNode } from "react";
/**抽象模板配置类 */
export abstract class BaseTemplate<D = unknown, C = unknown>{

    config: C = undefined as any
    data: D = undefined as any

    constructor() {
        makeObservable(this, {
            data: observable,
            config: observable
        })
    }

    abstract key: string
    abstract name: string
    abstract tags?: string[]
    abstract poster: string
    abstract view: React.ElementType //是 TypeScript 中 React 组件类型的表示方式。它表示组件的类型，可以是字符串表示的 HTML 元素（如 "div"、"span"），也可以是自定义组件。使用 React.ElementType 可以增强组件的类型检查。
    abstract configForm: React.ElementType
    abstract dataForm: React.ElementType
    abstract defaultData: D
    abstract defaultConfig: C

    exportConfig() {
        return toJS(this.config)
    }
    importConfig(config?: C) {
        if(config) {
            this.config = config
        } else {
            this.config = toJS(this.defaultConfig)
        }
    }
    exportData() {
        return toJS(this.data)
    }
    importData(data?: D) {
        if(data) {
            this.data = data
        } else {
            this.data = toJS(this.defaultData)
        }
    }
    /**ElementType 表示一个 React 组件类型，它可以接收一个对象类型参数，这个对象类型参数包含一个名为 children 的属性，属性类型为 ReactNode。这个组件类型被用于 React 组件的 prop 类型声明中，它表示这个 prop 接收的值是一个 React 组件。 */
    abstract provider: ElementType<{ children: ReactNode}>

}
/** 创建了一个 React 的 context（上下文），并指定了这个 context 的值类型为 BaseTemplate。这个 context 可以被用于在组件树中传递 BaseTemplate 实例，从而让这些实例在树中的子组件中被访问到。在创建 context 的时候，我们需要指定一个默认值，这里使用了 undefined as any。*/
const TemplateContext = React.createContext<BaseTemplate>(undefined as any)

export function useTemplate<T = unknown>(): T{
    return React.useContext(TemplateContext) as T
}
/**TemplateProvider 是一个 React 函数组件，它接受两个 props：value 和 children。value 是一个 BaseTemplate 对象，它将被作为 TemplateContext 的值传递给所有子组件。children 则是要被包裹的子组件树。

在组件内部，使用了 TemplateContext.Provider 来提供 TemplateContext 的值。TemplateProvider 将 value 作为 TemplateContext.Provider 的值传递，并将 children 作为它的子元素传递。这样，所有被 TemplateProvider 包裹的组件都可以通过 useContext(TemplateContext) 来访问 value，而无需一层层地将 value 传递下去。 */
export const TemplateProvider: FC<{value: BaseTemplate; children: ReactNode}> = ({value, children}) => {
    return <TemplateContext.Provider value={value}>{children}</TemplateContext.Provider>
}

