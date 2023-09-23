import '../styles/Grid.css';
import Card from './Card';

function Grid() {
  return (
    <div className="Grid">
      <Card title="Fireball" level="3rd" castingTime="1 action" range="150 feet" components="V, S, M" materials="A tiny ball of bat guano and sulfur"/>
      <Card title="Fireball" level="3rd" castingTime="1 action" range="150 feet" components="V, S, M" materials="A tiny ball of bat guano and sulfur"/>
    </div>
  );
}

export default Grid;
