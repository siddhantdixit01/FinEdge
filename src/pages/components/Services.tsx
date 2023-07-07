export default function Services() {
    return (
        <>
            <div className="py-20 w-full m-auto text-center" id="services">
                <h1 className="text-4xl font-bold mb-10" id="about">Services</h1>
                <div className="flex justify-center">
                    <div className="text-base m-8">
                        <img src="src/images/upi.jpg" alt="" className="h-60" />
                        <h1 className="text-xl font-bold mb-10 text-orange-600" id="about">Money Transfers</h1>
                        FinEdge is a cutting-edge fintech startup dedicated to revolutionizing cross-border payments. Their vision is to enable seamless transactions for individuals and businesses, transcending geographical boundaries.
                    </div>
                    <div className="text-base m-8">
                        <img src="src/images/payment.jpg" alt="" className="h-60" />
                        <h1 className="text-xl font-bold mb-10 text-orange-600" id="about">Business Payments</h1>
                        FinEdge is a cutting-edge fintech startup dedicated to revolutionizing cross-border payments. Their vision is to enable seamless transactions for individuals and businesses, transcending geographical boundaries.
                    </div>
                    <div className="text-base m-8">
                        <img src="src/images/tracking.jpg" alt="" className="h-60" />
                        <h1 className="text-xl font-bold mb-10 text-orange-600" id="about">Real-time Payment Tracking</h1>
                        FinEdge is a cutting-edge fintech startup dedicated to revolutionizing cross-border payments. Their vision is to enable seamless transactions for individuals and businesses, transcending geographical boundaries.
                    </div>
                </div>
            </div>
            <hr className="w-1/3 h-px mx-auto my-4 bg-orange-500 border-0 rounded" />
        </>
    );
}