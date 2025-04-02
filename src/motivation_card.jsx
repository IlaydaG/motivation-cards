import React, { useState } from "react";
import './MotivationCard.css';  

const quotes = [
    "Every day is a new beginning.",
    "Success is the reward for those who keep trying.",
    "Believe in yourself because that’s the first step to success.",
    "Dreams are possible if you have the courage to pursue them.",
    "Today is your chance to be a better you.",
    "Success comes with small but consistent steps.",
    "Making mistakes is a part of growth.",
    "Not tomorrow, **start now!**",
    "Invest in yourself; you are your most valuable asset.",
    "Falling is not the problem, knowing how to get up is."
];

export default function MotivasyonKartlari() {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="motivasyon-kart-container">
      <div className="motivasyon-kart">
        <h2 className="motivasyon-title">💡 Daily Motivation</h2>
        <p className="motivasyon-quote">"{quote}"</p>
        <button
          onClick={getRandomQuote}
          className="motivasyon-button"
        >
          Next Sentence✨
        </button>
      </div>
    </div>
  );
}
