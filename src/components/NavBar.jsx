import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Products from "@/pages/Products";
import {Icon} from "@iconify/react";




const NavBar = () => {

   return(
    <div 
        className="flex w-full h-[80px] px-[32px] py-[16px] items-center justify-between" 
    >
        <div 
        className="flex items-center gap-[48px]">

            <Icon className="image text-[80px] text-[#39bdf8] cursor-pointer" icon="mdi:react" />
            <div className="flex justify-center items-center gap-[16px]">
                <Link className="hover:text-[#38bdf8] hover:duration-500 hover:ease-out duration-500 px-[12px] py-[8px] text-[14px] text-on-surface capitalize " href="/">home</Link>
                <Link className="hover:text-[#38bdf8] hover:duration-500 hover:ease-out duration-500 px-[12px] py-[8px] text-[14px] text-on-surface capitalize " href="/Products">products</Link>
                <Link className="hover:text-[#38bdf8] hover:duration-500 hover:ease-out duration-500 px-[12px] py-[8px] text-[14px] text-on-surface capitalize " href="/About">about</Link>
                <Link className="hover:text-[#38bdf8] hover:duration-500 hover:ease-out duration-500 px-[12px] py-[8px] text-[14px] text-on-surface capitalize " href="/Contact">contact</Link>
                
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