import Gallery from '@/components/gallery';
import React from 'react'




function HomeContainer({posts = [], category = ""}) {
  return (
    <div>
    <Gallery
        posts = {posts}
        category = {category}
    />
    </div>
  )
}

export default HomeContainer;