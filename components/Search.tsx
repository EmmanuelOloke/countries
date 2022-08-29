import React from 'react';
import {SearchIcon, ArrowForwardIcon} from '@chakra-ui/icons';
import {Flex, Input} from '@chakra-ui/react';

export default function Search() {
  return (
    <Flex width="25%" boxShadow="base" alignItems="center" mt="10" p="4" justifyContent="space-evenly" borderRadius="md">
        <SearchIcon color="gray.500" ml={3} mr={5}/>
        <Input variant="unstyled" placeholder="Search for a country..." fontSize="xs"/>
        <ArrowForwardIcon color="gray.500"/>
    </Flex>
  )
}
