// Header.jsx
// Contiene el Navbar, los Links y switch del tema claro/oscuro

import { Link } from 'react-router-dom';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import { BadgeCart } from './BadgeCart';
import ThemeSwitch from './ThemeSwitch';
import Logo from '../assets/Logo.png';
import { SearchButton } from './SearchButton';
import "../sass/header.scss";


import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = ({ children }) => {
  return <>{children}</>;
};

export const Header = () => {
  const { mode, setMode } = useContext(ThemeContext);

  return (
    <Navbar>
      <div className={`Navbar ${mode}`}>

        <div className="nav-top">
          <div className="nav-left">
            <img src={Logo} width={150} height={150} alt="Logo" />
          </div>
          <div className="nav-right">
            <BadgeCart />
            {/*Componente switch que permite el cambio del modo claro/oscuro*/}
            <ThemeSwitch
              checked={mode === "dark"}
              onChange={() => setMode(mode === "light" ? "dark" : "light")}
            />
          </div>
        </div>

        
        <div className="nav-bottom">
          <Link to="/"><HomeSharpIcon fontSize="large" style={{ color: mode === "dark" ? "#899ad1ff" : "#081a55ff" }} /></Link>
          <Link to="/Productos">Ver productos</Link>
          <SearchButton />
          <Link to="/Carrito">Mi carrito</Link>
          <Link to="/Registrame">Crear Cuenta</Link>
          <Link to="/Login">Login</Link>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;