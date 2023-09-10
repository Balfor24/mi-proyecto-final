import Image from "next/image";
import Link from "next/link";
import Button from "./Button"
import { Icon } from '@iconify/react';

 


const Footer = () => {
    return(
        <footer 
        className=" flex w-full  px-[56px] py-[16px] items-center justify-between">

        <div className=" flex flex-col items-center justify-center gap-[32px]">
            <div className="">
                <Icon className="image text-[80px] text-[#39bdf8] cursor-pointer" icon="mdi:react" />
            </div>
            <div className=" flex justify-center items-center gap-[16px]">
                <p style={{fontFamily:'Barlow'}} className="text-white font-Oswald">Lorem Ipsum is simply dummy text <br/>of the printing and typesetting industry.</p>
            </div>
        </div>

       <div className="items-center flex flex-col gap-[12px] justify-center">
            <h4 className="text-[16px] text-primary font-normal">Useful links</h4>
            <ul>
                <li className="hover:text-[#38bdf8] text-[13px] hover:duration-400 hover:ease-out text-white hover:underline hover:cursor-pointer">Home</li>
                <li className="hover:text-[#38bdf8] text-[13px] hover:duration-400 hover:ease-out text-white hover:underline hover:cursor-pointer">Products</li>
                <li className="hover:text-[#38bdf8] text-[13px] hover:duration-400 hover:ease-out text-white hover:underline hover:cursor-pointer">About</li>
                <li className="hover:text-[#38bdf8] text-[13px] hover:duration-400 hover:ease-out text-white hover:underline hover:cursor-pointer">Contact</li>
            </ul>
       </div>

       <div className="items-center flex flex-col gap-[12px] justify-center">
            <h4 className="text-[16px] text-primary font-normal">Our services</h4>
            <ul>
                <li className="hover:text-[#38bdf8]  hover:duration-500 hover:ease-out text-[13px] text-white hover:underline hover:cursor-pointer">Web design</li>
                <li className="hover:text-[#38bdf8]  hover:duration-500 hover:ease-out text-[13px] text-white hover:underline hover:cursor-pointer">Web development</li>
                <li className="hover:text-[#38bdf8]  hover:duration-500 hover:ease-out text-[13px] text-white hover:underline hover:cursor-pointer">Product management</li>
                <li className="hover:text-[#38bdf8]  hover:duration-500 hover:ease-out text-[13px] text-white hover:underline hover:cursor-pointer">Graphic design</li>
            </ul>
       </div>


       <div className="items-center flex flex-col text-[28px] px-[8px] py-[8px] gap-[24px]">
            <div>
                <h4 className="text-[16px] text-primary font-normal">Follow us</h4>
            </div>

            <div className="flex gap-[24px]">
                <Icon className="text-white hover:text-primary hover:cursor-pointer" icon="mdi:twitter" />
                <Icon className="text-white hover:text-primary hover:cursor-pointer" icon="ic:baseline-discord" />
                <Icon className="text-white hover:text-primary hover:cursor-pointer" icon="mdi:github" />
                <Icon className="text-white hover:text-primary hover:cursor-pointer" icon="mdi:instagram" />
            </div>
       </div>


    </footer>
    );
}

export default Footer;