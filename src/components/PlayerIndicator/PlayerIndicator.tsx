import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';

type PlayerIndicatorProps = {
  player: 'X' | 'O';
  isActive?: boolean;
  className?: string;
};

export const PlayerIndicator = ({ 
  player, 
  isActive = false,
  className 
}: PlayerIndicatorProps) => {
  const isX = player === 'X';

  return (
    <div className={classNames(
      'relative',
      'inline-flex items-center',
      'py-[9px] px-[13px]',
      'gap-2',
      'self-stretch',
      'rounded-lg',
      'border border-[#E2E8F0]', // Default border
      'transition-all duration-200 ease-in-out',
      'bg-white',
      'shadow-sm',
      'group',
      {
        'border-blue-500 shadow-md shadow-blue-100': isActive && !isX,
        'border-red-500 shadow-md shadow-red-100': isActive && isX,
        'ring-2 ring-opacity-50': isActive,
        'ring-blue-500': isActive && !isX,
        'ring-red-500': isActive && isX,
        'scale-[1.02]': isActive,
      },
      className
    )}>
      {isActive && (
        <div className={classNames(
          'absolute -inset-0.5 -z-10 rounded-lg',
          'opacity-30',
          'transition-opacity duration-200',
          {
            'from-blue-500 to-blue-300': !isX,
            'from-red-500 to-red-300': isX,
          }
        )} />
      )}
      <Image
        src={isX ? '/x-player.svg' : '/o-player.svg'}
        alt={isX ? 'X' : 'O'}
        width={24}
        height={24}
      />

      <span className={classNames(
        isX ? 'text-red-500' : 'text-blue-500',
        'text-sm leading-5',
        'font-["Geist"]',
        'text-center',
        'not-italic',
        isActive ? 'font-bold' : 'font-medium'
      )}>
        Player {isX ? '1' : '2'}
      </span>
    </div>
  );
};
