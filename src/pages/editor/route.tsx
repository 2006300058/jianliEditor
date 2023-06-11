import { router } from "src/router";
import { EditorPage } from ".";

export const editorRoute = { path: '/editor/:key', element: <EditorPage/>}

export type Params = {
    key: string
}

export type Data = {
    data?: any
    config?: any
}

/**点击模板跳转 */
export function toEditor( options: {params: Params; data: any; replace?: boolean}){
    router.navigate('/editor' + options.params.key, {
        replace: options.replace,
        state: options.data, //用于传递导航状态信息的属性。它可以是任何 JavaScript 对象，表示导航时的一些上下文信息，
    })
}