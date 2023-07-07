import "./Nav.css";

export default function Nav() {
    return (
        <>
            <nav className="relative mx-10 mt-7 flex justify-between itms-center border-bottom" 
                style={{borderBottom:3+"px solid orange",borderRadius:10+"%",paddingBottom:8}}
            >
                <h1 className="text-3xl font-bold"><a href="/">FinEdge</a></h1>
                <div style={{width:40+"%"}}>
                    <a href="/" className="mx-8">Home</a>
                    <a href="#about" className="mx-8">About Us</a>
                    <a href="#services" className="mx-8">Services</a>
                    <a href="#contact" className="mx-8">Contact Us</a>
                </div>
            </nav>
        </>
    );
}