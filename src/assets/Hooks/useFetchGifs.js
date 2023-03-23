import { useState, useEffect } from "react";
import { getGif } from "../helpers/getGifts";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isloading, setIsloading] = useState(true);

    const getImages = async() =>{
        const newImages = await getGif(category);
        setImages(newImages);
        setIsloading(false);

    }

    useEffect(() => {
         getImages();
    }, [])

    return {

        images: images,
        isloading: isloading

    }

}
