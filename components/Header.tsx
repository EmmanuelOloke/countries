import React from 'react'
import {Flex, Text} from '@chakra-ui/react'

export default function Header() {
  return (
    <Flex p={6} justifyContent="space-between" boxShadow='md'>
        <Text fontSize="x-large" fontWeight="bold">Where in the world?</Text>
        <Flex>
            <Text>Dark Mode</Text>
        </Flex>
    </Flex>
  )
}
