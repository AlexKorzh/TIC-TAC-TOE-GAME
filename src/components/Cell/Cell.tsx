import React from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import { getBaseStyles } from './getBaseStyles';

type CellValue = 'X' | 'O' | null;

interface CellProps {
  value: CellValue;
  onClick: () => void;
  isWinningCell?: boolean;
}

export const Cell = ({ value, onClick, isWinningCell = false }: CellProps) => {
  const isClickable = !value && !isWinningCell;
  const styles = getBaseStyles(isClickable);

  const getCellStyles = () => {
    if (isWinningCell) return [...styles.base, ...styles.winning];
    if (value === 'X') return [...styles.base, ...styles.xPlayer];
    if (value === 'O') return [...styles.base, ...styles.oPlayer];

    return [...styles.base, ...styles.empty];
  };

  const getTextColor = () => {
    if (isWinningCell) return 'text-yellow-700';
    if (value === 'X') return 'text-red-500';
    if (value === 'O') return 'text-blue-500';

    return '';
  };

  return (
    <motion.button
      onClick={onClick}
      className={classNames(...getCellStyles())}
      whileHover={isClickable ? { scale: 1.02 } : {}}
      whileTap={isClickable ? { scale: 0.98 } : {}}
      disabled={!isClickable}
    >
      <span className={getTextColor()}>
        {value}
      </span>
    </motion.button>
  );
};
