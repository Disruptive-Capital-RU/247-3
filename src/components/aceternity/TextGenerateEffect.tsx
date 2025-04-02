"use client";

import { useEffect, useState } from "react";

export const TextGenerateEffect = ({
  words,
  className = "",
}: {
  words: string[];
  className?: string;
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    if (!words.length) return;

    const handleTyping = () => {
      const currentWord = words[wordIndex];
      const shouldDelete = isDeleting;

      setCurrentText(prev => 
        shouldDelete
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      // Set typing speed based on action (typing or deleting)
      setTypingSpeed(isDeleting ? 75 : 150);

      // If we've finished typing the word, start deleting
      if (!shouldDelete && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      }

      // If we've deleted the word, move to next word
      if (shouldDelete && currentText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const ticker = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(ticker);
  }, [words, wordIndex, currentText, isDeleting, typingSpeed]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}; 