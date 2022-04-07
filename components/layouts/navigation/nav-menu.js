import { useRouter } from "next/router";
import Link from "next/link";
import { Menu, MenuItem, MenuList, MenuButton, Button } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const NavMenu = (props) => {
  const { menuItem } = props;
  const router = useRouter();
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            variant="nav-button"
            color={isOpen ? "primary.01" : "gray.01"}
            fontWeight={isOpen ? "600" : "400"}
            fontSize={14}
            rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            _focus={{ boxShadow: "none" }}
          >
            {menuItem.name}
          </MenuButton>
          <MenuList>
            {menuItem.children.map((child, index) => (
              <Link key={index} href={child.href} passHref scroll={false}>
                <MenuItem fontSize={14} closeOnSelect>
                  {child.name}
                </MenuItem>
              </Link>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default NavMenu;
