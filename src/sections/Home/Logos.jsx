import Image from "next/image"
import { Icon } from "@iconify/react"

const Logos = () => {
    return(
        <div className="w-full h-[160px] flex h-[160px] px-[160px] py-[56px] justify-center items-center">
            <div className="flex h-[48px] items-center gap-[80px]">
                <Icon className="text-[112px] text-[#C12127] cursor-pointer" icon="mdi:npm" />
                <Icon className="text-[80px] text-[#61DAFB] cursor-pointer" icon="mdi:react" />
                <Icon className="text-[72px] cursor-pointer" icon="devicon:nodejs" />
                <Icon className="text-[64px] cursor-pointer" icon="simple-icons:vercel" />
                <Icon className="text-[32px] text-[#800080] cursor-pointer" icon="octicon:logo-github-16" />
                <Icon className="text-[80px] text-[#38bdf8] cursor-pointer" icon="mdi:tailwind" />
            </div>
        </div>
    );
}

export default Logos;