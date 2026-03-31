export default function PlateCard({ name, price, is_available }) {
  return (
    <div className="plate-card">
      <h3>{name}</h3>
      <p>{price} MAD</p>
      {is_available ? <span className="badge">Disponible</span> : <span className="badge">Indisponible</span>}
    </div>
  )
}
