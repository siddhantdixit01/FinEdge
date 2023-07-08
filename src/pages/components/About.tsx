export default function About() {
    return (
        <>
            <div className="py-52 w-full m-auto bg-black text-white" id="about">
                <div className="md:flex justify-center">
                    <div className="text-base md:w-2/5 w-10/12 m-auto text-justify md:mr-44 md:ml-28 pt-8">
                        <h1 className="text-5xl font-bold mb-10 text-orange-600">About Us</h1>
                        <p>
                            Online money transfers have now become a medium to save oneself from any cash 
                            shortage related problems. A long list of requirements and legal formalities is no 
                            longer needed since the money can be transferred online through a digital wallet 
                            without any hassle. Hence, transferring money online has become easier than before 
                            with FinEdge . Just make instant money transfer with the 'Wallet to Bank' feature on 
                            FinEdge, from credit cards to any bank account through FinEdge's digital wallet. 
                            Now, transfer money from credit cards of ICICI, HDFC, Citibank, SBI, and more to any 
                            bank account, and the amount will reflect in the bank accounts instantly.
                        </p>
                    </div>
                    <div className="md:w-2/5 w-10/12 m-auto pt-10">
                        <img src="images/about.jpg" alt="" className="md:w-3/4 rounded-lg" />
                    </div>
                </div>
            </div>
            <hr className="w-full h-px mx-auto bg-orange-500 border-0 rounded" />
        </>
    );
}