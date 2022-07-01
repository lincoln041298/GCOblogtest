import Image from 'next/image'
import logogco from '../../public/logogco.svg'
import Arrowheader from '../../public/arrowheader.svg'
export default function Header() {
    return (
        <>
        <section className='min-h-[90px] flex items-center justify-between'>
            <p className='w-[150px]'>
                <Image src={logogco}/>
            </p>
            <div className='flex items-center'>
                <ul className='flex mr-8 cursor-pointer'>
                    <li className='ml-[41px] text-xl flex items-center'>Ngành <Image src={Arrowheader}/></li>
                    <li className='ml-[41px] text-xl flex items-center'>Dịch vụ <Image src={Arrowheader}/></li>
                    <li className='ml-[41px] text-xl'>Dự án</li>
                    <li className='ml-[41px] text-xl'>Về chúng tôi</li>
                    <li className='text-blue-600 ml-[41px] text-xl'>Blog</li>
                    <li className='ml-[41px] text-xl'>Tuyển dụng</li>
                </ul>
                <button className='py-2 px-6 text-white bg-blue-700 rounded-md border border-blue-700 hover:text-blue-700 hover:bg-white'>Liên hệ</button>
            </div>
        </section>
        </>
    )
}