import Gallery from '@/components/gallery';
import React from 'react'




function HomeContainer({posts = []}) {
  return (
    <div>
    <Gallery
        posts = {posts}
    />
    </div>
  )
}

export default HomeContainer;