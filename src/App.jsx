import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import PlateCard from './components/PlateCard'

  // const plats = [
  //   {nom: "Couscous", price: 90, is_available: true },
  //   {nom: "Tajine", price: 120, is_available: false },
  //   {nom: "Pastilla", price: 150, is_available: true },
  //   {nom: "Rfissa", price: 100, is_available: true },
  // ]

  // export default function App()
  // {
  //   return (
  //     <div>
  //       {plats.map((plat) => (
  //         <PlateCard 
  //           key={plat.id} 
  //           name={plat.name} 
  //           price={plat.price} 
  //           is_available={plat.is_available} 
  //         />
  //       ))}
  //     </div>
  //   )
  // }

function App() {

  return (
    <div>
      <h1>Application de plats</h1>

      <PlateCard nom='pizza' prix = {500} disponibilite = {true}/>
      <PlateCard nom='tacos' prix = {45} disponibilite = {false}/>
      <PlateCard nom='burger' prix = {49} disponibilite = {true}/>
    </div>
  );
}


export default App;