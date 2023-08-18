import React from 'react'
import styles from "./styles.module.css";
import Image from "next/image";


/*

<a href="" class={styles.post}>
            <figure className={styles.postImage}>
              <img src="https://picsum.photos/300?image=600" alt=""/>
            </figure>
            <span className={styles.postOverlay}>
              <p>
                  <span className={styles.postLikes}>150</span>
                  <span className={styles.postComments}>10</span>
              </p>
            </span>
        </a>
*/

function Gallery() {
  return (
    <div>
      <section className={styles.postList}> 
      <a href="" class={styles.post}>
            <figure className={styles.postImage}>
              <Image
                unoptimized
                src={`https://serkankaragoz.github.io/next-album-deploy/forest/orman_1080p.jpg`}
                alt="Forest Image"
                fill
              />
            </figure>
        </a>
        <a href="" class={styles.post}>
            <figure className={styles.postImage}>
              <Image
                unoptimized
                src={`https://serkankaragoz.github.io/next-album-deploy/forest/orman_1080p.jpg`}
                alt="Yatay kedi"
                fill
              />
            </figure>
        </a>
        <a href="" class={styles.post}>
            <figure className={styles.postImage}>
              <Image
                unoptimized
                src={`https://serkankaragoz.github.io/next-album-deploy/forest/orman_1080p.jpg`}
                alt="Dikey kedi"
                fill
              />
            </figure>
        </a>
        <a href="" class={styles.post}>
            <figure className={styles.postImage}>
              <Image
                unoptimized
                src={`https://serkankaragoz.github.io/next-album-deploy/forest/orman_1080p.jpg`}
                alt="Manzara"
                fill
              />
            </figure>
        </a>
        <a href="" class={styles.post}>
            <figure className={styles.postImage}>
              <Image
                unoptimized
                src={`https://serkankaragoz.github.io/next-album-deploy/forest/orman_1080p.jpg`}
                alt="Yol"
                fill
              />
            </figure>
        </a>

      </section>
    </div>
  )
}

export default Gallery