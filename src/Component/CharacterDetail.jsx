// CharacterDetail.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config';

const CharacterDetail = ({ characterId }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          `https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=${config.publicKey}&hash=${config.hash}`
        );
        setCharacter(response.data.data.results[0]);
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };

    fetchCharacter();
  }, [characterId]);

  return (
    <div>
      {character && (
        <div>
          <h2>{character.name}</h2>
          <p>{character.description}</p>
          <h3>Comics</h3>
          <ul>
            {character.comics.items.map(comic => (
              <li key={comic.id}>{comic.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CharacterDetail;