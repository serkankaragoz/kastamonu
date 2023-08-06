import {Inter} from '@next/font/google' // npm install @next/font

import '@/styles/reset.css' // jsconfig.json icine bak //@ isareti bu n root level icindeki seyleri arar.
import '@/styles/global.css'

import Header from "@/components/header/index.js"
import Footer from "@/components/footer/index.js"
import BackgroundImage from "@/components/background-image";

const interFontFamily = Inter({subsets: ['latin']})

export default function RootLayout({ children }) {
    return (
        <html lang="tr" className={interFontFamily.className}>
            <body className="container">
                <div>
                    <BackgroundImage/>
                    <Header/>
                    <Footer/>
                    
                </div>
            </body>
        </html>
    )
}
