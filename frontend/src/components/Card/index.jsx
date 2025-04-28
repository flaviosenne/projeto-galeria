import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";


function Card({ data, onDelete }) {

    const deleteImage = () => {
        if (search) {
            axios.delete('http://localhost:3000/gallery/' + data.name)
                .then((res) => onDelete(true))
                .catch((err) => console.error(err));
        } else {
            getImages()
        }
    }

    return (
        <div className="border bg-[#fff] overflow-hidden rounded-[10px] flex flex-col h-[250px] w-[300px]">
            <img className="h-[85%]" src={data.url} />

            <div className="flex p-[10px] justify-between">
                <p className="w-[90%]">{data.name || 'Nome do arquivo'}</p>
                <FaTrashAlt onClick={deleteImage} className="p-[3px] bg-[#a1a1a1] rounded-[5px] text-[20px] hover:cursor-pointer" />
            </div>
        </div>

    )
}

export default Card
