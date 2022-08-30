import React from 'react';
import {Flex, Text, IconButton, useColorMode} from '@chakra-ui/react';
import {MoonIcon, SunIcon} from '@chakra-ui/icons';

export default function Header() {
    const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Flex boxShadow='md' justifyContent='center'>
        <Flex p={6} justifyContent="space-between" width="90%">
            <Text fontSize="x-large" fontWeight="bold" style={{fontFamily: "'Nunito Sans', sans-serif"}}>Where in the world?</Text>
            <Flex alignItems="center">
                <IconButton aria-label="icon" icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode}/>
                <Text marginLeft="3">Dark Mode</Text>
            </Flex>
        </Flex>
    </Flex>
  )
}
