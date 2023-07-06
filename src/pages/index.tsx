import React, { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [userInputs, setUserInputs] = useState<number[][]>([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const [bombMap, setBombMap] = useState<number[][]>([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const bombCount = 10;

  const handleClick = (x: number, y: number) => {
    if (bombMap[y][x] === 1) {
      // ゲームオーバーの処理

    } else {
      const newUserInputs = [...userInputs];
      newUserInputs[y][x] = 1;
      setUserInputs(newUserInputs);
    }
  };

  return (
    <div className={styles.board}>
      {userInputs.map((row, y) => (
        row.map((cell, x) => (
          <div
            className={styles.cell}
            onClick={() => handleClick(x, y)}
            key={`${x}-${y}`}
          >
            {cell === 1 && (bombMap[y][x] ? '💣' : '🚩')}
          </div>
        ))
      ))}
    </div>
  );
};

export default Home;
