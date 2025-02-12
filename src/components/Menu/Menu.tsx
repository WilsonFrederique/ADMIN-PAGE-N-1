import React, { useEffect } from 'react';
import './Menu.css';
import { FaDelicious, FaShoppingCart, FaWallet, FaChartLine, FaRegClock, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Logo from '../../assets/images/Logo.png';
import { Link } from 'react-router-dom';

const Menu = () => {

  useEffect(() => {
    const mainMenu = document.getElementById('mainMenu');
    if (!mainMenu) return; // Vérifie si l'élément existe

    const mainMenuLi = mainMenu.querySelectorAll('li');

    // Récupère l'élément actif depuis localStorage (si présent)
    const activeMenuItem = localStorage.getItem('activeMenuItem');
    if (activeMenuItem) {
      const savedItem = document.getElementById(activeMenuItem);
      if (savedItem) savedItem.classList.add('active');
    }

    // Fonction pour changer l'élément actif
    const changeActive = (event) => {
      mainMenuLi.forEach(n => n.classList.remove('active'));
      event.currentTarget.classList.add('active');

      // Enregistre l'élément actif dans localStorage
      localStorage.setItem('activeMenuItem', event.currentTarget.id);
    };

    mainMenuLi.forEach(n => n.addEventListener('click', changeActive));

    // Nettoyage des événements au démontage du composant
    return () => {
      mainMenuLi.forEach(n => n.removeEventListener('click', changeActive));
    };
  }, []);

  return (
    <menu>
      <img src={Logo} alt="Logo" />
      <ul id="mainMenu">
        <Link to="/"><Icon id="menu1" icon={<FaDelicious />} /></Link>
        <Link to="/clients"><Icon id="menu2" icon={<FaShoppingCart />} /></Link>
        <Link to="/"><Icon id="menu3" icon={<FaWallet />} /></Link>
        <Link to="/"><Icon id="menu4" icon={<FaChartLine />} /></Link>
        <Link to="/"><Icon id="menu5" icon={<FaRegClock />} /></Link>
      </ul>
      <ul className="lastMenu">
        <Link to="/"><Icon id="menu6" icon={<FaCog />} /></Link>
        <Link to="/"><Icon id="menu7" icon={<FaSignOutAlt />} /></Link>
      </ul>
    </menu>
  );
};

// Définition du type pour la prop 'icon'
const Icon = ({ id, icon }) => (
  <li id={id}>
    <a>{icon}</a>
  </li>
);

export default Menu;
