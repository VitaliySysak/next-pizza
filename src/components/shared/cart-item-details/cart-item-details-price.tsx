import { cn } from '@/src/lib/utils';

interface Props {
  value: number;
  className?: string;
}

export const CartItemDetailsPrice: React.FC<Props> = ({ value, className }) => {
  return <h2 className={cn('font-bold min-w-[60px] text-center', className)}>${value}</h2>;
};
