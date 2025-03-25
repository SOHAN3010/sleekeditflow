
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Upload, Video, Image, Music, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onImport?: (files: File[]) => void;
}

const ImportDialog: React.FC<ImportDialogProps> = ({ 
  open, 
  onOpenChange,
  onImport 
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (fileList: FileList) => {
    const newFiles = Array.from(fileList);
    setFiles(prev => [...prev, ...newFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleImport = () => {
    if (onImport && files.length > 0) {
      onImport(files);
      setFiles([]);
      onOpenChange(false);
    }
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) return <Image className="w-4 h-4" />;
    if (file.type.startsWith('video/')) return <Video className="w-4 h-4" />;
    if (file.type.startsWith('audio/')) return <Music className="w-4 h-4" />;
    return <Upload className="w-4 h-4" />;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-editor-panel border-editor-border">
        <DialogHeader>
          <DialogTitle className="text-editor-text">Import Media</DialogTitle>
          <DialogDescription className="text-editor-text-muted">
            Upload your video, audio, or image files
          </DialogDescription>
        </DialogHeader>
        
        <div 
          className={cn(
            "flex flex-col justify-center items-center border-2 border-dashed rounded-md p-6 transition-all duration-200",
            dragActive ? "border-editor-accent bg-editor-accent/5" : "border-editor-border"
          )}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Upload className="w-10 h-10 text-editor-text-muted mb-2" />
          <p className="text-editor-text-muted text-sm mb-1">Drag and drop your files here</p>
          <p className="text-editor-text-muted text-xs mb-4">Support for videos, images, and audio</p>
          
          <label htmlFor="file-upload" className="btn-primary cursor-pointer">
            Select Files
            <input
              id="file-upload"
              type="file"
              multiple
              accept="video/*,image/*,audio/*"
              className="hidden"
              onChange={handleFileInput}
            />
          </label>
        </div>
        
        {files.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2">Selected Files</h4>
            <div className="max-h-40 overflow-y-auto">
              {files.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-editor-dark p-2 rounded mb-1">
                  <div className="flex items-center gap-2">
                    {getFileIcon(file)}
                    <span className="text-sm truncate max-w-[200px]">{file.name}</span>
                  </div>
                  <button 
                    onClick={() => removeFile(index)}
                    className="text-editor-text-muted hover:text-editor-text"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex justify-end gap-2 mt-4">
          <Button 
            variant="outline" 
            onClick={() => onOpenChange(false)}
            className="border-editor-border text-editor-text hover:bg-editor-hover hover:text-editor-text"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleImport}
            disabled={files.length === 0}
            className="bg-editor-accent hover:bg-editor-accent-hover text-white"
          >
            Import
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImportDialog;
