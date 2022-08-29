import React from 'react'
import {Flex, Text, IconButton, useColorMode} from '@chakra-ui/react'
import {MoonIcon, SunIcon} from '@chakra-ui/icons'

export default function Header() {
    const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Flex p={6} justifyContent="space-between" boxShadow='md'>
        <Text fontSize="x-large" fontWeight="bold">Where in the world?</Text>
        <Flex alignItems="center">
            <IconButton area-label="icon" icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode}/>
            <Text marginLeft="3">Dark Mode</Text>
        </Flex>
    </Flex>
  )
}
