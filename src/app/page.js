"use client"
import Card from '@/components/card'
import Titulo from '@/components/titulo'
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {

 //mudar esse codigo pois é exemplo
 
  const [filmes, setFilmes] = useState([])

 const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTkyMjY2NzQ4MWFiMjA3ZDY0MjQ1MGIwZWZiNDYxZSIsInN1YiI6IjVlYTA5ZTZiYmU0YjM2MDAxYzU5NWExNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vhu0pPCiIwmtrpyOHdBlQid8HJJllaHthn1MERS_ANg'
  }
};

fetch('https://api.themoviedb.org/3/trending/movie/week?language=pt-BR', options)
  .then(response => response.json())
  .then(response => setFilmes(response.results))
  .catch(err => console.error(err));

//--------------------------------------------------------------------------------------------
  return (

    <main className="flex min-h-screen flex-col">

      <nav className="flex gap-4 justify-between items-end bg-black w-full p-3">

        <h1 className="flex items-center gap-2 text-5xl text-green-500 font-bold uppercase">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
        </svg>

          House trip

        </h1>

        <a href="/sobre">Sobre</a>

      </nav>

      <Titulo>Imoveis em alta</Titulo>
      <section className="flex gap-4 p-4">
      { filmes.map ( filme => <Card filme={filme}/>) }

      </section>

      <Titulo>Imoveis recomendados</Titulo>
      <Titulo>Lançamentos</Titulo>

    </main>

  )

}

 