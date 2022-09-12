import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { ArrowBackIcon } from '@chakra-ui/icons';

const Back = () => {
  return (
    <Flex justifyContent="center">
      <Flex
        mt={58}
        w={{ base: '87vw', sm: '80vw', md: '80vw', lg: '88vw', xl: '87vw', '2xl': '65vw' }}
      >
        <Button
          leftIcon={<ArrowBackIcon />}
          variant="outline"
          pl={5}
          pr={10}
          boxShadow="md"
          onClick={() => history.back()}
        >
          Back
        </Button>
      </Flex>
    </Flex>
  );
};

export default Back;
