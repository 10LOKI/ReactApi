import { useState } from 'react';
import PlateCard from '../components/PlateCard';
import { plats } from '../data/plates';

export default function Home() {
  const [search, setSearch] = useState('');
  const [count, setCount] = useState(0);

  const filtered = plats.filter(p => p.nom.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h1>Restaurant</h1>
      <div>Plats sélectionnés : <strong>{count}</strong></div>
      <input
        type="text"
        placeholder="Rechercher un plat..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {filtered.length === 0 && <p>Aucun plat trouvé.</p>}
      {filtered.map(p => (
        <PlateCard
          key={p.id}
          {...p}
          onSelect={() => setCount(c => c + 1)}
        />
      ))}
    </div>
  );
}
