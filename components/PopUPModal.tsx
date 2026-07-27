"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import EnquiryForm from "./EnquiryForm";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PopUpModal({ isOpen, onClose }: EnquiryModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-gray-500 hover:text-gray-800 bg-gray-100 rounded-full transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Form Container */}
        <div className="p-1.5">
          <EnquiryForm />
        </div>

      </div>
    </div>
  );
}