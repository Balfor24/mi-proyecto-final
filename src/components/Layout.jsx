import NavBar from "./NavBar";
import Hero from "../sections/Home/Hero";
import Logos from "../sections/Home/Logos";
import Products from "../sections/Home/Products"
import CTA from "../sections/Home/CTA"
import Email from "../sections/Home/Email";
import Social from "../components/Social";


const Layout = ({children}) => {

    return(
        <main className="max-w-[1440px] mx-auto">
            <div  style={{position: 'relative', zIndex: 0}} className="w-full  flex flex-col items-center justify-center">

                <div style={{
                    backgroundImage: "url('/Background.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    zIndex: -5,
                }}></div>

                <div style={{
                    marginTop: 1060,
                    backgroundImage: "url('/Ground.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    zIndex: -4,
                }}></div>

                <NavBar/>
                <Hero/>
                <Logos/>
                <Products />
                <CTA/>
                <Email/>
                <Social/>
                {children}
            </div>
            
        </main>

        

    );
};

export default Layout;