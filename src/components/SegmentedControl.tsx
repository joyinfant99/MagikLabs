import { useState } from 'react';
import { motion } from 'framer-motion';

interface SegmentedControlProps {
  options: string[];
  onChange: (selected: string) => void;
  initialSelected?: string;
}

export default function SegmentedControl({ options, onChange, initialSelected = 'All' }: SegmentedControlProps) {
  const [selected, setSelected] = useState(initialSelected);

  const handleChange = (option: string) => {
    setSelected(option);
    onChange(option);
  };

  return (
    <div className="flex justify-center mb-8">
      <div className="bg-gray-100 p-1 rounded-full">
        {options.map((option) => (
          <button
            key={option}
            className={`relative px-6 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
              selected === option ? 'text-white' : 'text-gray-700 hover:text-gray-900'
            }`}
            onClick={() => handleChange(option)}
          >
            {selected === option && (
              <motion.div
                layoutId="segmentBackground"
                className="absolute inset-0 bg-[#00274D] rounded-full"
                initial={false}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
}