
import React from 'react';
import { Play } from 'lucide-react';

interface VideoSectionProps {
  title: string;
  videoUrl: string;
  description: string;
  thumbnail: string;
}

const VideoSection = ({ title, videoUrl, description, thumbnail }: VideoSectionProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 mb-6">
      <h2 className="text-xl font-medium mb-4">{title}</h2>
      <div className="relative aspect-video mb-4 rounded-lg overflow-hidden group cursor-pointer">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <a 
          href={videoUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Play className="w-16 h-16 text-white" />
        </a>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default VideoSection;
