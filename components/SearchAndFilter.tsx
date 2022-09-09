import React, { Dispatch, SetStateAction } from 'react';
import { Flex } from '@chakra-ui/react';
import Filter from '../components/Filter';
import Search from '../components/Search';

interface Props {
  countries: any[];
  setCountries: Dispatch<SetStateAction<any[]>>;
}

const SearchAndFilter: React.FC<Props> = ({ countries, setCountries }) => {
  return (
    <Flex mt="50" justifyContent="center">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        w="87%"
        maxW={{ base: '87vw', sm: '80vw', md: '80vw', lg: '87vw', xl: '87vw', '2xl': '65vw' }}
      >
        <Search countries={countries} setCountries={setCountries} />
        <Filter countries={countries} setCountries={setCountries} />
      </Flex>
    </Flex>
  );
};

export default SearchAndFilter;
