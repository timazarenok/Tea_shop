import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateLink = ({ is_auth, children, ...options }) => {
  const { currentUser } = useSelector((state) => state.authentication);
  return currentUser ? (
    <Nav.Item>
      <Link {...options}>{children}</Link>
    </Nav.Item>
  ) : null;
};

export default PrivateLink;
