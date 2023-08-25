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

<<<<<<< HEAD
function Gallery({ posts }) {
=======
function includesCategory(post, category) {
  return post.tags.includes(category);
}


function Gallery({ posts, category = ""}) {





  let tempPosts = posts
  if(category !== "" && category !== "default"){
    tempPosts = posts.filter(post => includesCategory(post, category))
  }


>>>>>>> dev
  return (
    <div>
      <section className={styles.postList}> 

        {posts.map((post) => (
          <a href="" class={styles.post}>
            <figure className={styles.postImage}>
              <Image
                unoptimized
                src={post.thumbnailPath}
                alt="Forest Image"
                fill
              />
            </figure>
          </a>
        ))}

      </section>
    </div>
  )
}

export default Gallery