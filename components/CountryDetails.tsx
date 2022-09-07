import React from 'react';

interface Props {
  countryData: any;
}

const CountryDetails: React.FC<Props> = ({ countryData }) => {
  return <h1>{countryData?.name?.common}</h1>;
};

export default CountryDetails;
