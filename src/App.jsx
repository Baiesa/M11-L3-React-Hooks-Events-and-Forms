// App.jsx
import React, { useState } from 'react';
import CharacterList from './Component/CharacterList';
import CharacterDetail from './Component/CharacterDetail';

const App = () => {
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  const handleCharacterClick = (characterId) => {
    setSelectedCharacterId(characterId);
  };

  return (
    <div>
      <CharacterList onCharacterClick={handleCharacterClick} />
      {selectedCharacterId && <CharacterDetail characterId={selectedCharacterId} />}
    </div>
  );
};

export default App;