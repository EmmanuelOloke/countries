import React from 'react';
import { Flex } from '@chakra-ui/react';
import Filter from '../components/Filter';
import Search from '../components/Search';

export default function SearchAndFilter() {
  return (
    <Flex mt="50" justifyContent="center">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        w="87%"
        maxW={{ base: '87vw', sm: '80vw', lg: '87vw', xl: '87vw' }}
      >
        <Search />
        <Filter />
      </Flex>
    </Flex>
  );
}
