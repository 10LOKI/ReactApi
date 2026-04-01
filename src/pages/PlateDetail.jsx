import { useParams, Link } from 'react-router-dom';
import { plats } from '../data/plates'; // Importation des données centralisées

export default function PlateDetail() {
  const { id } = useParams();
  const plat = plats.find(p => p.id === parseInt(id));

  if (!plat) return <h2>Plat non trouvé</h2>;

  return (
    <div className="plate-detail">
      <Link to="/plates">← Retour au menu</Link>
      <h1>{plat.nom}</h1>
      <p className="price">{plat.prix} DH</p>
      <p className="description">{plat.description}</p>
      <span className={`badge ${plat.disponibilite ? 'available' : 'unavailable'}`}>
        {plat.disponibilite ? "Disponible" : "Épuisé"}
      </span>
    </div>
  );
}