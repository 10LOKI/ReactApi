import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import PlateCard from './components/PlateCard'

  const plats = [
  { id: 1, nom: "Couscous", prix: 90, disponiblilite: true },
  { id: 2, nom: "Tajine", prix: 120, disponiblilite: false },
  { id: 3, nom: "Pastilla", prix: 150, disponiblilite: true },
  { id: 4, nom: "Rfissa", prix: 100, disponiblilite: true },
]

  export default function App()
  {
    return (
      <div>
        {plats.map((plat) => (
          <PlateCard
            key={plat.id}
            name={plat.nom} 
            price={plat.prix} 
            is_available={plat.disponiblilite} 
          />
        ))}
      </div>
    )
  }

// function App() {

//   return (
//     <div>
//       <h1>Application de plats</h1>

//       <PlateCard nom='pizza' prix = {500} disponibilite = {true}/>
//       <PlateCard nom='tacos' prix = {45} disponibilite = {false}/>
//       <PlateCard nom='burger' prix = {49} disponibilite = {true}/>
//     </div>
//   );
// }
