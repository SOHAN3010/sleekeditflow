
import React, { useState } from 'react';
import Toolbar from '@/components/Toolbar';
import VideoPreview from '@/components/VideoPreview';
import Timeline from '@/components/Timeline';
import Sidebar from '@/components/Sidebar';
import ImportDialog from '@/components/ImportDialog';
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [hasContent, setHasContent] = useState(false);
  const [importDialogOpen, setImportDialogOpen] = useState(false);
  const [clips, setClips] = useState<Array<any>>([]);

  const handleImport = () => {
    setImportDialogOpen(true);
  };

  const handleImportFiles = (files: File[]) => {
    if (files.length > 0) {
      // In a real application, you would process these files
      // Here we'll just add some dummy clips to the timeline
      
      const newClips = files.map((file, index) => {
        let type: 'video' | 'audio' | 'image' | 'text' = 'video';
        
        if (file.type.startsWith('audio/')) {
          type = 'audio';
        } else if (file.type.startsWith('image/')) {
          type = 'image';
        }
        
        return {
          id: `clip-${Date.now()}-${index}`,
          start: index * 1.5,
          duration: 2,
          type,
          name: file.name
        };
      });
      
      setClips([...clips, ...newClips]);
      setHasContent(true);
      
      toast.success(`Imported ${files.length} file${files.length > 1 ? 's' : ''}`);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-editor-bg">
      <Toolbar onImport={handleImport} />
      
      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-col flex-1 overflow-hidden">
          <VideoPreview hasContent={hasContent} />
          <Timeline clips={clips} />
        </div>
        
        <Sidebar />
      </div>
      
      <ImportDialog 
        open={importDialogOpen} 
        onOpenChange={setImportDialogOpen}
        onImport={handleImportFiles}
      />
    </div>
  );
};

export default Index;
