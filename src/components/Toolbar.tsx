
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  Import, 
  Type, 
  Wand2, 
  Video, 
  Image, 
  Music, 
  Scissors, 
  Undo, 
  Redo, 
  Save
} from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ToolbarProps {
  onImport: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onImport }) => {
  return (
    <div className="h-14 bg-editor-dark border-b border-editor-border px-4 flex items-center justify-between animate-fade-in">
      <div className="flex items-center gap-2">
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-editor-hover text-editor-text"
                onClick={onImport}
              >
                <Import className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-editor-dark text-editor-text border-editor-border">
              Import Media
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Separator orientation="vertical" className="h-6 bg-editor-border" />
        
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-editor-hover text-editor-text-muted hover:text-editor-text"
              >
                <Video className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-editor-dark text-editor-text border-editor-border">
              Video
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-editor-hover text-editor-text-muted hover:text-editor-text"
              >
                <Image className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-editor-dark text-editor-text border-editor-border">
              Image
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-editor-hover text-editor-text-muted hover:text-editor-text"
              >
                <Type className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-editor-dark text-editor-text border-editor-border">
              Text
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-editor-hover text-editor-text-muted hover:text-editor-text"
              >
                <Music className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-editor-dark text-editor-text border-editor-border">
              Audio
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-editor-hover text-editor-text-muted hover:text-editor-text"
              >
                <Wand2 className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-editor-dark text-editor-text border-editor-border">
              Transitions
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Separator orientation="vertical" className="h-6 bg-editor-border" />

        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-editor-hover text-editor-text-muted hover:text-editor-text"
              >
                <Scissors className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-editor-dark text-editor-text border-editor-border">
              Split
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      <div className="flex items-center gap-2">
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-editor-hover text-editor-text-muted hover:text-editor-text"
              >
                <Undo className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-editor-dark text-editor-text border-editor-border">
              Undo
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-editor-hover text-editor-text-muted hover:text-editor-text"
              >
                <Redo className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-editor-dark text-editor-text border-editor-border">
              Redo
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Separator orientation="vertical" className="h-6 bg-editor-border" />

        <Button className="bg-editor-accent hover:bg-editor-accent-hover text-white">
          <Save className="h-4 w-4 mr-1" />
          Export
        </Button>
      </div>
    </div>
  );
};

export default Toolbar;
