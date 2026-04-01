import { Link } from "react-router-dom";

export default function PlateCard({nom,prix,disponibilite , onSelect, id }) {
  return (
    <div className="plate-card">
      <h3>{nom}</h3>
      <p>{prix}DH</p>
      {disponibilite ? <span className="badge">Disponible</span> : <span className="badge">Indisponible</span>}
      <br />
      <button onClick={onSelect} disabled={!disponibilite}>{disponibilite ? "Selectionner le plat" : "Epuise"}</button>
      <Link  to={`/plates/${id}`}>Voir détails</Link>
    </div>
  );
}
