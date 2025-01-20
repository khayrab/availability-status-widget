import React, { useState } from 'react';

// Component for displaying availability status
const AvailabilityStatus = () => {
  const [isFree, setIsFree] = useState(true);
  const [nextStatusChange, setNextStatusChange] = useState('2:30 PM');
  
  // For demo purposes, toggle status
  const toggleStatus = () => {
    setIsFree(!isFree);
    setNextStatusChange(isFree ? '4:45 PM' : '2:30 PM');
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 max-w-sm mx-auto">
      <div 
        className={`w-96 h-40 rounded-xl flex items-center justify-center text-center p-4 text-white mb-4 transition-all duration-500 cursor-pointer
          ${isFree 
            ? 'bg-[#3f8285] hover:opacity-90' 
            : 'bg-gray-500 hover:opacity-90'}
          animate-pulse-subtle`}
        onClick={toggleStatus}
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="text-2xl mb-1">
            {isFree 
              ? '📱 💓 💬' 
              : '✨ 🌿 💫'}
          </div>
          
          <p className="text-lg px-4">
            {isFree 
              ? "Khayra is available via phone, heartbeat, and WhatsApp (in that order of priority)" 
              : "Khayra is unavailable on all platforms while being present in real life"}
          </p>
        </div>
      </div>
      
      <div className="text-center text-gray-600">
        until {nextStatusChange}
      </div>
    </div>
  );
};

// CSS for the pulse animation
const style = document.createElement('style');
style.textContent = `
  .animate-pulse-subtle {
    animation: pulse-subtle 3s infinite;
  }
  @keyframes pulse-subtle {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.005);
    }
  }
`;
document.head.appendChild(style);

export default AvailabilityStatus;
