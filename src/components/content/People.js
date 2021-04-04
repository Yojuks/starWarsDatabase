export default function People({ content }) {
  console.log('content.eye_color', content.eye_color);
  return (
    <div>
      <img src={`https://starwars-visualguide.com/assets/img/characters/1.jpg`} alt="Person" />
      <h3> {content.name ? content.name : <p>Nothing</p>}</h3>
      <ul>
        <li>Gender: {content.gender ? content.gender : <p>Nothing</p>}</li>
        <li>Birth Year: {content.birth_year ? content.birth_year : <p>Nothing</p>}</li>
        <li>Eye color: {content.eye_color ? content.eye_color : <p>Nothing</p>}</li>
      </ul>
    </div>
  );
}
