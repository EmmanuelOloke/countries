import React from 'react';
import { Flex, Text, IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Link from 'next/link';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex boxShadow="md" justifyContent="center">
      <Flex
        py={5}
        justifyContent="space-between"
        alignItems="center"
        width="90%"
        w={{ base: '87vw', sm: '80vw', md: '80vw', lg: '88vw', xl: '87vw', '2xl': '65vw' }}
      >
        <Link href={'/'}>
          <Text
            fontSize={{ base: 'xs', sm: 'lg', md: 'lg', lg: 'lg', '2xl': 'x-large' }}
            fontWeight="bold"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            cursor="pointer"
          >
            Where in the world?
          </Text>
        </Link>
        <Flex
          alignItems="center"
          fontSize={{ base: 'xs', sm: 'lg', md: 'lg', lg: 'lg', '2xl': 'x-large' }}
        >
          <IconButton
            aria-label="icon"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
          <Text marginLeft="2">Dark Mode</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
