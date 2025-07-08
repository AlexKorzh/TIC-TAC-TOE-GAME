import React from 'react';
import classNames from 'classnames';

import Image from 'next/image';

interface GameStatusProps {
  winner: string | null;
  isDraw: boolean;
  currentPlayer: string;
}

export const GameStatus = ({ winner, isDraw, currentPlayer }: GameStatusProps) => {
  const containerClass = classNames(
    'w-full mb-8 flex flex-col items-center gap-2 px-6 py-[26px] rounded-lg shadow-md',
    'border-2 border-[rgba(226,232,240,1)]',
  );

  const isPlayer1 = currentPlayer === 'X';
  const isWinnerPlayer1 = winner === 'X';

  const getTextColorClass = () => {
    if (isDraw) return 'text-[rgba(30,41,59,1)]';
    if (winner) {
      return isWinnerPlayer1 
        ? 'text-[rgba(248,113,113,1)]' 
        : 'text-[rgba(96,165,250,1)]';
    }
    return isPlayer1 
      ? 'text-[rgba(248,113,113,1)]' 
      : 'text-[rgba(96,165,250,1)]';
  };
  
  const statusTextClass = classNames(
    'text-2xl font-bold',
    getTextColorClass()
  );
  
  const statusContent = winner
    ? `🎉 Player ${isWinnerPlayer1 ? '1' : '2'} 🎉`
    : isDraw
      ? 'Game ended in a draw!'
      : `Player ${isPlayer1 ? '1 (X)' : '2 (O)'}`;

  return (
    <div className={containerClass}>
        <div className='flex items-center'>
          <Image
            src="/zipper.svg"
            alt="Zipper icon"
            width={20}
            height={20}
          />
          <span className={classNames(
            'text-sm mx-2 font-semibold',
            {
              'text-yellow-500': winner,
              'text-[rgba(30,41,59,1)]': !winner
            }
          )}>
            {winner ? 'WINNER!' : isDraw ? 'GAME OVER' : 'CURRENT TURN'}
          </span>
          <Image
            src="/zipper.svg"
            alt="Zipper icon"
            width={20}
            height={20}
          />
      </div>
      <span className={statusTextClass}>
        {statusContent}
      </span>
    </div>
  );
};
