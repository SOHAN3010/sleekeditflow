
import React from 'react';
import { 
  Layers, 
  ImageOff, 
  Captions, 
  PaintBucket, 
  Scissors, 
  Upload, 
  Wand2, 
  Music, 
  ZoomIn, 
  Mic
} from 'lucide-react';
import FeatureCard from './common/FeatureCard';

const Sidebar: React.FC = () => {
  return (
    <div className="w-72 bg-editor-panel border-l border-editor-border p-4 overflow-y-auto animate-fade-in">
      <h2 className="text-lg font-medium mb-4">AI Tools</h2>
      
      <div className="grid grid-cols-2 gap-3 mb-6">
        <FeatureCard 
          icon={<ImageOff />}
          title="Background Removal"
          description="Auto-remove backgrounds from videos"
        />
        
        <FeatureCard 
          icon={<Captions />}
          title="Auto Captions"
          description="Generate text from speech"
        />
        
        <FeatureCard 
          icon={<PaintBucket />}
          title="Color Grading"
          description="Enhance colors automatically"
        />
        
        <FeatureCard 
          icon={<Scissors />}
          title="Smart Trim"
          description="Remove silent sections"
        />
        
        <FeatureCard 
          icon={<Upload />}
          title="Export Options"
          description="Multiple formats & quality"
        />
        
        <FeatureCard 
          icon={<Wand2 />}
          title="Auto Transitions"
          description="Smart scene transitions"
        />
        
        <FeatureCard 
          icon={<Music />}
          title="AI Music"
          description="Generate matching soundtrack"
        />
        
        <FeatureCard 
          icon={<ZoomIn />}
          title="Auto Zoom"
          description="Dynamic zoom & pan effects"
        />
        
        <FeatureCard 
          icon={<Mic />}
          title="Noise Reduction"
          description="Clean audio automatically"
        />
        
        <FeatureCard 
          icon={<Layers />}
          title="Composite Layers"
          description="Manage multiple layers"
        />
      </div>
      
      <h2 className="text-lg font-medium mb-4">Project</h2>
      
      <div className="glass-panel rounded-md p-3 mb-4">
        <h3 className="text-sm font-medium mb-2">Project Settings</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="text-editor-text-muted">Resolution</div>
          <div className="text-right">1920 × 1080</div>
          
          <div className="text-editor-text-muted">Framerate</div>
          <div className="text-right">30 fps</div>
          
          <div className="text-editor-text-muted">Duration</div>
          <div className="text-right">00:00:00</div>
        </div>
      </div>
      
      <div className="glass-panel rounded-md p-3">
        <h3 className="text-sm font-medium mb-2">Export Presets</h3>
        <div className="space-y-2">
          <button className="w-full text-left p-2 text-sm rounded bg-editor-hover hover:bg-editor-accent/20 transition-colors">
            1080p High Quality (MP4)
          </button>
          <button className="w-full text-left p-2 text-sm rounded hover:bg-editor-hover transition-colors">
            720p Web Optimized (MP4)
          </button>
          <button className="w-full text-left p-2 text-sm rounded hover:bg-editor-hover transition-colors">
            Audio Only (MP3)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
