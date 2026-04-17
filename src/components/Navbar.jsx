import LinkToggling from "./LinkToggling";


const Navbar = () => {
    return (
        <div className=" sticky top-0 bg-white z-50">
            <div className=" container mx-auto flex justify-between py-2   ">
                <div className=" ">
                    <a className=" text-3xl text-[#1F2937] font-bold">Keen<span className="text-[#244D34]">Keeper</span></a>
                </div>
                <div className="">
                    <ul className="flex gap-3 ">
                        <LinkToggling></LinkToggling>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;