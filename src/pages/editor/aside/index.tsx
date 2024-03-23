import { Alert, Spin } from "antd";
import clsx from "clsx";
import { Observer, useObserver } from "mobx-react-lite";
import { Suspense, useRef } from "react";
import { TemplateCard } from "src/components/templateCard";
import { useStore } from "src/shared/storeProvider";
import { Store } from '../store'
import styles from './index.module.scss'
