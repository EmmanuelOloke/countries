import React, { MouseEvent, useState } from 'react';
import { SearchIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, HStack, Input } from '@chakra-ui/react';

export default function Search() {
  const [inputContent, setInputContent] = useState('');

  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault();

    // interface Country {
    //   name?: object;
    //   common?: string;
    // }

    if (!inputContent) {
      console.log('enter something abeg');
    }

    const response = await fetch(`https://restcountries.com/v3.1/name/${inputContent}`);
    const countries = await response.json();
    console.log(countries[0].name.common);
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
}
