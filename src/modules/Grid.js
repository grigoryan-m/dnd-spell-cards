import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../styles/Grid.css';

function Grid() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Load cards from localStorage when the component mounts
    const savedCards = JSON.parse(localStorage.getItem('cards'));
    if (savedCards) {
      setCards(savedCards);
    }
  }, []);

  useEffect(() => {
    // Save cards to localStorage whenever the cards state changes
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  const handleSpacebarPress = (event) => {
    if (event.keyCode === 32) {
      const newCard = {
        id: Math.random(),
        title: window.prompt("Spell title (e.g. Fireball)"),
        level: window.prompt("Spell level (e.g. 3rd)"),
        castingTime: window.prompt("Casting time (e.g. 1 action)"),
        range: window.prompt("Spell range (e.g. 150 feet)"),
        components: window.prompt("Spell components (e.g. V, S, M)"),
        materials: window.prompt("If there is an M component, type it; if none, leave empty"),
        duration: window.prompt("Spell duration (e.g. Instantaneous or 1 hour)"),
        description: window.prompt("Description"),
        higherLevels: window.prompt("Type how this spell will work at higher levels"),
      };

      setCards([...cards, newCard]);
    }
  };

  useEffect(() => {
    // Attach the spacebar event listener to the window
    window.addEventListener('keydown', handleSpacebarPress);

    // Remove the event listener when the component unmounts
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
