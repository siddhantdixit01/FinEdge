export default function About() {
    return (
        <>
            <div className="py-20 w-full m-auto" id="about">
                <div className="flex justify-center">
                    <div className="text-base w-2/5 text-justify mr-44 ml-28 pt-8">
                        <h1 className="text-4xl font-bold mb-10 text-orange-600">About Us</h1>
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
                    <div className="w-2/5">
                        <img src="images/about.jpg" alt="" className="w-3/4" />
                    </div>
                </div>
            </div>
            <hr className="w-1/3 h-px mx-auto my-4 bg-orange-500 border-0 rounded" />
        </>
    );
}