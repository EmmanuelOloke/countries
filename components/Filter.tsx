import React from 'react'
import {Box} from '@chakra-ui/react';
import {Select} from "chakra-react-select";

export default function Filter() {
    const options = [
        { value: 'africa', label: 'Africa' },
        { value: 'america', label: 'America' },
        { value: 'asia', label: 'Asia' },
        { value: 'europe', label: 'Europe' },
        { value: 'oceania', label: 'Oceania' }
      ]

    return (
        <Box w="250px">
            <Select size="lg" placeholder="Filter by Region" focusBorderColor='none' options={options}/>
        </Box>
    )
}
