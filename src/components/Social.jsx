import Image from "next/image";
import Link from "next/link";
import Button from "./Button"


const Social = () => {
    return(
        <div 
        className=" flex w-full h-[80px] px-[32px] py-[16px] items-center justify-between" 
    >
        <div 
        className="flex items-center gap-[48px]">

            <Image className="image" src="/React.png" alt="" width={70} height={44}/>
            <div className="flex justify-center items-center gap-[16px]">
                <Link className="links px-[12px] py-[8px] text-[14px] text-on-surface capitalize " href="/">home</Link>
                <Link className="links px-[12px] py-[8px] text-[14px] text-on-surface capitalize " href="/">products</Link>
                <Link className="links px-[12px] py-[8px] text-[14px] text-on-surface capitalize " href="/">about</Link>
                <Link className="links px-[12px] py-[8px] text-[14px] text-on-surface capitalize " href="/">contact</Link>
                
            </div>
        </div>

        <div className="flex items-center gap-[24px]">
            <Image className="socialImages" src="/Twitter.png" alt="" width={24} height={24}/>
            <Image className="socialImages" src="/Discord.png" alt="" width={24} height={24}/>
            <Image className="socialImages" src="/Instagram.png" alt="" width={24} height={24}/>
        </div>


    </div>
    );
}

export default Social;