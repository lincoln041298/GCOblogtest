import Image from "next/image";
import Button from "../components/Button.js";
import imagedemo from "../../public/theweeknd.webp";
import Content from "./Content.js";
export default function Blog() {
  return (
    <>
      <section className="flex flex-row py-[50px]">
        <div className="flex flex-col basis-1/2 justify-center">
          <h3 className="text-6xl font-bold">Blog</h3>
          <p className="pt-5">
            Chúng tôi muốn chia sẻ cái nhìn sâu sắc và kinh nghiệm của mình để
            giúp bạn tìm hiểu thêm về các chuyển đổi kỹ thuật số tuyệt vời. Để
            có thông tin, ý tưởng và thông điệp mạnh mẽ, hãy đọc các bài đăng
            trên blog của chúng tôi.
          </p>
        </div>
        <div className="img  flex items-center justify-center basis-1/2">
          <p className="w-60">
            <Image className="rounded-full" src={imagedemo}></Image>
          </p>
        </div>
      </section>
      <form>
        <div className="blog-form flex items-center">
          <input
            className="py-5 px-5 rounded-xl rounded-r-none border-r-0 border flex-60 placeholder-slate-600 focus-visible:outline-none"
            placeholder="Tìm kiếm bài viết..."
          ></input>
          <div className="py-2.5 pr-2.5 rounded-xl rounded-l-none border-l-0 border">
            <Button />
          </div>
        </div>
      </form>
      <Content/>
    </>
  );
}
