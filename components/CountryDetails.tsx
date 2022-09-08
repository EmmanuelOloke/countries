import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

interface Props {
  countryData: any;
}

const CountryDetails: React.FC<Props> = ({ countryData }) => {
  return (
    <Flex mt="3em" justifyContent="center" alignItems="center">
      <Flex w="87%" flexDirection="row" gap={100}>
        <Image
          height={350}
          width={470}
          layout="fixed"
          src={countryData.flags.svg}
          alt="country flag"
        />

        <Flex flexDirection="column">
          <Heading>{countryData.name.common}</Heading>

          <Flex flexDirection="column">
            <Flex flexDirection="row" mt={30} mb={2}>
              <Text as="b">Native Name</Text>
              <Text>: {countryData.name.common}</Text>
            </Flex>
            <Flex flexDirection="row" mb={2}>
              <Text as="b">Population</Text>
              <Text>: {countryData.population}</Text>
            </Flex>
            <Flex flexDirection="row" mb={2}>
              <Text as="b">Region</Text>
              <Text>: {countryData.region}</Text>
            </Flex>
            <Flex flexDirection="row" mb={2}>
              <Text as="b">Sub Region</Text>
              <Text>: {countryData.subregion}</Text>
            </Flex>
            <Flex flexDirection="row" mb={2}>
              <Text as="b">Capital</Text>
              <Text>: {countryData.capital}</Text>
            </Flex>
          </Flex>

          <Flex>
            <Flex flexDirection="row" mt={30} mb={2}>
              <Text as="b">Native Name</Text>
              <Text>: {countryData.name.common}</Text>
            </Flex>
            <Flex flexDirection="row" mb={2}>
              <Text as="b">Population</Text>
              <Text>: {countryData.population}</Text>
            </Flex>
            <Flex flexDirection="row" mb={2}>
              <Text as="b">Region</Text>
              <Text>: {countryData.region}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CountryDetails;
