import { useState } from 'react';
import PlateCard from '../components/PlateCard';
import { plats } from '../data/plates';

export default function Plates() {
  const [search, setSearch] = useState('');
  const filtered = plats.filter(p => p.nom.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h1>Menu</h1>
      <input
        type="text"
        placeholder="Rechercher un plat..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {filtered.length === 0 && <p>Aucun plat trouvé.</p>}
      {filtered.map(p => <PlateCard key={p.id} {...p} />)}
    </div>
  );
}
