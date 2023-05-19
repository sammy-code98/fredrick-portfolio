import { Box, Heading, Text, Link } from '@chakra-ui/react'
import React from 'react'
import { ScrollButton, SocialAccount } from '../utility'


export default function HeroSection() {
    return (
            <Box h='80vh'>
            <Box paddingX={{ base: "none", md: "4rem" }}>
                <Box
                    display="flex"
                    gap={{ base: '2', md: '0' }}
                    mt={{ base: '2rem', md: '8rem' }}
                >
                    <Box width={{ base: '100%', md: "65%", lg: '100%' }} >
                        <Heading color='royalWhite' fontSize={{ base: '3rem', sm: "4rem", md: '8rem' }} lineHeight={{ base: "4.125rem", md: '8.125rem' }}>
                            Precious Ifeanyi   Fredrick
                        </Heading>
                    </Box>
                    <Box></Box>
                </Box>
                <Box display="flex"
                    justifyContent="flex-end"
                    gap={{ base: '2', md: '0' }}
                    mt={{ base: '2rem', md: '-2rem' }}>

                    <Box width={{ base: '100%', md: '25.938rem' }}>
                        <Text color='royalWhite' fontSize='1.563rem' fontWeight={400}>
                            Digital Designer currently based in Nigeria
                        </Text>
                        <Text color='royalWhite' mt='1.25rem' >
                            Hello, I am Fred a professional digital designer. I am interested in collaborating with you on your project.
                        </Text>
                        <Box mt='2rem' display='flex' justifyContent={{ base: 'center', md: 'start' }}>
                            <Link href='/#aboutme'>
                                <ScrollButton title='SCROLL TO DISCOVER' icon='icon' />

                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box display={{ base: 'block', md: 'flex' }}
                justifyContent='space-between' alignItems='center' mt={{ base: '2rem', md: '8rem' }} >
                <SocialAccount />
                <Box display='flex' justifyContent='flex-end'  >
                    <Text textAlign='right' color='royalWhite'>Ⓒ 2023</Text>
                </Box>

            </Box>
        </Box >


    )
}
