// CharacterList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config';
import './CharacterList.css';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${config.publicKey}&hash=${config.hash}`
        );
        setCharacters(response.data.data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h2>Characters</h2>
      <div className="character-grid">
        {characters.map(character => (
          <div key={character.id} className="character-item">
            <h3>{character.name}</h3>
            <img src={`${character.thumbnail.path}/portrait_medium.${character.thumbnail.extension}`} alt={character.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;