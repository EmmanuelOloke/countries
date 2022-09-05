import React, { Dispatch, MouseEvent, SetStateAction, useState } from 'react';
import { SearchIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, HStack, Input, useToast } from '@chakra-ui/react';

interface Props {
  countries: any[];
  setCountries: Dispatch<SetStateAction<any[]>>;
}

const Search: React.FC<Props> = ({ countries, setCountries }) => {
  const [inputContent, setInputContent] = useState('');
  const toast = useToast();

  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault();

    if (!inputContent) {
      toast({
        title: 'Please enter a country name',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
      return;
    }

    const response = await fetch(`https://restcountries.com/v3.1/name/${inputContent}`);
    const searchCountries = await response.json();

    setCountries(searchCountries);
  };

  return (
    <HStack
      width="25%"
      boxShadow="base"
      alignItems="center"
      p="4"
      justifyContent="space-evenly"
      borderRadius="md"
    >
      <SearchIcon color="gray.500" ml={3} mr={2} />
      <Input
        variant="unstyled"
        placeholder="Search for a country..."
        fontSize="sm"
        value={inputContent}
        onChange={(e) => setInputContent(e.target.value)}
      />
      <Button onClick={(e) => handleSubmit(e)}>
        <ArrowForwardIcon color="gray.500" cursor="pointer" />
      </Button>
    </HStack>
  );
};

export default Search;
