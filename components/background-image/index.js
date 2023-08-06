import React from "react";
import Image from "next/image";
//import { FaPlus } from "react-icons/fa";

import styles from "./styles.module.css";

//import forest from './forest/orman.jpg';

function BackgroundImage() {

    return (
        <div>
            <div className={styles.websitePoster}>
                <div className={styles.websitePosterOverlay}></div>
                <Image
                    unoptimized
                    src={`https://serkankaragoz.github.io/next-album-deploy/forest/orman_1080p.jpg`}
                    alt="Forest Image"
                    fill
                />
                
            </div>
        </div>


    );
}

// export { FeatureWebsiteLoading } from "./loading";
export default BackgroundImage;