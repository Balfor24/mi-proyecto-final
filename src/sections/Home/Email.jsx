import Image from "next/image";
import { Icon } from '@iconify/react'

const Email = () => {
    return(
        <div className="w-full flex flex-col items-center py-[80px] gap-[32px]">
            <div className="flex flex-col items-center gap-[16px]">
                <h4 style={{fontFamily: "Barlow"}} className="text-on-surface text-[32px] font-bold uppercase">Want to know more?</h4>
                <p style={{fontFamily: "Montserrat"}} className="text-on-surface text-[16px]">Enter your email here to download our informational package</p>
            </div>
            <div className="">
                <div className="bg-backgroundC flex px-[16px] py-[8px] items-center gap-[16px] rounded-[4px]">
                    <input className="bg-on-surface text-on-emailC text-[20px] font-normal  px-[4px] py-[4px]" type="email" placeholder="your@email.com" name="correo"></input>
                    <Icon className="text-[26px] text-white hover:cursor-pointer hover:text-primary hover:bg-[#4d5159]" icon="material-symbols:download" />
                </div>
            </div>
        </div>
    );
}

export default Email;