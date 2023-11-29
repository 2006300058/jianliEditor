import { useEffect, useState } from "react";
/** 是否可见 */
export function useScrollFloating(
    target: React.MutableRefObject<HTMLElement | null>,
    options?: {
        threshold: number //表示滚动距离超过该阈值时才会触发元素可见性的变化，默认值为 50。
    }
) {
    options = Object.assign({threshold: 50}, options)
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        let timer: number,
        lastScrollTop = target.current?.scrollTop || 0

        const onScroll = (e:any) => {
            //计算当前滚动距离和上一次滚动距离的差值
            let distance = e.target.scrollTop - lastScrollTop
            if(Math.abs(distance) < options!.threshold) return
            setVisible(distance < 0)
            lastScrollTop = e.target.scrollTop
        }

        const _onScroll = (e: any) => {
            clearTimeout(timer)
            //避免在滚动事件连续触发时频繁更新 visible 状态变量的值，从而提高性能
            timer = window.setTimeout(() => {
                onScroll(e)
            }, 100)
        }
        target.current?.addEventListener('scroll', _onScroll)
        return () => target.current?.removeEventListener('scroll', _onScroll);
    }, [target])

    return { visible }
}