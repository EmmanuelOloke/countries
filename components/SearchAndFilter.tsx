import React from 'react';
import {Flex} from '@chakra-ui/react';
import Filter from '../components/Filter';
import Search from '../components/Search';

export default function SearchAndFilter() {
  return (
    <Flex mt="50" justifyContent="center">
        <Flex alignItems="center" justifyContent="space-between" width="87%">
            <Search/>
            <Filter/>
        </Flex>
    </Flex>
  )
}
