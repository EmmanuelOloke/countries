import React, { Dispatch, SetStateAction } from 'react';
import { Box } from '@chakra-ui/react';
import { Select, SingleValue } from 'chakra-react-select';

interface Props {
  countries: any[];
  setCountries: Dispatch<SetStateAction<any[]>>;
}

const Filter: React.FC<Props> = ({ countries, setCountries }) => {
  const options = [
    { value: 'africa', label: 'Africa' },
    { value: 'america', label: 'America' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'oceania', label: 'Oceania' },
  ];

  const handleSelectChange = async (data: SingleValue<{ value: string; label: string }>) => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/region/${data?.value}`);
      const filteredCountries = await response.json();

      setCountries(filteredCountries);
    } catch (error) {
      console.log('Something went wrong', error);
    }
  };

  return (
    <Box w="250px">
      <Select
        size="lg"
        placeholder="Filter by Region"
        focusBorderColor="none"
        options={options}
        onChange={(data) => handleSelectChange(data)}
      />
    </Box>
  );
};

export default Filter;
