import Image from "next/image";
import Button from "../components/Button";

const Cards = ({ variant }) => {
  return (
    <>
      {variant === "tarjeta1" && (
        <div className="w-[240px] h-[328px] ">

          <div className="container">
            <Image className="cards" src="/Cimage-01.png" alt="" width={240} height={144} />
          </div>

          <div className="flex flex-col gap-[24px] w-[240px] h-[198px] bg-backgroundC rounded-b-[12px] px-[16px] py-[16px]">
            <div className="flex flex-col gap-[16px]">
              <div className="inline-flex items-center gap-[8px]">
                <Image src="/Icon-box.png" alt="" width={24} height={24} />
                <p
                  style={{ fontFamily: "Oswald" }}
                  className="text-on-surface text-[24px] uppercase"
                >
                  Product N-001
                </p>
              </div>
              <p
                style={{ fontFamily: "Ubuntu" }}
                className="text-on-surface text-[12px]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
              </p>
            </div>
            <div className="flex px-[24px] py-[8px] items-center justify-center">
              <Button variant="tertiary">More information</Button>
            </div>
          </div>
        </div>
      )}

      {variant === "tarjeta2" && (
        <div className=" w-[240px] h-[328px] ">

          <div className="container">
            <Image className="cards" src="/Cimage-02.png" alt="" width={240} height={144} />
          </div>
          

          <div className="flex flex-col gap-[24px] w-[240px] h-[198px] bg-backgroundC rounded-b-[12px] px-[16px] py-[16px]">
            <div className="flex flex-col gap-[16px]">
              <div className="inline-flex items-center gap-[8px]">
                <Image src="/Icon-box.png" alt="" width={24} height={24} />
                <p
                  style={{ fontFamily: "Oswald" }}
                  className="text-on-surface text-[24px] uppercase"
                >
                  Product N-001
                </p>
              </div>
              <p
                style={{ fontFamily: "Ubuntu" }}
                className="text-on-surface text-[12px]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
              </p>
            </div>
            <div className="flex px-[24px] py-[8px] items-center justify-center">
              <Button variant="tertiary">More information</Button>
            </div>
          </div>
        </div>
      )}

      {variant === "tarjeta3" && (
        <div className="w-[240px] h-[328px] ">

          <div className="container">
            <Image className="cards" src="/Cimage-03.png" alt="" width={240} height={144} />
          </div>
          

          <div className="flex flex-col gap-[24px] w-[240px] h-[198px] bg-backgroundC rounded-b-[12px] px-[16px] py-[16px]">
            <div className="flex flex-col gap-[16px]">
              <div className="inline-flex items-center gap-[8px]">
                <Image src="/Icon-box.png" alt="" width={24} height={24} />
                <p
                  style={{ fontFamily: "Oswald" }}
                  className="text-on-surface text-[24px] uppercase"
                >
                  Product N-001
                </p>
              </div>
              <p
                style={{ fontFamily: "Ubuntu" }}
                className="text-on-surface text-[12px]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
              </p>
            </div>
            <div className="flex px-[24px] py-[8px] items-center justify-center">
              <Button variant="tertiary">More information</Button>
            </div>
          </div>
        </div>
      )}

      {variant === "tarjeta4" && (
        <div className="w-[240px] h-[328px] ">

          <div className="container">
            <Image className="cards" src="/Cimage-04.png" alt="" width={240} height={144} />
          </div>
          

          <div className="flex flex-col gap-[24px] w-[240px] h-[198px] bg-backgroundC rounded-b-[12px] px-[16px] py-[16px]">
            <div className="flex flex-col gap-[16px]">
              <div className="inline-flex items-center gap-[8px]">
                <Image src="/Icon-box.png" alt="" width={24} height={24} />
                <p
                  style={{ fontFamily: "Oswald" }}
                  className="text-on-surface text-[24px] uppercase"
                >
                  Product N-001
                </p>
              </div>
              <p
                style={{ fontFamily: "Ubuntu" }}
                className="text-on-surface text-[12px]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
              </p>
            </div>
            <div className="flex px-[24px] py-[8px] items-center justify-center">
              <Button variant="tertiary">More information</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
