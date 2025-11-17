import { FC } from "react";
import "../../assets/sparkles.css";

const FloatingSparkles: FC = () => {
  const sparkles = Array.from({ length: 10 }, (_, i) => i);
  const hearts = Array.from({ length: 5 }, (_, i) => i);

  const heartEmojis = ["💖", "💕", "💗", "💓", "💝"];
  const starEmojis = ["⭐", "🌟", "💫", "✨"];

  return (
    <>
      <div className="sparkles-container">
        {sparkles.map((i) => (
          <div
            key={`sparkle-${i}`}
            className="sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            {starEmojis[Math.floor(Math.random() * starEmojis.length)]}
          </div>
        ))}
        {hearts.map((i) => (
          <div
            key={`heart-${i}`}
            className="floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          >
            {heartEmojis[i % heartEmojis.length]}
          </div>
        ))}
      </div>
    </>
  );
};

export default FloatingSparkles;
