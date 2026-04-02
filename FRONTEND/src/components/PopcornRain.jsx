import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const emojis = ['🍿', '🍿', '🍿', '🍎', '🥦', '🥕', '🥩', '🍞', '🥤', '🍇', '🌽', '🥑', '🍗', '🍉'];

const PopcornRain = () => {
  const [popcorns, setPopcorns] = useState([]);

  useEffect(() => {
    // Generate an array of massive food particles with random properties
    const newPopcorns = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      x: Math.random() * 100, // random horizontal position (percentage)
      delay: Math.random() * 3, // random start delay
      duration: 4 + Math.random() * 6, // fall duration between 4-10 seconds
      size: 50 + Math.random() * 80, // font size 50px to 130px (MASSIVE!)
      rotation: Math.random() * 360, // random final rotation
    }));
    setPopcorns(newPopcorns);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {popcorns.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: -150, x: `${p.x}vw`, rotate: 0, opacity: 0 }}
          animate={{
            y: ['-10vh', '110vh'],
            rotate: p.rotation,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
          style={{ fontSize: p.size }}
          className="absolute top-0 drop-shadow-2xl"
        >
          {p.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default PopcornRain;
