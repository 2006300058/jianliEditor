
/**
 *  复制到剪切板
 * @param text 
 * @returns 
 */
export function copyToClipboard(text: string) {
    if(navigator.clipboard) {
        return navigator.clipboard.writeText(text);
    } else {
        return new Promise<void>((resolve, reject) => {
            let textarea = document.createElement('textarea');
            document.body.appendChild(textarea);
            //隐藏
            textarea.style.position = 'fixed';
            textarea.style.clip = 'rect(0 0 0 0)';
            textarea.style.top = '10px'
            // 赋值
            textarea.value = text
            // 选中
            textarea.select()
            try {
                // 复制
                if(document.execCommand('copy', true)) resolve()
                else throw new Error('复制失败')
            } catch (err) {
                reject(err)
            } finally {
                document.body.removeChild(textarea)
            }
        })
    }
}