import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TwoColumnLayoutProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
  className?: string;
  leftClassName?: string;
  rightClassName?: string;
  reversed?: boolean;
}

const TwoColumnLayout = ({
  leftContent,
  rightContent,
  className,
  leftClassName,
  rightClassName,
  reversed = false
}: TwoColumnLayoutProps) => {
  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8",
      className
    )}>
      <div className={cn(
        "md:order-1",
        { "md:order-2": reversed },
        leftClassName
      )}>
        {leftContent}
      </div>
      <div className={cn(
        "md:order-2",
        { "md:order-1": reversed },
        rightClassName
      )}>
        {rightContent}
      </div>
    </div>
  );
};

export default TwoColumnLayout;