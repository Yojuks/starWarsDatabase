import { useParams } from 'react-router-dom';

import People from '../components/content/People';
import Planets from '../components/content/Planets';
import Starships from '../components/content/Starships';

export default function Content({ content, click, onClick }) {
  let { id } = useParams();

  click(id);

  if (id === 'characters') {
    return <People onClick={onClick} content={content} />;
  } else if (id === 'planets') {
    return <Planets onClick={onClick} content={content} />;
  } else if (id === 'starships') {
    return <Starships onClick={onClick} content={content} />;
  }
  return <div>{id}</div>;
}
