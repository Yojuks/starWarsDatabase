export default function Planets({ content }) {
  console.log(content);
  return (
    <div>
      <img src={`https://starwars-visualguide.com/assets/img/characters/1.jpg`} alt="Planets" />
      <h3>{content.name}</h3>
      <ul style={{ listStyleType: 'none' }}>
        <li>{content.climate}</li>
        <li>{content.population}</li>
        <li>{content.gravity}</li>
      </ul>
    </div>
  );
}
