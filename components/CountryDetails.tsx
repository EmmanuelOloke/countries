import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

interface Props {
  countryData: any;
}

const CountryDetails: React.FC<Props> = ({ countryData }) => {
  const getLanguages = () => {
    const languages = Object.entries(countryData.languages);
    const list = languages.map((language) => {
      return ` ${language[1]}`;
    });
    return list.toString();
  };

  const getValue = () => {
    const values: any = Object.values(countryData.currencies);
    return values[0].name;
  };

  const getBorderCountries = () => {
    const borderCountries = countryData.borders;
    if (!borderCountries) {
      return (
        <Box px={10} py={2} boxShadow="md" fontSize="sm">
          No Border Countries
        </Box>
      );
    }
    const styledBorderCountries = borderCountries.map((borderCountry: string, i: number) => {
      return (
        <Box key={i} px={10} py={2} boxShadow="md" fontSize="xs" mr={5}>
          {borderCountry}
        </Box>
      );
    });
    return styledBorderCountries;
  };

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

          <Flex flexDirection="row" gap={150} mb={50}>
            <Flex flexDirection="column">
              <Flex flexDirection="row" mt={30} mb={2}>
                <Text as="b">Native Name</Text>
                <Text>: {countryData.name.common}</Text>
              </Flex>
              <Flex flexDirection="row" mb={2}>
                <Text as="b">Population</Text>
                <Text>: {countryData.population.toLocaleString()}</Text>
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

            <Flex flexDirection="column">
              <Flex flexDirection="row" mt={30} mb={2}>
                <Text as="b">Top Level Domain</Text>
                <Text>: {countryData.tld}</Text>
              </Flex>
              <Flex flexDirection="row" mb={2}>
                <Text as="b">Currencies</Text>
                <Text>: {getValue()}</Text>
              </Flex>
              <Flex flexDirection="row" mb={2}>
                <Text as="b">Languages</Text>
                <Text>: {getLanguages()}</Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex alignItems="center">
            <Text as="b" mr={3}>
              Border Countries:
            </Text>
            <Flex>{getBorderCountries()}</Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CountryDetails;
