import { FaTrashAlt } from "react-icons/fa";


function Card({data}) {

    return (
        <div className="border bg-[#fff] overflow-hidden rounded-[10px] flex flex-col h-[250px] w-[300px]">
            <img className="h-full" src={data.url} />
            
            <div className="flex p-[10px] justify-between">
                <p className="w-[90%]">{data.name || 'Nome do arquivo'}</p>
                <FaTrashAlt className="p-[3px] bg-[#a1a1a1] rounded-[5px] text-[20px] hover:cursor-pointer" />
            </div>
        </div>

    )
}

export default Card
