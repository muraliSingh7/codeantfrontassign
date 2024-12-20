import React, { useState, useEffect } from "react";
import "./style.css";
import {
  IconHome,
  IconCode,
  IconCloud,
  IconBook,
  IconSettings,
  IconPhone,
  IconLogout,
  IconMenu,
  IconClose,
} from "../../../../components/Icons";
import Logo from "../../../../components/Logo";

// Type for navigation items
interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const Navbar: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>("repositories");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  // Handle window resize for mobile responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Navigation items for top and bottom sections
  const topNavItems: NavItem[] = [
    { id: "repositories", icon: <IconHome />, label: "Repositories" },
    { id: "code-review", icon: <IconCode />, label: "AI Code Review" },
    { id: "security", icon: <IconCloud />, label: "Cloud Security" },
    { id: "how-to-use", icon: <IconBook />, label: "How to Use" },
    { id: "settings", icon: <IconSettings />, label: "Settings" },
  ];

  const bottomNavItems: NavItem[] = [
    { id: "support", icon: <IconPhone />, label: "Support" },
    { id: "logout", icon: <IconLogout />, label: "Logout" },
  ];

  // Handle navigation item click
  const handleNavClick = (id: string) => setSelectedItem(id);

  // Render a navigation item with active state
  const renderNavItem = (item: NavItem) => (
    <button
      key={item.id}
      className={`nav-item ${selectedItem === item.id ? "active" : ""}`}
      onClick={() => handleNavClick(item.id)}
    >
      {item.icon}
      <span>{item.label}</span>
    </button>
  );

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <div className="navbar-logo-container">
          <Logo className="navbar-logo" />
          <span className="navbar-logo-text">CodeAnt AI</span>
        </div>
        {/* Menu toggle button */}
        <button className="menu-toggle" onClick={toggleMenu}>
          <IconMenu className={`menu-icon ${isMenuOpen ? "hidden" : ""}`} />
          <IconClose className={`close-icon ${isMenuOpen ? "" : "hidden"}`} />
        </button>
      </div>

      {isMobile && isMenuOpen && <div className="nav-items-wrapper" />}

      <div
        className={`nav-items ${isMobile ? (isMenuOpen ? "" : "hidden") : ""}`}
      >
        <div className="user-dropdown">
          <span>UtkarshDhairyaPanwar</span>
          <span className="dropdown-arrow">&#8964;</span>
        </div>

        <div className="top-nav-items">{topNavItems.map(renderNavItem)}</div>

        <div className="bottom-nav-items">
          {bottomNavItems.map(renderNavItem)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
