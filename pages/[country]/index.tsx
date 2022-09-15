import React from 'react';
import { GetServerSideProps } from 'next';
import Header from '../../components/Header';
import Back from '../../components/Back';
import CountryDetails from '../../components/CountryDetails';

type Props = {
  countryData: object;
};

function Country({ countryData }: Props) {
  return (
    <>
      <Header />
      <Back />
      <CountryDetails countryData={countryData} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const countryName = context?.params?.country;
  const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
  const countryData = await response.json();

  return { props: { countryData: countryData[0] as any } };
};

export default Country;
