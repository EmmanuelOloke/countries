import React, { Dispatch, SetStateAction, useState } from 'react';
import { SearchIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, HStack, Input, useToast } from '@chakra-ui/react';

interface Props {
  countries: any[];
  setCountries: Dispatch<SetStateAction<any[]>>;
}

const Search: React.FC<Props> = ({ countries, setCountries }) => {
  const [inputContent, setInputContent] = useState('');
  const toast = useToast();

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
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

    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${inputContent}`);
      const searchCountries = await response.json();

      if (response.status !== 200) {
        toast({
          title: 'Country Not Found',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top',
        });
        return;
      } else {
        setCountries(searchCountries);
      }
    } catch (error) {
      console.log('Something went wrong', error);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <HStack
        width={{ lg: '22em', xl: '29em', '2xl': '38em' }}
        boxShadow="base"
        alignItems="center"
        p="1"
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
        <Button type="submit">
          <ArrowForwardIcon color="gray.500" cursor="pointer" />
        </Button>
      </HStack>
    </form>
  );
};

export default Search;
