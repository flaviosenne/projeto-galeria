import Card from "../Card"
import { CiCirclePlus } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Modal from "../Modal";
import { useEffect, useState } from "react";
import axios from "axios";


function Home() {
    const [isOpen, setIsOpen] = useState()
    const [images, setImages] = useState([])
    const [search, setSearch] = useState('')
    const getImages = () => {
        setIsOpen(false)
        axios.get('http://localhost:3000/gallery')
            .then((res) => setImages(res.data))
            .catch((err) => console.error(err));
    }

    const getImage = () => {
        if (search) {
            axios.get('http://localhost:3000/gallery/' + search)
                .then((res) => setImages([res.data]))
                .catch((err) => console.error(err));
        } else {
            getImages()
        }
    }

    useEffect(() => {
        getImages()
    }, [])

    return (
        <div className="p-[20px] flex flex-col gap-[10px]">
            <Modal onUploadSucess={getImages} isOpen={isOpen} onClose={() => setIsOpen(false)} />
            <div className="w-[100] flex justify-between items-center">
                <div className="flex items-center gap-[10px]">
                    <p className="text-[20px]">Galeria de Paisagens</p>
                    <CiCirclePlus onClick={() => setIsOpen(true)} className="bg-[#3ed9d9] rounded-full p-[4px] text-[25px] hover:cursor-pointer" />
                </div>
                <div className="border items-center rounded-[5px] flex bg-[#fff] justify-end w-[300px] h-[25px] relative">
                    <CiSearch onClick={() => getImage()} className="mx-[5px]" />
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className="w-[95%] bg-transparent border-none h-full focus:outline-none" />
                </div>
            </div>
            <div className="flex gap-[10px] flex-wrap">
                {images.map(item => (
                    <Card key={item.name} data={item} onDelete={getImages} />
                ))}
            </div>
        </div>
    )
}

export default Home
