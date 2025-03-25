
import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Slider } from "@/components/ui/slider";

interface VideoPreviewProps {
  hasContent: boolean;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ hasContent }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(70);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (newValue: number[]) => {
    setVolume(newValue[0]);
    if (newValue[0] === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  const handleProgressChange = (newValue: number[]) => {
    setProgress(newValue[0]);
  };

  return (
    <div className="flex-1 bg-editor-dark flex flex-col">
      <div className="flex-1 flex items-center justify-center overflow-hidden relative">
        {hasContent ? (
          <div className="w-full h-full bg-black relative">
            {/* Video would be here */}
            <div className="absolute bottom-4 left-4 text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
              00:00:00
            </div>
          </div>
        ) : (
          <div className="text-center p-8 animate-fade-in">
            <div className="animate-float">
              <svg 
                width="80" 
                height="80" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="mx-auto mb-4 text-editor-text-muted"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-1">Drag material here to start creating</h3>
            <p className="text-editor-text-muted text-sm max-w-md mx-auto">
              Import videos, images, or audio files to start your project
            </p>
          </div>
        )}
      </div>

      <div className="p-2 bg-editor-panel border-t border-editor-border">
        <div className="mb-1">
          <Slider
            value={[progress]}
            max={100}
            step={1}
            onValueChange={handleProgressChange}
            className="cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={togglePlay}
              className="p-2 rounded-full hover:bg-editor-hover transition-colors duration-150"
            >
              {isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5" />
              )}
            </button>
            <button
              className="p-2 rounded-full hover:bg-editor-hover transition-colors duration-150"
            >
              <SkipBack className="h-4 w-4" />
            </button>
            <button
              className="p-2 rounded-full hover:bg-editor-hover transition-colors duration-150"
            >
              <SkipForward className="h-4 w-4" />
            </button>
            <span className="text-xs text-editor-text-muted ml-2">
              00:00 / 00:00
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="p-2 rounded-full hover:bg-editor-hover transition-colors duration-150"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </button>
            <Slider
              value={[volume]}
              max={100}
              step={1}
              onValueChange={handleVolumeChange}
              className="w-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPreview;
