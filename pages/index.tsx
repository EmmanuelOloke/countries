import { useState } from 'react';
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Box, Flex, Text } from '@chakra-ui/react';
import SearchAndFilter from '../components/SearchAndFilter';
import CountryCard from '../components/CountryCard';
import Header from '../components/Header';

type Props = {
  countries: object[];
};

function AllCountries({ countries }: Props) {
  const [fetchedCountries, setFetchedCountries] = useState(countries);

  return (
    <>
      <Header />
      <SearchAndFilter countries={fetchedCountries} setCountries={setFetchedCountries} />
      <Box
        justifyContent="center"
        width="87%"
        maxW={{ base: '87vw', sm: '80vw', md: '87vw', lg: '87vw', xl: '87vw', '2xl': '65vw' }}
        margin="0 auto"
        mt={10}
        mb={10}
      >
        <Flex
          flexDirection={{ base: 'column', sm: 'column', lg: 'row', xl: 'row' }}
          gap="20"
          flexWrap="wrap"
          justifyContent="space-between"
        >
          <CountryCard countries={fetchedCountries} />
        </Flex>
      </Box>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const json = await response.json();
  return { props: { countries: json as any[] } };
};
export default AllCountries;
