import React, { useEffect, useState } from "react";
export const TitleLogo = () => {
    const words = ["U", "YOUR FRIENDS", "YOUR FAMILY"];
  const [word, setWord] = useState(words[0]);
  useEffect(() => {
    setTimeout(() => {
      setWord(
        words[
          words.indexOf(word) + 1 < words.length ? words.indexOf(word) + 1 : 0
        ]
      );
    }, 1000);
  }, [word]);
  return (
    <div>
        RECIPE 4 {word}
    </div>
  )
}
