
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type WasteCategoryCardProps = {
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
  path: string;
};

const WasteCategoryCard: React.FC<WasteCategoryCardProps> = ({
  title,
  description,
  color,
  icon,
  path,
}) => {
  return (
    <Link to={path}>
      <div className="waste-category-card group">
        <div className="flex items-center gap-3 mb-3">
          <div 
            className={`p-2 rounded-lg text-white flex items-center justify-center`}
            style={{ backgroundColor: color }}
          >
            {icon}
          </div>
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="mt-4 flex justify-end">
          <div className="text-primary text-sm font-medium group-hover:underline">Learn more →</div>
        </div>
      </div>
    </Link>
  );
};

export default WasteCategoryCard;
