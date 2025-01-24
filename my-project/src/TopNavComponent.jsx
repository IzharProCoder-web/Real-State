import { useState } from "react";
import { Link } from "react-router-dom";    
import { IoMdCloseCircleOutline } from "react-icons/io";

const TopNav = () => {
    const [isTopNavOpen, setIsTopNavOpen] = useState(true);

    const toggleTopNav = () => {
        setIsTopNavOpen(!isTopNavOpen);
    };

    if (!isTopNavOpen) {
        return null;
    }

    return (
        <div className="relative bg-[url(/img/Banner.svg)] text-white bg-cover bg-no-repeat w-full sm:h-[50px] h-[40px]">
            <div className="py-4 flex justify-center items-center">
                <h3 className="sm:text-[18px] text-[12px] flex items-center">
                    <p>✨Discover Your Dream Property with Estatein</p>
                    <Link to="/aboutus" className="pl-2 underline cursor-pointer">Learn More</Link>
                </h3>
            </div>
            <IoMdCloseCircleOutline
                size={24}
                onClick={toggleTopNav}
                className="absolute top-4 sm:right-7 right-3 cursor-pointer"
            />
        </div>
    );
};

export default TopNav;