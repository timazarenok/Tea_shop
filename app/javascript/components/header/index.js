import React from "react";
import PublicOnlyLink from "../public-only-link";
import PrivateLink from "../private-link";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => (
  <Nav className="header justify-content-center">
    <Nav.Item>
      <Link to="/">ГЛАВНАЯ</Link>
    </Nav.Item>
    <Nav.Item>
      <Link to="/new-tea">НОВЫЙ ЧАЙ</Link>
    </Nav.Item> 
    <PublicOnlyLink to="/sign_up">РЕГИСТРАЦИЯ</PublicOnlyLink>
    <PublicOnlyLink to="/sign_in">ВОЙТИ</PublicOnlyLink>
    <PrivateLink to='log_out'>ВЫЙТИ</PrivateLink>
  </Nav>
);

export default Header;
