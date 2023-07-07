export default function About() {
    return (
        <>
            <div className="py-20 w-full m-auto">
                <div className="flex justify-center">
                    <div className="text-base w-2/5 text-justify mr-44 ml-28 pt-16">
                        <h1 className="text-4xl font-bold mb-10 text-orange-600" id="about">About Us</h1>
                        FinEdge is a cutting-edge fintech startup dedicated to revolutionizing cross-border payments. Their vision is to enable seamless transactions for individuals and businesses, transcending geographical boundaries.
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