"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SocialLinks from "../components/SocialLinks";
import { cn } from "@/lib/utils";
import { DotPattern } from "../components/magicui/dot-pattern";

const Index = () => {
  const titles = ["Software Developer", "Designer", "Tech Enthusiast", "Prompt Engineer"];
  const [currentTitle, setCurrentTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < titles[titleIndex].length) {
        setCurrentTitle((prev) => prev + titles[titleIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentTitle((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === titles[titleIndex].length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen bg-white dark:bg-gray-900 pt-[100px] sm:pt-28 overflow-hidden"
    >
      {/* Background Dot Pattern */}
      <DotPattern
        className={cn(
          "absolute inset-0 [mask-image:radial-gradient(200px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          "opacity-50"
        )}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-start gap-6 sm:gap-8 max-w-3xl ml-4 sm:ml-6 md:ml-8 lg:ml-12"
        >
          {/* Profile Image */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowImageModal(true)}
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-lg cursor-pointer border-4 border-white dark:border-gray-800"
          >
            <img
              src="/images/me.jpg"
              alt="Sujay's Profile"
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/lovable-uploads/me.jpg";
              }}
            />
          </motion.div>

          {/* Text Content */}
          <div className="space-y-4 text-left">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-900 dark:text-gray-100"
            >
              Hey, I'm Sujay, a{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={titleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-black dark:text-white font-bold"
                >
                  {currentTitle}
                  <span className="animate-pulse">|</span>
                </motion.span>
              </AnimatePresence>
            </motion.h1>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-900 dark:text-gray-100"
            >
              I contribute to the development of several outstanding products.
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400"
            >
              I also maintain projects like{" "}
              <a
                href="https://signup-1499.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-bold underline hover:opacity-100 transition"
              >
                NueroHub
              </a>
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex justify-start gap-4"
            >
              <SocialLinks />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {showImageModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowImageModal(false)}
          >
            <motion.img
              src="/lovable-uploads/me.jpg"
              alt="Expanded Sujay"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-[90%] max-h-[90%] sm:max-w-[70%] sm:max-h-[70%] md:max-w-[50%] md:max-h-[50%] rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Index;
