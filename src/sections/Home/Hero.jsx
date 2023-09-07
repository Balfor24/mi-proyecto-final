import Button from "../../components/Button";

const Hero = () => {
  return (
    <div className="flex grid-cols-2 w-full h-[680px] relative">

      <div
        style={{
          maxWidth: 552,
          gap: 32,
          marginTop: 80,
          marginLeft: 80,
          marginBottom: 258,
        }}
        className=" w-full flex flex-col justify-center items-start"
      >
        <h1
        className="text-[80px]"
          style={{
            fontSize: 80,
            color: "#eeeeee",
            textTransform: "uppercase",
            fontWeight: 700,
            fontFamily: "Oswald",
          }}
        >
          Lorem ipsum <br />
          dolor sit amet
        </h1>
        <p
          style={{
            fontSize: 16,
            fontFamily: "Ubuntu",
          }}
          className="text-on-surface "
        >
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et <br />
          dolore magna aliqua.
        </p>

        <div className="flex items-start gap-[24px]">
          <Button
            variant="primary"
            style={{
              paddingLeft: 40,
              paddingRight: 40,
              paddingTop: 12,
              paddingBottom: 12,
            }}
          >Shop</Button>

          <Button
            variant="secondary"
            style={{
              paddingLeft: 40,
              paddingRight: 40,
              paddingTop: 12,
              paddingBottom: 12,
            }}
          >Explore</Button>

        </div>

      </div>

      <div className="w-full relative">

        <div style={{
                top: 188,
                right: 279,
                backgroundImage: "url('/Mouse.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "absolute",                    
                width: "521px",
                height: "426px",
                zIndex: -2,
            }}></div>

            <div style={{
                top: 220,
                right: 60,
                backgroundImage: "url('/Gradient.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "absolute",                    
                width: "471px",
                height: "324px",
                zIndex: -3,
            }}></div>

            <div style={{
                top: 83,
                right: 107,
                backgroundImage: "url('/Nft.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "absolute",                    
                width: "160px",
                height: "211px",
                zIndex: -3,
            }}></div>

      </div>
        
    </div>
  );
};

export default Hero;
