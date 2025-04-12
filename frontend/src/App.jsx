import React, { useState } from 'react';
import './styles/App.css';
import Navbar from '../components/Navbar';
import Footer from './components/Footer';
import MoodSelector from './components/MoodSelector';

function App() {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  return (
    <div className="App">
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>Mood-Based Music Playlist 🎵</h1>
        <MoodSelector onMoodSelect={handleMoodSelect} />
        {selectedMood && (
          <p>
            Showing playlist for: <strong>{selectedMood}</strong>
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
