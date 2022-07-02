import { useEffect, useState } from "react";
import React from "react";
import Button from "../components/Button";

const tabs = ["posts", "comments", "albums", "photos", "todos", "users"];
export default function Content() {
  // const [posts, setPosts] = useState([]);
  // const [type, setType] = useState('posts')
  // console.log(type)
  // useEffect(() => {
  //   fetch(`https://api.gcosoftware.vn/wp-json/wp/v2/posts?search=web&per_page=5&page=1`)
  //     .then((res) => res.json())
  //     .then((posts) => {
  //       setPosts(posts);
  //     });
  // }, [type]);

  return (
    <div>123</div>
    // <div>
    //   <div className="flex mt my-10 cursor-pointer">
    //     {tabs.map(tab => (
    //       <button 
    //       key={tab} 
    //       onClick={() => setType(tab)}
    //       className={`mr-8 uppercase p-2 text-red ${type === tab && 'text-white bg-blue-700 rounded-lg'}`}>{tab}</button>
    //     ))}
    //   </div>

    //   <div className="grid grid-cols-6 gap-3 h-[300px] overflow-hidden overflow-y-scroll">
    //       {posts.map((post) => (
    //           <div className="pl-2 rounded border-2 border-blue-600" key={post.id}>
    //             <h3 className="text-2xl">{post.title.rendered}</h3>
    //             <p>{post.body}</p>
    //             <div className="overflow-hidden">
    //             </div>
               
    //           </div>
    //       ))}
    //   </div>

    // </div>
  );
}