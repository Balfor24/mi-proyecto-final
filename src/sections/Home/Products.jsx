import Cards from "../../components/Cards"

const Products = () => {
    return(
        <div className="w-full  flex flex-col px-[64px] py-[64px] items-star gap-[48px]">
            <div className="flex flex-col items-start  gap-[12px]">
                <h3 style={{fontFamily: 'Oswald'}} className="text-on-surface text-[32px] uppercase">favorite products</h3>
                <p style={{fontFamily: 'Ubuntu'}} className="text-on-surface text-[16px]">Try any of our amazing products today and get $50 promo code!</p>
            </div>
            <div className="flex items-center justify-between ">
                <Cards variant="tarjeta1"/>
                <Cards variant="tarjeta2"/>
                <Cards variant="tarjeta3"/>
                <Cards variant="tarjeta4"/>
            </div>
        </div>
    );
}

export default Products;