import { motion } from 'framer-motion';
import { ArrowRightIcon, CodeBracketIcon, ChatBubbleBottomCenterIcon, BookOpenIcon } from '@heroicons/react/24/outline';

interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  status: 'Explore' | 'Beta' | 'Coming Soon';
  type: 'WebApp' | 'Channel' | 'Blog';
}

export default function ProductCard({ name, tagline, description, status, type }: ProductCardProps) {
  const getIcon = () => {
    switch (type) {
      case 'WebApp':
        return <CodeBracketIcon className="w-6 h-6" />;
      case 'Channel':
        return <ChatBubbleBottomCenterIcon className="w-6 h-6" />;
      case 'Blog':
        return <BookOpenIcon className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <motion.div 
      className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="text-gray-600">{getIcon()}</div>
        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{type}</span>
      </div>
      <h4 className="text-xl font-bold mb-2 text-black">{name}</h4>
      <p className="text-md text-gray-600 mb-2">{tagline}</p>
      <p className="text-sm text-gray-500 mb-4">{description}</p>
      <motion.button 
        className="flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {status} <ArrowRightIcon className="w-4 h-4 ml-1" />
      </motion.button>
    </motion.div>
  );
}