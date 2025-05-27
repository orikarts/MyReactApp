// import json_data from './products.json'
import './App.css'
import { LocalNav } from './components/LocalNav/LocalNav'
import { Header } from './components/Header/Header'
import { Banner } from './components/Banner/Banner'
import { Catalog } from './components/Catalog/Catalog'
import { Product } from './components/Product/Product'
import { Footer } from './components/Footer/Footer'
import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {

  const [jsonData, setJsonData] = useState([])

  useEffect(
    () => {
      axios.get('https://fakestoreapi.com/products')
      .then(response => {
        console.log(response.data);
        setJsonData(response.data);
      })
      .catch(error=>console.log(error))

    }, []
  )

  if(!jsonData) 
    return (<div>Loading...</div>)

  return (
    <>
    <Header/>
    <LocalNav/>
    <main>

        <Banner BgImage="./photos_content/oneblade-masthead-m.avif" Link="index.html" Title="Eлектростанок OneBlade"
    Subtitle="Голить волосся, а не шкіру" ButtTitle="Дізнатись більше про OneBlade 360"/>

    <Catalog ID="hygiene" Title="Каталог товарів">
      {jsonData.map((content: any, index: number) =>  { return <Product key={index} data={content}/>})}
    </Catalog>

        {/* <Banner BgImage="./photos_content/cooking-banner-l.jpg" Link="index.html" Title="Смажена курка"
    Subtitle="Швидко і просто у куховарці від Philips" ButtTitle="Дізнатись більше про смаження курки"/>

    <Catalog ID="hygiene" Title="Товари для дому">
      {json_data.map((content, index) =>  { return <Product key={index} data={content}/>})}
    </Catalog>

        <Banner BgImage="./photos_content/food-makers-L.avif"  Link="index.html" Title="Дитя хоче їсти?"
    Subtitle="Philips got you covered" ButtTitle="Дізнатись про те, що дати дитині поїсти"/>

    <Catalog ID="hygiene" Title="Дитині попоїсти">
      {json_data.map((content, index) =>  { return <Product key={index} data={content}/>})}
    </Catalog>

        <Banner BgImage="./photos_content/MothersDay_banner.webp" Link="index.html" Title="Eлектростанок для вашої жінки"
    Subtitle="Голить волосся, щоб жінка не сварилась" ButtTitle="Дізнатись більше про жінку"/>

    <Catalog ID="hygiene" Title="Для жінки">
      {json_data.map((content, index) =>  { return <Product key={index} data={content}/>})}
    </Catalog> */}

    </main>



    <Footer/>


    </>
  )
}

export default App
