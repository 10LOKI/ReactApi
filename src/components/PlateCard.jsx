//  export default function PlateCard(props) {
//   return (
//     <div className="plate-card">
//       <h3>{props.name}</h3>
//       <p>{props.price} MAD</p>
//       {/* maintenant on va ajouter la condition qui vérifie si il est disponible*/}
//       {props.is_available ? (<span className="badge">Disponible</span>) : (<span className="badge bg-danger">Indisponible</span>)}
//     </div>
//   );
// }

function PlateCard(props)
{
    return (
        <div>
            <h2>{props.nom}</h2>
            <h3>{props.prix}</h3>
            <h4>{props.disponibilite ? <p>disponible</p> : <p>indisponible</p>}</h4>
        </div>
    );
}
export default PlateCard;
