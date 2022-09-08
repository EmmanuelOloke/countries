import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { ArrowBackIcon } from '@chakra-ui/icons';

const Back = () => {
  return (
    <Flex justifyContent="center">
      <Flex mt={58} w="87%">
        <Button leftIcon={<ArrowBackIcon />} variant="outline" pl={5} pr={10} boxShadow="md">
          Back
        </Button>
      </Flex>
    </Flex>
  );
};

export default Back;
