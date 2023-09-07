import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Products from "@/pages/Products";




const NavBar = () => {

   return(
    <div 
        className="flex w-full h-[80px] px-[32px] py-[16px] items-center justify-between" 
    >
        <div 
        className="flex items-center gap-[48px]">

            <Image className="image" href="https://es.react.dev/" src="/React.png" alt="" width={70} height={44}/>
            <div className="flex justify-center items-center gap-[16px]">
                <Link className="links px-[12px] py-[8px] text-[14px] text-on-surface capitalize " href="/">home</Link>
                <Link className="links px-[12px] py-[8px] text-[14px] text-on-surface capitalize " href="/Products">products</Link>
                <Link className="links px-[12px] py-[8px] text-[14px] text-on-surface capitalize " href="/About">about</Link>
                <Link className="links px-[12px] py-[8px] text-[14px] text-on-surface capitalize " href="/Contact">contact</Link>
                
            </div>
        </div>

        <div className="flex items-center gap-[24px]">
            <Button variant="secondary" >Login</Button>
            <Button variant="primary" >Sign up</Button>
        </div>


    </div>

   );

};

export default NavBar;