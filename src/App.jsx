import React, { useState } from 'react';
import DungeonFlow from './components/DungeonFlow';

function App() {
  const [dungeonState, setDungeonState] = useState(null);

  return (
    <main className="p-4">
      {!dungeonState ? (
        <DungeonFlow onStart={setDungeonState} />
      ) : (
        <div>
          <h2 className="text-xl font-bold mb-4">🌍 Dungeon Started!</h2>
          <p>Town: {dungeonState.town}</p>
          <p>Biome: {dungeonState.biome}</p>
          <p>Tier: {dungeonState.tier}</p>
          <button
            className="mt-4 bg-gray-800 text-white px-4 py-2 rounded"
            onClick={() => setDungeonState(null)}
          >
            Reset
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
