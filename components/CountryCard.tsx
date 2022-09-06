import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

interface Props {
  countries: any[];
}

const showSomething = (country: any) => {
  console.log(country.name.common);
};

const CountryCard: React.FC<Props> = ({ countries }) => {
  const eachCountry = countries?.map((country, i) => (
    <Box
      flexDirection="column"
      boxShadow="md"
      rounded="md"
      overflow="hidden"
      width="20%"
      key={i}
      onClick={() => showSomething(country)}
    >
      <Image
        height={140}
        width={200}
        layout="responsive"
        src={country.flags.png}
        alt="country flag"
      />

      <Box p={5}>
        <Text fontWeight="bold" mb="10px">
          {country.name.common}
        </Text>
        <Flex flexDirection="row" flexWrap="wrap" mb="1">
          Population:
          <Text color="gray.500" ml="1">
            {country.population}
          </Text>
        </Flex>
        <Flex flexDirection="row" flexWrap="wrap" mb="1">
          Region:
          <Text color="gray.500" ml="1">
            {country.region}
          </Text>
        </Flex>
        <Flex flexDirection="row" flexWrap="wrap" mb="5">
          Capital:
          <Text color="gray.500" ml="1">
            {country.capital}
          </Text>
        </Flex>
      </Box>
    </Box>
  ));

  return <>{eachCountry}</>;
};

export default CountryCard;
