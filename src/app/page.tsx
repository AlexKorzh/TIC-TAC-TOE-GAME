'use client';

import { useState, useCallback } from 'react';
import type { Board } from '@/types';

import {
  Title,
  MainContainer,
  GameBoard,
  GameStatus,
  ResetGameButton,
  PlayerIndicator
} from '@/components';
import { calculateWinner } from '@/utils';

export default function Home() {
  const [board, setBoard] = useState<Board>(() => Array(9).fill(null));

  const { winner, line: winningLine } = calculateWinner(board);
  const currentPlayer = board.filter(Boolean).length % 2 === 0 ? 'X' : 'O';
  const isDraw = !winner && board.every(square => square !== null);

  const handleCellClick = useCallback((index: number) => {
    setBoard(prevBoard => {
      if (prevBoard[index] || calculateWinner(prevBoard).winner) return prevBoard;

      const isXTurn = prevBoard.filter(Boolean).length % 2 === 0;
      const currentPlayer = isXTurn ? 'X' : 'O';

      const newBoard = [...prevBoard];

      newBoard[index] = currentPlayer;

      return newBoard;
    });
  }, []);


  const resetGame = () => setBoard(Array(9).fill(null));

  return (
    <MainContainer>
      <div className='flex flex-col items-center'>
        <Title>TIC TAC TOE</Title>
        <GameStatus winner={winner} isDraw={isDraw} currentPlayer={currentPlayer} />
        <GameBoard
          onCellClick={handleCellClick}
          winningLine={winningLine}
          board={board}
        />
        <ResetGameButton onClick={resetGame} />
        <div className="mt-8 flex gap-6">
          <PlayerIndicator player="X" isActive={currentPlayer === 'X'} />
          <PlayerIndicator player="O" isActive={currentPlayer === 'O'} />
        </div>
      </div>
    </MainContainer>
  );
}
