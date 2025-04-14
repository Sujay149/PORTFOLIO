import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path
      ? "text-emerald-500"
      : "text-foreground hover:text-emerald-400 transition-colors";
  };

  const isHomePage = location.pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Profile Section - Only show if not on home page */}
        {!isHomePage && (
          <Link 
            to="/" 
            className="flex items-center gap-2 ml-auto mr-4"
            style={{ transform: "translateX(-300px)" }} // Added 200px left movement
          >
            <motion.div
              className="w-10 h-10 rounded-full overflow-hidden"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/images/me.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </Link>
        )}

        {/* Desktop Navigation */}
        <motion.div
  className="hidden md:flex gap-6 px-6 py-2 mt-[10px] rounded-full bg-white border border-gray-200 shadow-sm"
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
  style={{ marginLeft: isHomePage ? "auto" : "0", marginRight: "30%" }}
>

          {["/about", "/projects", "/resume","/contact"].map((path) => (
            <Link 
              key={path} 
              to={path} 
              className={`text-sm font-medium-bold ${isActive(path)}`}
            >
              {path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.8 }}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md rounded-b-lg py-4 border-t border-gray-200"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-center gap-4">
              {["/about", "/projects", "/resume"].map((path) => (
                <motion.div 
                  key={path} 
                  whileHover={{ scale: 1.1 }} 
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to={path} 
                    className={`text-sm font-medium ${isActive(path)}`} 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
