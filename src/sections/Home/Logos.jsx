import Image from "next/image"

const Logos = () => {
    return(
        <div className=" w-full h-[160px] flex h-[160px] px-[160px] py-[56px] justify-center items-center">
            <div className="flex h-[48px] items-center gap-[80px]">
                <Image className="logos" src="/Logo1.png" alt="" width={100} height={48}/>
                <Image className="logos" src="/Angular-logo.png" alt="" width={78} height={32}/>
                <Image className="logos" src="/Node-log.png" alt="" width={171} height={32}/>
                <Image className="logos" src="/Npm-logo.png" alt="" width={175} height={40}/>
                <Image className="logos" src="/Logo5.png" alt="" width={73} height={49}/>
                <Image className="logos" src="/Logo6.png" alt="" width={119} height={30}/>
            </div>
        </div>
    );
}

export default Logos;