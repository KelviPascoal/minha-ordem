import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

import { Logo } from "./Logo";
import { SearchBox } from "./SearchBox";

type Header = {
  showSearch?: boolean;
};

export function Header({ showSearch = false }: Header) {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { onOpen } = useSidebarDrawer();

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      mx="auto"
      h="20"
      mt="4"
      px={["2", "6"]}
      align="center"
    >
      {!isWideScreen && (
        <IconButton
          aria-label="Abrir navegação"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}

      <Logo />
      {isWideScreen && showSearch && <SearchBox />}
      <Flex align="center" ml="auto">
        {/* <NotificationsNav /> */}

        {/* <Profile showProfileData={isWideScreen} /> */}
      </Flex>
    </Flex>
  );
}
