import Card from "../Card"
import { CiCirclePlus } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";


function Home() {

    return (
        <div class="p-[20px] flex flex-col gap-[10px]">
            <div class="w-[100] flex justify-between items-center">
                <div class="flex items-center gap-[10px]">
                    <p class="text-[20px]">Galeria de Paisagens</p>
                    <CiCirclePlus class="bg-[#3ed9d9] rounded-full p-[4px] text-[25px] hover:cursor-pointer" />
                </div>
                <div class="border items-center rounded-[5px] flex bg-[#fff] justify-end w-[300px] h-[25px] relative">
                    <CiSearch class="mx-[5px]"/>
                    <input type="text" class="w-[95%] bg-transparent border-none h-full focus:outline-none" />
                </div>
            </div>
            <div class="flex gap-[10px] flex-wrap">
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Home
