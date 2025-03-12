import React, { useState } from "react";
import '../App.css'
const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Button to Open Popup */}
      <button className="open-btn" onClick={() => setIsOpen(true)}>Open Popup</button>

      {/* Popup Container (Only visible when isOpen is true) */}
      {isOpen && (
        <div className="popup-overlay" onClick={() => setIsOpen(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>Popup Title</h2>
            <p>This is a simple popup in React.</p>
            <button className="close-btn" onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup