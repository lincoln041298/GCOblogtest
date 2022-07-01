import Image from "next/image"
import searchBlog from '../../public/searchblog.png'
export default function Button() {
   return (
      <button className="py-2.5 px-8 bg-blue-700 rounded-md">
         <p className="w-6 flex items-center justify-center">
            <Image className="w-full" src={searchBlog} alt="search"></Image>
         </p>
      </button>
   )
}