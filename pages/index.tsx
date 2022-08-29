import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Flex, Text } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Flex justifyContent="space-between">
        <h1>Where in the world?</h1>
        <Text>
          Dark Mode
        </Text>
      </Flex>

    </div>
  )
}

export default Home
