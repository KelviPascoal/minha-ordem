import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Icon,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

export type Option = {
  name: string;
  onClick: () => void;
  icon: any;
};

export type MenuActionsProps = {
  options: Option[];
};

export function MenuActions({ options }: MenuActionsProps) {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<BsThreeDots />}
        backgroundColor="transparent"
        borderRadius="50%"
        color="whiteAlpha.800"
        _active={{
          transform: "rotate(90deg)",
          bg: "blue.600",
          color: "white",
        }}
      />

      <MenuList color="blackAlpha.700" minWidth="36">
        {options.map(({ name, icon, onClick }, index) => (
          <MenuItem key={index} onClick={onClick}>
            <>
              <Icon as={icon} fontSize="16" marginRight="2" />
              {name}
            </>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
