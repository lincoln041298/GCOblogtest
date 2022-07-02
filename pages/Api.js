import React from 'react'

function Api({ posts }) {
    console.log(posts)
    return (
      <ul>
       
      </ul>
    )
  }
  
  export async function getStaticProps() {
    const res = await fetch('https://api.gcosoftware.vn/wp-json/wp/v2/posts?search=web&per_page=5&page=1')
    const posts = await res.json()

    return {
      props: {
        posts,
      },
    }
  }
  
  export default Api