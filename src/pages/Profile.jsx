export default function Profile() {
  // Plus tard, ces données viendront d'un "AuthContext"
  const user = {
    name: "Ayoub Ouharda",
    email: "ayoub@youcode.ma",
    role: "Étudiant / Scrum Master",
    preferences: "Cuisine Marocaine"
  };

  return (
    <div className="profile-container">
      <h2>Mon Profil Alimentaire</h2>
      <div className="profile-card">
        <p><strong>Nom :</strong> {user.name}</p>
        <p><strong>Email :</strong> {user.email}</p>
        <p><strong>Rôle :</strong> {user.role}</p>
        <p><strong>Préférences :</strong> {user.preferences}</p>
      </div>
    </div>
  );
}