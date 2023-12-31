﻿import React from 'react';

import styles from "./styles.module.css";
import Gallery from '@/components/gallery';
import HomeContainer from '@/containers/home';
import posts from '@/constants/posts';


// const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// categories: "nature", "buildings", "macro", "tree-inside-trees", "mountain-strawberries", "snow"



function HomePage({ params }) {

    const category = params.category ? params.category : ""

    let filteredPosts = posts.filter((post) => post.tags.includes(category))


    console.log(category)
    return (
        <div>
            <HomeContainer
                posts = { filteredPosts }
            />
        </div>

    );
}

export default HomePage;
