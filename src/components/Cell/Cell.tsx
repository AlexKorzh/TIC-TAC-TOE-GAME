import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import { getBaseStyles } from './getBaseStyles';
import { CellValue } from '@/types';

interface CellProps {
  value: CellValue;
  onClick: () => void;
  isWinningCell?: boolean;
}

export const Cell = React.memo(({ value , onClick, isWinningCell = false }: CellProps) => {
  const isClickable = !value && !isWinningCell;
  const styles = useMemo(() => getBaseStyles(isClickable), [isClickable]);

  const cellStyles = useMemo(() => {
    if (isWinningCell) return [...styles.base, ...styles.winning];
    if (value === 'X') return [...styles.base, ...styles.xPlayer];
    if (value === 'O') return [...styles.base, ...styles.oPlayer];

    return [...styles.base, ...styles.empty];
  }, [isWinningCell, styles, value]);

  const textColor = useMemo(() => {
    if (isWinningCell) return 'text-yellow-700';
    if (value === 'X') return 'text-red-500';
    if (value === 'O') return 'text-blue-500';
    return '';
  }, [isWinningCell, value]);

  return (
    <motion.button
      onClick={onClick}
      className={classNames(cellStyles)}
      whileHover={isClickable ? { scale: 1.02 } : {}}
      whileTap={isClickable ? { scale: 0.98 } : {}}
      disabled={!isClickable}
    >
      <span className={textColor}>
        {value}
      </span>
    </motion.button>
  );
});

Cell.displayName = 'Cell';
