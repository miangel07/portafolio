import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export const Menu = () => {
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="justify-center items-center">
        <Navbar disableAnimation isBordered>
          <NavbarContent className="sm:hidden" justify="start"></NavbarContent>

          <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
              <p className="font-bold text-inherit cursor-pointer">Miguel</p>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent
            className="hidden sm:flex gap-4 cursor-pointer"
            justify="center"
          >
            <NavbarBrand>
              <p className="font-bold text-inherit">Miguel</p>
            </NavbarBrand>
            <NavbarItem>
              <Link color="foreground" onPress={() => handleClick("sobre_mi")}>
              <p className="cursor-pointer"> Sobre mi</p>
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link
                onPress={() => handleClick("proyectos")}
                aria-current="page"
                color="warning"
              >
                <p className="cursor-pointer"> Proyectos</p>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                color="foreground"
                onPress={() => handleClick("habilidades")}
              >
                <p className="cursor-pointer"> Habilidades</p>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" onPress={() => handleClick("social")}>
                <p className="cursor-pointer"> Social</p>
              </Link>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>
    </>
  );
};

export default Menu;
