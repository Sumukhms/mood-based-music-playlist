// src/components/MoodSelector.jsx
import React from 'react';
import '../styles/MoodSelector.css'; // optional styles

const moods = ['😊 Happy', '😢 Sad', '😠 Angry', '😌 Calm', '😎 Chill'];

const MoodSelector = ({ onMoodSelect }) => {
  return (
    <div className="mood-selector">
      <h2>Select Your Mood</h2>
      <div className="mood-buttons">
        {moods.map((mood) => (
          <button key={mood} onClick={() => onMoodSelect(mood)}>
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;

