import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Nav } from "react-bootstrap";

const PublicOnlyLink = ({ is_auth, children, ...options }) => {
  const { currentUser } = useSelector((state) => state.authentication);
  return currentUser ? null : (
    <Nav.Item>
      <Link {...options}>{children}</Link>{" "}
    </Nav.Item>
  );
};

export default PublicOnlyLink;
