"use client";
import { useEffect, useState } from "react";

export default function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after 1s
    const showTimer = setTimeout(() => {
      setShowPopup(true);

      // Hide popup after 2s
      const hideTimer = setTimeout(() => {
        setShowPopup(false);
      }, 2000);

      return () => clearTimeout(hideTimer);
    }, 1000);

    return () => clearTimeout(showTimer);
  }, []);

  return (
    <div className="z-5 flex items-center justify-center">
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-end ">
          <div className="bg-transparent ">
            <img
              src="/my-gig.gif"
              alt="Popup"
              className="w-64 h-64 object-cover "
            />
          </div>
        </div>
      )}
    </div>
  );
}
