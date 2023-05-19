import { Box, Text, Link } from '@chakra-ui/react'
import React from 'react'
import Star from "public/star.svg"
import Image from 'next/image'
import { aboutCard } from '@/staticData'
import { SocialAccount } from '../utility'


export default function AboutSection() {
    return (
            <Box py='4rem' as='section' id='aboutme'   >
            <Text color='royalWhite' fontSize='xl'>About</Text>
            <Box mt='2rem'
                display='grid'
                gridTemplateColumns={{
                    base: "repeat(1,minmax(0,1fr))",
                    md: "repeat(2, minmax(0, 1fr))",
                }}
                justifyItems='center'
                gap={{ base: '2', md: '8' }}
            >
                <Box>
                </Box>
                <Box mt={{ base: '0.5rem', md: '2rem' }} pos='relative' >
                    <Box
                        pos='absolute'
                        width='245px'
                        height="245px"
                        borderRadius='50%'
                        background='linear-gradient(91.26deg, rgba(232, 205, 79, 0.6) 28.98%, rgba(255, 255, 255, 0.6) 58.68%)'
                        filter='blur(142.917px)'
                        left={{ base: '2rem', md: '28rem' }}
                        top='-10rem'
                    ></Box>
                    <Box ml={{ base: '0', md: '-8rem' }} display={{ base: 'none', md: 'flex' }}>
                        <Image src={Star} alt='star' loading='lazy' />
                    </Box>
                    <Text color='royalWhite' fontSize='2xl' px={{ base: 'none', md: '2rem' }}>
                        I am excited about the opportunity to use my passion for digital design to contribute to
                        the development and growth of innovative projects. Solving problems through creative and
                        user-centered design is what really gets me energized and enthusiastic.
                    </Text>
                </Box>
            </Box>

            <Box mt='12rem' >
                <Box display='grid'
                    gridTemplateColumns={{
                        base: "repeat(1,minmax(0,1fr))",
                        md: "repeat(3, minmax(0, 1fr))",
                    }}
                    justifyItems='center'
                    gap={8}
                >
                    {aboutCard.map((card) => (
                        <Box key={card.title}>
                            <Text color='royalGold'>{card.title}</Text>
                            <Text color='royalWhite' mt='0.5rem'>
                                {card.description}
                            </Text>
                        </Box>

                    ))}

                </Box>

            </Box>

            <Box display={{ base: 'none', md: 'flex' }}
                justifyContent='space-between' alignItems='center' mt={{ base: '1rem', md: '8rem' }} flexWrap='wrap'>
                <SocialAccount />
                <Box>
                    <Link href='/#top'>
                    <Text color='royalWhite'>BACK TO TOP</Text>
                    </Link>
                </Box>

            </Box>
        </Box>

    )
}
