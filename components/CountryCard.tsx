import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  countries: any[];
}

const CountryCard: React.FC<Props> = ({ countries }) => {
  const eachCountry = countries?.map((country, i) => (
    <Link href={`/${country.name.common}`} key={country.name.common}>
      <Box
        flexDirection="column"
        _hover={{ boxShadow: 'md' }}
        boxShadow="lg"
        rounded="md"
        overflow="hidden"
        cursor="pointer"
        ml={{ md: '2em', lg: '0', xl: '0', '2xl': '0' }}
        width={{ base: '100%', sm: '100%', md: '50%', lg: '40%', xl: '19%', '2xl': '20%' }}
        key={i}
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
              {country.population.toLocaleString()}
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
    </Link>
  ));

  return <>{eachCountry}</>;
};

export default CountryCard;
