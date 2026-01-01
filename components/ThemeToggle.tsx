import { useTheme } from '@/components/ThemeProvider';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
  
    const handleClick = () => {
      console.log("Current theme before toggle:", theme);
      toggleTheme();
    };
  
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className="p-3 rounded-xl cursor-pointer bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200/50 dark:border-purple-900/50 group"
        aria-label={theme === 'dark' ? 'Açıq tema keç' : 'Qaranlıq tema keç'}
      >
        <div className="relative w-5 h-5">
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-yellow-500 group-hover:text-yellow-600 transition-colors" />
          ) : (
            <Moon className="w-5 h-5 text-purple-500 group-hover:text-purple-400 transition-colors" />
          )}
        </div>
      </motion.button>
    );
  }