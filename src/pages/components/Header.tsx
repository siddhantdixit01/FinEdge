const Header = () => {
    let Links =[
        {name:"Home",link:"#home"},
        {name:"About",link:"#about"},
        {name:"Services",link:"#services"},
        {name:"Contact",link:"#contact"},
    ];

    return (
        <div className='shadow-md w-full fixed top-0'>
            <div className='sm:flex items-center justify-between bg-white py-4 md:px-16 px-4'>
                <div className='font-bold text-2xl cursor-pointer flex items-center md:gap-1'>
                    <span>FinEdge</span>
                </div>
                <ul className="flex justify-center md:justify-normal pb-0 bg-white left-0 md:w-auto w-full pl-0">
                    {
                        Links.map((link) => (
                        <li className='mx-4 md:mx-6 mt-4 md:my-0 font-semibold'>
                            <a href={link.link} className='text-gray-800 hover:text-orange-400 duration-500'>{link.name}</a>
                        </li>))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;