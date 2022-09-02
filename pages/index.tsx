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

function Page({ countries }: Props) {
  return (
    <>
      <Header />
      <SearchAndFilter />
      <Box
        justifyContent="center"
        width="87%"
        maxW={{ base: '87vw', sm: '80vw', lg: '87vw', xl: '87vw' }}
        margin="0 auto"
        mt={10}
      >
        <Flex
          flexDirection="row"
          gap="20"
          flexWrap="wrap"
          maxW={{ base: '87vw', sm: '80vw', lg: '100vw', xl: '100vw' }}
        >
          <CountryCard countries={countries} />
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
export default Page;
