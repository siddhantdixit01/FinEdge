export default function Services() {
    return (
        <>
            <div className="py-20 w-full m-auto text-justify" id="services">
                <h1 className="text-5xl font-bold mb-10 text-center" id="about">Services</h1>
                <div className="md:flex w-full m-auto md:w-11/12">
                    <div className="shadow-md text-base m-8 rounded-lg pb-14">
                        <img src="images/upi.jpg" alt="" className="h-60 w-full rounded-lg" />
                        <div className="  px-3">
                        <h1 className="text-xl font-bold pt-10 mb-5 text-orange-600 text-center" id="about">Money Transfers</h1>
                        FinEdge is a cutting-edge fintech startup dedicated to revolutionizing cross-border payments. 
                        Their vision is to enable seamless transactions for individuals and businesses, transcending 
                        geographical boundaries.
                        </div>
                    </div>
                    <div className="shadow-md text-base m-8 rounded-lg pb-14">
                        <img src="images/payment.jpg" alt="" className="h-60 w-full rounded-lg" />
                        <div className="  px-3">
                        <h1 className="text-xl font-bold pt-10 mb-5 text-orange-600 text-center" id="about">
                            Bussiness Payments
                        </h1>
                        FinEdge is a cutting-edge fintech startup dedicated to revolutionizing cross-border payments. 
                        Their vision is to enable seamless transactions for individuals and businesses, transcending 
                        geographical boundaries.
                        </div>
                    </div>
                    <div className="shadow-md text-base m-8 rounded-lg pb-14">
                        <img src="images/tracking.jpg" alt="" className="h-60 w-full rounded-lg" />
                        <div className="  px-3">
                        <h1 className="text-xl font-bold pt-10 mb-5 text-orange-600 text-center" id="about">
                            Real-time Payment Tracking
                        </h1>
                        FinEdge is a cutting-edge fintech startup dedicated to revolutionizing cross-border payments. 
                        Their vision is to enable seamless transactions for individuals and businesses, transcending 
                        geographical boundaries.
                        </div>
                    </div>
                </div>
            </div>
            <hr className="w-full h-px mx-auto bg-orange-500 border-0 rounded" />
        </>
    );
}