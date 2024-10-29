import React, { useState } from 'react';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './SidebarMenu.css';

const SidebarMenu = () => {
  const [hovered, setHovered] = useState(null);

  const menuItems = [
    { id: 'inicio', icon: <FaHome />, text: 'Inicio', path: '/' },
    { id: 'acerca', icon: <FaUser />, text: 'Acerca de mí', path: '/acerca' },
    { id: 'portafolio', icon: <FaBriefcase />, text: 'Portafolio', path: '/portafolio' },
    { id: 'contacto', icon: <FaEnvelope />, text: 'Contacto', path: '/contacto' },
  ];

  return (
    <div className="sidebar-menu">
      {menuItems.map(item => (
        <Link
          to={item.path}
          key={item.id}
          className="menu-item"
          onMouseEnter={() => setHovered(item.id)}
          onMouseLeave={() => setHovered(null)}
        >
          {item.icon}
          {hovered === item.id && <span className="menu-text">{item.text}</span>}
        </Link>
      ))}
    </div>
  );
};

export default SidebarMenu;
