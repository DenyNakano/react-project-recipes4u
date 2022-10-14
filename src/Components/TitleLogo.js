import React, { useEffect, useState, useMemo } from "react";
export const TitleLogo = () => {
  const words = useMemo(() => ["U", "YOUR FRIENDS", "YOUR FAMILY"], []);
  const [word, setWord] = useState(words[0]);
  useEffect(() => {
    setTimeout(() => {
      setWord(
        words[
          words.indexOf(word) + 1 < words.length ? words.indexOf(word) + 1 : 0
        ]
      );
    }, 1000);
  }, [word, words]);
  return <div>RECIPES 4 {word}</div>;
};
