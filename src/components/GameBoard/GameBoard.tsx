import React, {useCallback} from 'react';
import {Cell} from '@/components';
import type { Board, CellValue } from '@/types';

interface MemoizedCellWrapperProps {
  value: CellValue;
  index: number;
  isWinningCell: boolean;
  onCellClick: (index: number) => void;
}

interface GameBoardProps {
  board: Board;
  onCellClick: (index: number) => void;
  winningLine?: number[];
}

export const MemoizedCellWrapper = React.memo(({
  value,
  index,
  isWinningCell,
  onCellClick
  }: MemoizedCellWrapperProps) => {
  const handleClickForThisCell = useCallback(() => {
    onCellClick(index);
  }, [onCellClick, index]);

  return (
    <Cell
      value={value}
      onClick={handleClickForThisCell}
      isWinningCell={isWinningCell}
    />
  );
});

export const GameBoard = React.memo(({
  board,
  onCellClick,
  winningLine = [],
  }: GameBoardProps) => {
  return (
    <div className="py-[18px] px-[26px] rounded-[20px] border-2 border-[#E2E8F0] bg-white shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),0px_4px_6px_-4px_rgba(0,0,0,0.10)]">
      <div className='grid grid-cols-3 gap-7 py-[16px] px-3 rounded-2xl bg-[rgba(30,41,59,0.50)]'>
        {
          board.map((cell, index) => (
            <MemoizedCellWrapper
              key={index}
              index={index}
              isWinningCell={winningLine.includes(index)}
              onCellClick={onCellClick}
              value={cell}
            />
          ))
        }
      </div>
    </div>
  );
});

GameBoard.displayName = 'GameBoard';
MemoizedCellWrapper.displayName = 'MemoizedCellWrapper';
