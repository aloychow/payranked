import React, { useContext } from "react";
import Link from "next/link";
import { Context } from "../../../context/Context";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarLink2,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle, navLinks }) => {
  // Context
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.replace("/");
  };

  // -----------------------------------------------------------

  return (
    <SidebarContainer className="link" isOpen={isOpen} onClick={toggle}>
      <Icon className="link" onClick={toggle}>
        <CloseIcon className="link" />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {navLinks.map((link, index) => (
            <li key={index} onClick={toggle}>
              <Link href={link.href}>
                <SidebarLink className="link">{link.text}</SidebarLink>
              </Link>
            </li>
          ))}
          {user ? (
            <li onClick={handleLogout}>
              <Link href="/">
                <SidebarLink2 className="link">Sign Out</SidebarLink2>
              </Link>
            </li>
          ) : (
            <li onClick={toggle}>
              <Link href="/login">
                <SidebarLink2 className="link">Sign In</SidebarLink2>
              </Link>
            </li>
          )}
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
