"use Client"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

export default function Card({titulo, nota}) {
    const [favorito, setFavorito] = useState (false)

    
    
    function favoritar(){
        setFavorito(true)
    }
    function desfavoritar(){
        setFavorito(false)
    }
    
    return (
        <div className="flex flex-col items-center w-48 relatives">
            {

                favorito ?
                <FavoriteIcon onClick={desfavoritar}className='text-green-500 cursor-pointer absolute top-2 right-2'/>:
                <FavoriteBorderIcon onClick={favoritar} className='absolute cursor-pointer top-2 right-2' />

            }
        <img className="rounded" src="https://revistaprojeto.com.br/wp-content/uploads/2021/08/6sX6Sg-1.jpg" alt="" />
        <span className="text-lg font-bold line-clamp-1">
            {titulo}
            </span>
            <div>
            <i></i>
            <span>{nota}</span>
            </div>
        <a href="" className="bg-black text-green-500 w-full rounded text-center">Detalhes</a>
        </div>
    )
}