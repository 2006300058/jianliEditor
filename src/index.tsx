/*
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'src/assets/css/index.scss'
import 'src/assets/css/var.css'
import {router} from './router'
import 'antd/dist/antd.variable.min.css'
import { configure } from 'mobx'
import 'oh-popup-react/dist/style.css'
import { RouterView } from 'oh-router-react'
import { createRoot } from 'react-dom/client'//该语句用于替换 ReactDOM.render 方法的作用，并开启 React 中的 Concurrent Mode（并发模式）。
import {ManagerProvider} from 'oh-popup-react'
import { popupManager } from './shared/popupManager'
configure({ enforceActions: 'never'}) //用于在开发模式下强制执行所有状态更改（observable）和动作（action）都在严格模式下进行，即只有在动作内部才能更改状态。

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>  
//     <RouterView router={router}/>
//     <ManagerProvider manager={popupManager}/>
//   </React.StrictMode>,
// )

const root = createRoot(document.getElementById('root')!)
root.render(
  <>
    <RouterView router={router}/>
    <ManagerProvider manager={popupManager}/>
  </>
)
*/
import 'antd/dist/antd.variable.min.css'
import { configure } from 'mobx'
import { ManagerProvider } from 'oh-popup-react'
import 'oh-popup-react/dist/style.css'
import { RouterView } from 'oh-router-react'
import { createRoot } from 'react-dom/client'
import 'src/assets/css/var.css'
import 'src/assets/css/index.scss'
import {router} from './router'
import { popupManager } from './shared/popupManager'
//在某些情况下，我们可能需要在不使用action的情况下直接修改状态，例如在调试时或某些特殊情况下。这时可以通过configure函数来禁用MobX action的执行限制。将enforceActions属性设置为"never"后，就可以在应用程序中任意修改状态，而不会引起MobX执行限制的错误。
configure({ enforceActions: 'never'})

const root = createRoot(document.getElementById('root')!)

root.render(
  <>
    <RouterView router={router} />
    <ManagerProvider manager={popupManager} />
  </>
)

