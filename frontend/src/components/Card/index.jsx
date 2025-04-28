import { FaTrashAlt } from "react-icons/fa";


function Card() {

    return (
        <div class="border bg-[#fff] overflow-hidden rounded-[10px] flex flex-col h-[250px] w-[300px]">
            <img class="h-full" src="http://localhost:3000/uploads/1745866688070-praia.jpg"/>
            <div class="flex p-[10px] justify-between">
                <p class="w-[90%]">Nome do arquivo</p>
                <FaTrashAlt class="p-[3px] bg-[#a1a1a1] rounded-[5px] text-[20px] hover:cursor-pointer"/>
            </div>
        </div>

    )
}

export default Card
