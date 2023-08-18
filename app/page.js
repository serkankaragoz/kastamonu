import React from 'react';

import styles from "./styles.module.css";
import Gallery from '@/components/gallery';
import HomeContainer from '@/containers/home';


// const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const posts = [
    {imagePath: "https://serkankaragoz.github.io/next-album-deploy/forest/orman_1080p.jpg"},
    {imagePath: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"},
    {imagePath: "https://serkankaragoz.github.io/next-album-deploy/forest/orman_1080p.jpg"},
    {imagePath: "https://serkankaragoz.github.io/next-album-deploy/forest/orman_1080p.jpg"},
]


function HomePage() {
    return (
        <div>
            <HomeContainer
                posts = { posts }
            />
        </div>

    );
}

export default HomePage;
