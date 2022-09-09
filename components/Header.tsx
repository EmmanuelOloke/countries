import React from 'react';
import { Flex, Text, IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex boxShadow="md" justifyContent="center">
      <Flex
        p={5}
        justifyContent="space-between"
        width="90%"
        maxW={{ base: '87vw', sm: '80vw', md: '80vw', lg: '88vw', xl: '88vw', '2xl': '67vw' }}
      >
        <Text
          fontSize="x-large"
          fontWeight="bold"
          style={{ fontFamily: "'Nunito Sans', sans-serif" }}
        >
          Where in the world?
        </Text>
        <Flex alignItems="center">
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
