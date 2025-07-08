import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';

interface ResetGameButtonProps {
  onClick: () => void;
}

export const ResetGameButton = ({ onClick }: ResetGameButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'mt-8',
        'gap-4',
        'inline-flex items-center justify-center',
        'px-[33.6px] py-3',
        'rounded-xl',
        'bg-[#2563EB]',
        'flex-shrink-0',
        'shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),0px_4px_6px_-4px_rgba(0,0,0,0.10)]',
        'hover:bg-[#1D4ED8]',
        'hover:shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.10),0px_8px_10px_-6px_rgba(0,0,0,0.10)]',
        'transition-all duration-200 linear',
        'hover:scale-102',
      )}
    >
      <Image src="/refresh.svg" alt="refresh" width={16} height={16} />
      <span className="text-white text-sm font-bold leading-5">
        New Game
      </span>
    </button>
  );
};