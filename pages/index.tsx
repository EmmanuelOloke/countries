import { useState } from 'react';
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Flex, Text } from '@chakra-ui/react';
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
      <div className={styles.container}>
        <SearchAndFilter />
        <CountryCard countries={countries} />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const json = await response.json();
  return { props: { countries: json as any[] } };
};
export default Page;
