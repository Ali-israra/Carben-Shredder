import React from 'react';
import './FullScreenMenu.css'; // Import the CSS file for styling

const FullScreenMenu = ({ isOpen, closeMenu }) => {
  // Function to handle menu item clicks
  const handleMenuItemClick = (menuItem) => {
    // Handle click actions here (e.g., navigating to a different page)
    console.log(`Clicked ${menuItem}`);
    // Close the menu after the action
    closeMenu();
  };

  return (
    <div className={`full-screen-menu ${isOpen ? 'open' : ''}`}>
      <ul>
        <li onClick={() => handleMenuItemClick('Home')}>Home</li>
        <li onClick={() => handleMenuItemClick('About')}>About</li>
        <li onClick={() => handleMenuItemClick('Services')}>Services</li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default FullScreenMenu;
