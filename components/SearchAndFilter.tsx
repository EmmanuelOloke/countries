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
        alignItems={{
          base: 'left',
          sm: 'left',
          md: 'left',
          lg: 'center',
          xl: 'center',
          '2xl': 'center',
        }}
        justifyContent={{
          base: 'flex-start',
          sm: 'flex-start',
          md: 'flex-start',
          lg: 'space-between',
          xl: 'space-between',
          '2xl': 'space-between',
        }}
        flexDirection={{ base: 'column', lg: 'row', xl: 'row', '2xl': 'row' }}
        w="87%"
        gap={{ base: '50' }}
        maxW={{ base: '87vw', sm: '80vw', md: '80vw', lg: '87vw', xl: '87vw', '2xl': '65vw' }}
      >
        <Search countries={countries} setCountries={setCountries} />
        <Filter countries={countries} setCountries={setCountries} />
      </Flex>
    </Flex>
  );
};

export default SearchAndFilter;
