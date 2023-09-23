import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../styles/Grid.css';

function Grid() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const handleSpacebarPress = (event) => {
      if (event.keyCode === 32) {
        const newCard = {
          id: Math.random(),
          title: window.prompt("Spell title (e.g. Fireball)"),
          level: window.prompt("Spell level (e.g. 3rd)"),
          castingTime: window.prompt("Casting time (e.g. 1 action)"),
          range: window.prompt("Spell range (e.g. 150 feet)"),
          components: window.prompt("Spell components (e.g. V, S, M)"),
          materials: window.prompt("If there is M component, type it which one is it. If none, leave empty"),
          duration: window.prompt("Spell duration (e.g. Instantaneous or 1 hour"),
          description: window.prompt("Description"),
          higherLevels: window.prompt("Type how this spell will work on higher levels"),
        };

        setCards([...cards, newCard]);
      }
    };

    window.addEventListener('keydown', handleSpacebarPress);
    return () => {
      window.removeEventListener('keydown', handleSpacebarPress);
    };
  }, [cards]);

  return (
    <div>
      <div className="Grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            level={card.level}
            castingTime={card.castingTime}
            range={card.range}
            components={card.components}
            materials={card.materials}
            duration={card.duration}
            description={card.description}
            higherLevels={card.higherLevels}
          />
        ))}
      </div>
    </div>
  );
}

export default Grid;
