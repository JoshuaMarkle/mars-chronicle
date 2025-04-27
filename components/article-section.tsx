import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Headline from '@/components/headline';

interface ArticleSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  level?: 2 | 3 | 4;
  accent?: boolean;
  children: ReactNode;
  className?: string;
}

const ArticleSection = ({
  id,
  title,
  subtitle,
  level = 2,
  accent = false,
  children,
  className,
}: ArticleSectionProps) => {
  return (
    <section id={id} className={cn("py-6 md:py-10", className)}>
      <Headline 
        title={title} 
        subtitle={subtitle} 
        level={level}
        accent={accent}
      />
      <div className="article-content">
        {children}
      </div>
    </section>
  );
};

export default ArticleSection;