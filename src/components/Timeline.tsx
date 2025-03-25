
import React from 'react';
import { Scissors, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from '@/lib/utils';

interface TimelineClip {
  id: string;
  start: number;
  duration: number;
  type: 'video' | 'audio' | 'image' | 'text';
  name: string;
  color?: string;
}

interface TimelineProps {
  clips?: TimelineClip[];
}

const Timeline: React.FC<TimelineProps> = ({ clips = [] }) => {
  const getClipColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-blue-500/20 border-blue-500/50';
      case 'audio': return 'bg-green-500/20 border-green-500/50';
      case 'image': return 'bg-purple-500/20 border-purple-500/50';
      case 'text': return 'bg-yellow-500/20 border-yellow-500/50';
      default: return 'bg-gray-500/20 border-gray-500/50';
    }
  };
  
  return (
    <div className="bg-editor-panel border-t border-editor-border animate-fade-in">
      {/* Timeline tools */}
      <div className="flex items-center justify-between p-2 border-b border-editor-border">
        <div className="flex items-center space-x-1">
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-editor-hover">
                  <Scissors className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-editor-dark text-editor-text border-editor-border">
                Split clip
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <span className="text-xs text-editor-text-muted ml-2">
            00:00:00.000
          </span>
        </div>
        
        <div className="flex items-center space-x-1">
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-editor-hover">
                  <ZoomOut className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-editor-dark text-editor-text border-editor-border">
                Zoom out
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-editor-hover">
                  <ZoomIn className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-editor-dark text-editor-text border-editor-border">
                Zoom in
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      
      {/* Timeline tracks */}
      <div className="h-64 overflow-y-auto timeline-scroll relative">
        {/* Time markers */}
        <div className="h-8 border-b border-editor-border flex">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex-1 flex items-center border-r border-editor-border last:border-r-0">
              <span className="text-xs text-editor-text-muted ml-1">
                {`${Math.floor(i / 60)}:${(i % 60).toString().padStart(2, '0')}`}
              </span>
            </div>
          ))}
        </div>
        
        {/* Video track */}
        <div className="timeline-track">
          <div className="h-full flex items-center pl-2 text-xs text-editor-text-muted">
            Video
          </div>
          
          {clips.filter(clip => clip.type === 'video' || clip.type === 'image').map((clip) => (
            <div 
              key={clip.id}
              className={cn("timeline-clip", getClipColor(clip.type))}
              style={{ 
                left: `${clip.start * 100}px`, 
                width: `${clip.duration * 100}px` 
              }}
            >
              <span className="text-xs truncate px-2">{clip.name}</span>
            </div>
          ))}
        </div>
        
        {/* Audio track */}
        <div className="timeline-track">
          <div className="h-full flex items-center pl-2 text-xs text-editor-text-muted">
            Audio
          </div>
          
          {clips.filter(clip => clip.type === 'audio').map((clip) => (
            <div 
              key={clip.id}
              className={cn("timeline-clip", getClipColor(clip.type))}
              style={{ 
                left: `${clip.start * 100}px`, 
                width: `${clip.duration * 100}px` 
              }}
            >
              <span className="text-xs truncate px-2">{clip.name}</span>
            </div>
          ))}
        </div>
        
        {/* Text track */}
        <div className="timeline-track">
          <div className="h-full flex items-center pl-2 text-xs text-editor-text-muted">
            Text
          </div>
          
          {clips.filter(clip => clip.type === 'text').map((clip) => (
            <div 
              key={clip.id}
              className={cn("timeline-clip", getClipColor(clip.type))}
              style={{ 
                left: `${clip.start * 100}px`, 
                width: `${clip.duration * 100}px` 
              }}
            >
              <span className="text-xs truncate px-2">{clip.name}</span>
            </div>
          ))}
        </div>
        
        {/* Timeline playhead */}
        <div 
          className="absolute top-0 bottom-0 w-px bg-editor-accent z-10"
          style={{ left: '100px' }}
        >
          <div className="w-3 h-3 bg-editor-accent rounded-full -translate-x-1/2 -translate-y-1" />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
