import { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inscription de :", formData);
  };

  return (
    <div className="auth-container">
      <h2>Créer un compte</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nom complet" 
          onChange={(e) => setFormData({...formData, name: e.target.value})} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          onChange={(e) => setFormData({...formData, email: e.target.value})} 
        />
        <input 
          type="password" 
          placeholder="Mot de passe" 
          onChange={(e) => setFormData({...formData, password: e.target.value})} 
        />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}