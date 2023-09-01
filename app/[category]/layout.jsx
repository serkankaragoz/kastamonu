import { Inter } from '@next/font/google'

import '@/styles/reset.css' // jsconfig.json icine bak //@ isareti bu n root level icindeki seyleri arar.
import '@/styles/global.css'

import Header from "@/components/header/index.js"
import Footer from "@/components/footer/index.js"
import BackgroundImage from "@/components/background-image";

import styles from "./styles.module.css";

const interFontFamily = Inter({subsets: ['latin']})

export default function RootLayout({ children }) {
    return (
        <main>{children}</main>
    )
}