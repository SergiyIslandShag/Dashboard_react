import "./style.css";

function FishInfo({ name, species, age, favoriteFood }) {
  return (
    <div className="fish-info">
      <h3>Ім'я: {name}</h3>
      <p>Вид: {species}</p>
      <p>Вік: {age} років</p>
      <p>Улюблена їжа: {favoriteFood}</p>
    </div>
  );
}

export default FishInfo;
