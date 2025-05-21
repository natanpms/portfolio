import { ArrowUp } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React, { useEffect, useState } from 'react'

export default function ScrollTop() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {

      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  });

  const scrollTop = () => window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 right-8 z-50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={scrollTop}
            size="icon"
            className="btn border-none h-12 w-12 rounded-full bg-[#6366f1] hover:bg-[#4f46e5] shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
