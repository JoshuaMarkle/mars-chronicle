import { cn } from '@/lib/utils';

interface HeadlineProps {
  title: string;
  subtitle?: string;
  className?: string;
  level?: 1 | 2 | 3 | 4;
  accent?: boolean;
}

const Headline = ({ 
  title, 
  subtitle, 
  className,
  level = 1,
  accent = false
}: HeadlineProps) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <div className={cn("mb-4", className)}>
      <HeadingTag 
        className={cn(
          "font-playfair font-bold tracking-tight",
          {
            "text-4xl md:text-5xl lg:text-6xl": level === 1,
            "text-3xl md:text-4xl": level === 2,
            "text-2xl md:text-3xl": level === 3,
            "text-xl md:text-2xl": level === 4,
            "text-accent-red": accent
          }
        )}
      >
        {title}
      </HeadingTag>
      
      {subtitle && (
        <p className={cn(
          "mt-2 text-muted-foreground font-serif",
          {
            "text-xl": level === 1,
            "text-lg": level === 2,
            "text-base": level === 3 || level === 4
          }
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Headline;