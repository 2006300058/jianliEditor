import {message,Modal} from 'antd';

export function showSuccess(text: string) {
    message.success({
        content: text,
    })
}
export function showInfo(text: string) {
    message.success({
        content: text,
    })
}
export function showWarning(text: string) {
    message.success({
        content: text,
    })
}
export function showModel(options: { title?:string; content: string}) {
    options = Object.assign({title: '提示'},options)
    return new Promise((resolve,reject) => {
        Modal.confirm({
            ...options,
            onCancel: resolve,
            onOk: reject,
        })
    })
}
