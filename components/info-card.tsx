import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface InfoCardProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

const InfoCard = ({ title, icon, children, className }: InfoCardProps) => {
  return (
    <div className={cn(
      "bg-accent-red/5 dark:bg-accent-red/10 border border-accent-red/20 rounded-md p-6 shadow-sm",
      className
    )}>
      {(title || icon) && (
        <div className="flex items-center space-x-3 mb-4">
          {icon && (
            <div className="text-accent-red">
              {icon}
            </div>
          )}
          <h3 className="font-playfair font-bold text-xl">{title}</h3>
        </div>
      )}
      <div className="space-y-3 text-black/80 dark:text-white/80">
        {children}
      </div>
    </div>
  );
};

export default InfoCard;
