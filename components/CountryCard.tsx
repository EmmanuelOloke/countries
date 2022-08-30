import React from 'react';
import {Flex, Box, Text} from '@chakra-ui/react';
import Image from 'next/image';



export default function CountryCard () {

    return (
        <Box flexDirection="column" boxShadow="md" rounded="md" width="17%">
            <Image height={140} width={200} layout="responsive" src="https://flagcdn.com/w320/de.png" alt="country image" />

            <Box p={5}>
                <Text fontWeight="bold" mb="10px">Nigeria</Text>
                <Flex flexDirection="row" flexWrap="wrap" mb="1">Population: <Text color="gray.500" ml="1">206,139,587</Text></Flex>
                <Flex flexDirection="row" mb="1">Region: <Text color="gray.500" ml="1">Africa</Text></Flex>
                <Flex flexDirection="row" mb="5">Capital: <Text color="gray.500" ml="1">Abuja</Text></Flex>
            </Box>
        </Box>
    )
}


