import {
  Box,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  IconButton,
  Link,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { FiMenu } from 'react-icons/fi';

const LinkItems = [
  { name: 'features' },
  { name: 'layout' },
  { name: 'formulários' },
  { name: 'display' },
  { name: 'feedback' },
  { name: 'overlay' },
  { name: 'tipografia' },
  { name: 'disclosure' },
  { name: 'navegação' },
  { name: 'media' },
  { name: 'outros' },
];

export default function SimpleSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('white', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="6" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          Chakra UI Examples
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map(link => (
        <NavItem key={link.name}>{link.name}</NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ children, ...rest }) => {
  return (
    <Link href={children} style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="3"
        mx="3"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'green.400',
          color: 'white',
        }}
        {...rest}
      >
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};
