import { IoMdClose } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";

import { useRef, useState } from "react";


function Modal({ isOpen, onClose }) {
    const fileInputRef = useRef(null);
    const [preview, setPreview] = useState(null);

    const handleBoxClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const imageURL = URL.createObjectURL(file);
            setPreview(imageURL);
        } else {
            setPreview(null);
        }
    };

    if (!isOpen) return null

    return (
        <div className="fixed border left-[40%] bg-[#fff] flex flex-col w-[400px] h-fit rounded-[10px] z-10">
            <div className="flex justify-between items-center p-[20px]">
                <p>Upload de Imagem</p>
                <IoMdClose onClick={() => onClose()} className="text-[30px]" />
            </div>
            <div className="p-[20px] flex flex-col gap-[10px]">

                {preview ? (
                    <div className="relative">
                        <img className="w-full" src={preview} />
                        <FaTrashAlt onClick={() => setPreview(null)} className="p-[3px] absolute right-[10px] top-[10px] bg-[#a1a1a1] rounded-[5px] text-[20px] hover:cursor-pointer" />
                    </div>
                ) : (

                    <div onClick={handleBoxClick} className="relative rounded-[5px] p-[10px] h-[250px] w-full bg-[#a1a1a1]">
                        <div className="rounded-[5px] flex flex-col items-center justify-center gap-[5px] border w-full border-dashed border-2 h-full">
                            <FiUpload />
                            <p>Selecione ou arraste os arquivos.</p>
                        </div>

                        <input type="file" className="hidden" ref={fileInputRef}
                            onChange={handleFileChange} />
                    </div>
                )}


                <input />

                <button className="h-[30px] w-full">Enviar</button>
            </div>
        </div>
    )
}

export default Modal