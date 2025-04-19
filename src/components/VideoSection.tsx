
import React from 'react';
import { Play } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface VideoSectionProps {
  title: string;
  videoUrl: string;
  description: string;
  thumbnail: string;
}

const VideoSection = ({ title, videoUrl, description, thumbnail }: VideoSectionProps) => {
  // Convert standard YouTube URLs to embed format
  const getYoutubeEmbedUrl = (url: string) => {
    if (!url) return '';
    
    // Handle various YouTube URL formats
    const youtubeRegex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(youtubeRegex);
    
    // Return the video ID if found, otherwise return the original URL
    return match && match[2].length === 11
      ? `https://www.youtube.com/embed/${match[2]}`
      : url;
  };

  const handleVideoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };

  // Use real image URLs instead of relative paths
  const getImageUrl = (src: string) => {
    if (src.startsWith('http')) return src;
    return `https://images.unsplash.com${src}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 mb-6">
      <h2 className="text-xl font-medium mb-4">{title}</h2>
      <div className="relative mb-4 rounded-lg overflow-hidden group cursor-pointer">
        <AspectRatio ratio={16 / 9}>
          <img 
            src={getImageUrl(thumbnail)} 
            alt={title} 
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div 
            onClick={handleVideoClick}
            className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Play className="w-16 h-16 text-white" />
          </div>
        </AspectRatio>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default VideoSection;
