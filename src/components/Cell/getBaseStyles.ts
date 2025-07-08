export const getBaseStyles = (isClickable: boolean) => ({
  base: [
    'w-24 h-24',
    'flex-shrink-0',
    'rounded-xl',
    'border-4',
    'flex flex-col justify-center items-center',
    'p-1',
    'text-4xl font-bold',
    'transition-all duration-200',
    'focus:outline-none',
    isClickable ? 'cursor-pointer' : 'cursor-default',
  ],
  empty: [
    'border-[#CBD5E1]',
    'bg-gradient-to-br from-[#F1F5F9] to-[#E2E8F0]',
    'hover:border-[#D8B4FE] hover:from-[#F3E8FF] hover:to-[#E9D5FF] hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),0px_4px_6px_-4px_rgba(0,0,0,0.10)]',
  ],
  xPlayer: [
    'border-[#FCA5A5]',
    'bg-gradient-to-br from-[#EFF6FF] to-[#FEE2E2]',
    'shadow-sm',
  ],
  oPlayer: [
    'border-[#93C5FD]',
    'bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE]',
    'shadow-sm',
  ],
  winning: [
    'bg-yellow-100',
    'border-yellow-400',
  ],
});