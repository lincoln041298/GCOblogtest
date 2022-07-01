import { useEffect, useState } from "react";
import React from "react";
import Button from "../components/Button";

const tabs = ["posts", "comments", "albums", "photos", "todos", "users"];
export default function Content() {
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState('posts')
  console.log(type)
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  return (
    <div>
      <div className="flex mt my-10 cursor-pointer">
        {tabs.map(tab => (
          <button 
          key={tab} 
          onClick={() => setType(tab)}
          className={`mr-8 uppercase p-2 text-red ${type === tab && 'text-white bg-blue-700 rounded-lg'}`}>{tab}</button>
        ))}
      </div>

      <ul className="border-blue-700 border-8">
        <ul className="h-60 overflow-y-scroll">
          {posts.map((post) => (
            <li className="overflow-hidden pl-10" key={post.id}>{post.title || post.name}</li>
          ))}
        </ul>
      </ul>

    </div>
  );
}
