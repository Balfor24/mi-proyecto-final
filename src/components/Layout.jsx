import NavBar from "./NavBar";
import Hero from "../sections/Home/Hero";
import Logos from "../sections/Home/Logos";
import Products from "../sections/Home/Products"
import CTA from "../sections/Home/CTA"
import Email from "../sections/Home/Email";
import Footer from "../components/Footer";


const Layout = ({children}) => {

    return(
        <main className=" max-w-[1440px] min-h-fit mx-auto"> 

            <div  style={{position: 'relative', zIndex: -0}} className=" w-full  flex flex-col items-center justify-center">

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
                    backgroundImage: "url('/Hero-Ground.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    top: "540px",
                    position: "absolute",
                    width: "100%",
                    height: "79%",
                    zIndex: -4,
                }}></div>

                <NavBar/>
                <Hero/>
                <Logos/>
                <Products />
                <CTA/>
                <Email/>
                {children}
                <Footer />
            </div>
            
        </main>

        

    );
};

export default Layout;