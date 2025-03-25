
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  onClick,
  className,
  disabled = false,
}) => {
  return (
    <div 
      className={cn(
        "feature-card flex flex-col items-center gap-2 text-center",
        disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.02]",
        className
      )}
      onClick={!disabled ? onClick : undefined}
    >
      <div className="text-editor-accent text-2xl mb-1">{icon}</div>
      <h3 className="font-medium text-sm">{title}</h3>
      {description && (
        <p className="text-editor-text-muted text-xs">{description}</p>
      )}
    </div>
  );
};

export default FeatureCard;
