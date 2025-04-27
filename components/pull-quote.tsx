import { QuoteIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PullQuoteProps {
  quote: string;
  attribution?: string;
  className?: string;
}

const PullQuote = ({ quote, attribution, className }: PullQuoteProps) => {
  return (
    <blockquote className={cn(
      "relative p-6 my-8 border-l-4 border-accent-red bg-accent-red/5 dark:bg-accent-red/10",
      className
    )}>
      <QuoteIcon className="absolute top-6 left-4 w-8 h-8 text-accent-red/20" />
      <div className="pl-6">
        <p className="text-xl md:text-2xl font-playfair italic">
          {quote}
        </p>
        {attribution && (
          <footer className="mt-4 text-black/60 dark:text-white/60">
            — {attribution}
          </footer>
        )}
      </div>
    </blockquote>
  );
};

export default PullQuote;