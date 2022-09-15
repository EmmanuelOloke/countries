import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

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

  const [allCountries, setAllCountries] = useState([] as any[]);

  const getFullBorderCountries: any = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const allCountries = await response.json();

    setAllCountries(allCountries);
  };

  useEffect(() => {
    getFullBorderCountries();
  }, []);

  const getBorderCountries: any = () => {
    /**
     * countryData.borders get the boorder countries for current country
     * for every borderCountry now, make a request to fetch all countries
     * then now filter the array and return the country where the country.cca3 property === borderCountry
     * return the country.name.common
     */

    const borderCountries = countryData.borders;
    const fullCountryNames = [];

    if (!borderCountries) {
      return (
        <Box px={10} py={2} boxShadow="md" fontSize="sm">
          No Border Countries
        </Box>
      );
    }

    for (let i = 0; i < allCountries.length; i++) {
      for (let j = 0; j < borderCountries.length; j++) {
        if (allCountries[i].cca3 === borderCountries[j]) {
          fullCountryNames.push(allCountries[i].name.common);
        }
      }
    }

    const styledBorderCountries = fullCountryNames.map((borderCountry: string, i: number) => {
      return (
        <Link href={`/${borderCountry}`} key={`${borderCountry}`}>
          <Box
            key={i}
            px={5}
            py={2}
            boxShadow="lg"
            _hover={{ boxShadow: 'md' }}
            fontSize="sm"
            mr={2}
            cursor="pointer"
          >
            {borderCountry}
          </Box>
        </Link>
      );
    });
    return styledBorderCountries;
  };

  return (
    <Flex mt="4em" mb="3em" justifyContent="center" alignItems="center">
      <Flex
        w={{ base: '87vw', sm: '80vw', md: '80vw', lg: '88vw', xl: '87vw', '2xl': '65vw' }}
        flexDirection={{ base: 'column', sm: 'column', md: 'column', xl: 'row', '2xl': 'row' }}
        gap={{ base: 20, sm: 20, md: 20, lg: 20, xl: 150, '2xl': 150 }}
      >
        <Image height={350} width={470} src={countryData.flags.svg} alt="country flag" />

        <Flex flexDirection="column" justifyContent="center">
          <Heading>{countryData.name.common}</Heading>

          <Flex
            flexDirection={{
              base: 'column',
              sm: 'column',
              md: 'column',
              lg: 'column',
              xl: 'row',
              '2xl': 'row',
            }}
            gap={{ base: 5, sm: 5, md: 5, lg: 5, xl: 130, '2xl': 130 }}
            mb={50}
          >
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

          <Flex
            alignItems={{
              base: 'left',
              sm: 'left',
              md: 'left',
              lg: 'center',
              xl: 'center',
              '2xl': 'center',
            }}
            flexDirection={{
              base: 'column',
              sm: 'column',
              md: 'column',
              lg: 'row',
              xl: 'row',
              '2xl': 'row',
            }}
            maxW={{ xl: '38em', '2xl': '38em' }}
          >
            <Text as="b" mr={3} mb={{ base: 3, sm: 3, md: 3, lg: 0, xl: 0, '2xl': 0 }}>
              Border Countries:
            </Text>
            <Flex flexWrap="wrap">{getBorderCountries()}</Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CountryDetails;
