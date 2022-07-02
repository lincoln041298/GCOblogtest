import React from 'react'

function Post({posts}) {

    console.log(posts)
  return (
    <div>post</div>
  )
}

export const getStaticProps = async () => {
    const res = await fetch('https://api.gcosoftware.vn/wp-json/wp/v2/posts?search=web&per_page=5&page=1')
    const posts = await res.json()

    return {
        props: {
            posts
        }
    }
}


export default Post