import { IoIosMenu } from "react-icons/io";

function Menu() {

    return (
        <div className="flex p-[20px] justify-between border-b-1 items-center w-full h-[60px]">
            <img src="logo.svg" className="w-[100px]"/>
            <IoIosMenu className="text-[30px]"/>
        </div>

    )
}

export default Menu
