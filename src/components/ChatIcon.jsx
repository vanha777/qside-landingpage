// components/ChatIcon.js
import React from 'react';

const ChatIcon = () => {
  // Function to determine if the user is on a mobile device
  const isMobile = () => /Mobi|Android/i.test(navigator.userAgent);

  // Set the href based on the device type
  const href = isMobile()
    ? "http://M.me/61565314197121"
    : "https://www.facebook.com/profile.php?id=61565314197121";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50"
    >
      <img src="https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/theme/messenger.svg?t=2024-09-02T04%3A21%3A43.340Z" alt="SVG Image" />
    </a>
  );
};

export default ChatIcon;
