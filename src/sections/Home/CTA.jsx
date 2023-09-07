import Button from "../../components/Button";

const CTA = () => {
    return(
        <div  className="gradient flex w-full  flex flex-col items-center gap-[48px] px-[64px] py-[64px]">
            <div className="">
                <h2 style={{fontFamily:"Oswald"}} className="max-w-[900px] text-center text-on-primary uppercase font-bold text-[64px]">Tempor incididunt ut labore et dolore magna aliqua.</h2>
            </div>

            <div className="">
                <p style={{fontFamily: "Ubuntu"}} className="text-on-primary font-normal text-[16px]">Try any of our amazing products today!</p>
            </div>
            <div className="">
                <Button variant="cuaternario">Shop</Button>
            </div>
        </div>
    );
}

export default CTA;