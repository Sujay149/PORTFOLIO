import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6 relative">
        {/* Profile Icon - visible on all devices when not on homepage */}
        {!isHomePage && (
          <Link
            to="/"
            className="flex items-center gap-2 absolute left-4 top-1/2 transform -translate-y-1/2 md:static md:translate-y-0"
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
          className="hidden md:flex gap-6 px-6 py-2 rounded-full bg-white border border-gray-200 shadow-sm mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {["/about", "/projects", "/resume", "/contact"].map((path) => (
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
          className="md:hidden text-foreground ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-[72px] left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 rounded-b-xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-center gap-4 py-6 px-4">
              {["/about", "/projects", "/resume", "/contact"].map((path) => (
                <motion.div
                  key={path}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={path}
                    className={`text-base font-medium ${isActive(path)}`}
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
