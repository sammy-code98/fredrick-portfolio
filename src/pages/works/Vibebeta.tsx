import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { VibeLayout } from '@/layouts'
import Link from 'next/link'
import { ProjectDetail, VibesCarousel, SocialAccount } from '@/components/utility'
import Image from 'next/image'
import oldVibes from "public/Vibes/oldVibes.png"
import newVibes from "public/Vibes/newVibes.png"
import vibe from "public/Vibes/replace.png"
import musicEverday from "public/Vibes/musicEveryday.png"
import mobileMusic from "public/Vibes/mobileDesign.png"

export default function Vibebeta() {
    return (
        <Box bg='primary' >
            <VibeLayout>
                <Box mt='4rem'
                >
                    <Box px={{ base: '1rem', md: '4rem' }}
                    >
                    <Box display='flex' gap={6} color='royalWhite'>
                        <Link href="#">
                            <Text as='span' fontSize={{ base: 'sm', md: 'md' }}>
                                PREVIOUS PROJECT
                            </Text></Link>
                        <Link href="#"> <Text as='span' fontSize={{ base: 'sm', md: 'md' }}>NEXT PROJECT</Text></Link>
                    </Box>
                    <Box mt='2rem'>

                        <ProjectDetail title={'VIBE BETA'}
                            description={'VIBE BETA is a cutting-edge music app that helps up-and-coming talent get discovered.'}
                            role={['UI DESIGN', 'UX DESIGN', 'REDESIGN']}
                            serviceType={['WEB DESIGN ', 'MOBILE DESIGN']} />
                    </Box>
                    <Box>
                            <Box display='flex' justifyContent='center' py='2rem' flexWrap='wrap'>
                            <Image src={oldVibes} alt={'old vibe image'} loading='lazy' />
                            <Image src={newVibes} alt={'new vibe image'} loading='lazy' />
                        </Box>

                        <Box mt={{ base: '1rem', md: '3rem' }} width={{ base: 'none', md: '500px' }}
                            ml={{ base: '0', md: '56rem' }}
                        >
                            <Text color='royalWhite'>PROJECT BRIEFING</Text>
                            <Text mb='0.5rem' color='royalWhite'>VIBE BETA is a music app designed to provide a platform for young
                                and aspiring musicians to get discovered. As a member of the design team, I was tasked with collaborating with a group of
                                innovative individuals to create a product that met the needs of our target users.</Text>
                            <Text color='royalWhite'>CLIENT: IDEAL SYNTAX </Text>
                            <Text color='royalWhite'>LOCATION: NIGERIA </Text>
                        </Box>
                    </Box>
                    </Box>

                    <Box display='flex' py='2rem' flexWrap='wrap' mt='3rem'>
                        <Image src={vibe} alt='vibe' loading='lazy' />
                    </Box>

                    <Box
                        mt={{ base: '1rem', md: '3rem' }}
                        width={{ base: 'none', md: '500px' }} py='2rem'
                        px={{ base: '1rem', md: '4rem' }}

                    >
                        <Text color='royalGold' fontSize='xl' fontWeight='bold'>GOAL</Text>
                        <Text color='royalWhite'>Vibes Beta aims to increase the visibility of local artists through a
                            user-friendly platform that offers features similar to Spotify.
                            The platform also provides interactive and cost-effective tools for emerging musicians to launch their careers.
                            By providing a platform to showcase their work and connect
                            with a wider audience, Vibes Beta supports and empowers the growth and success of local artists.
                        </Text>
                    </Box>
                    <Box py='2rem' display='flex' justifyContent='center'>
                        <Image src={musicEverday} alt='music' loading='lazy' />
                    </Box>
                    <Box mt={{ base: '1rem', md: '2rem' }} width={{ base: 'none', md: '500px' }}
                        ml={{ base: '0', md: '56rem' }} py='2rem' px='1rem'
                    >
                        <Text color='royalGold' fontSize='xl' fontWeight='bold'>MY WORK PROCESS</Text>
                        <Text mb='0.5rem' color='royalWhite'>
                            My design process for Vibe Beta began with a thorough competitive analysis of top competitors in the industry.
                            This research allowed me to identify areas for improvement and ultimately inform my design solution. From there,
                            I proposed a rebranding of the app to enhance the overall user experience and provide the best outcome possible for the users.
                            The rebranding involved changes in visual identity, and the overall layout and navigation of the app.
                            This was the foundation for the new design that was to come, which was a combination of user research, testing, and iteration.
                        </Text>
                    </Box>

                    <Box py='2rem' px={{ base: '1rem', md: '4rem' }}
                    >
                        <Text color='royalGold' fontSize='2xl' fontWeight='bold'>DESIGN SOLUTIONS</Text>
                        <VibesCarousel />
                        <Box
                            mt={{ base: '1rem', md: '2rem' }}
                            width={{ base: 'none', md: '500px' }}
                        >
                            <Text color='royalWhite'>
                                The design solution for Vibe Beta was developed through competitive analysis and user persona research. This research was conducted by talking with artists and analyzing the problems of the biggest competitors in the industry, such as Soundcloud and Spotify.
                            </Text>
                            <Link href="https://excited-candytuft-c30.notion.site/Vibes-Beta-5af7f032a8184046aa11f34973bcd198" >
                                <Text as='span' color='royalGold'>
                                    View competitive analysis on Notion
                                </Text>
                            </Link>
                        </Box>
                    </Box>
                    <Box py='2rem' display='flex' justifyContent='center'>
                        <Image src={mobileMusic} alt='mobileMusic' />
                    </Box>

                    <Box>
                        <Box display='flex' justifyContent='space-between' alignItems='center' px='2rem' pb='2rem'
                            mt={{ base: '1rem', md: '8rem' }} flexWrap='wrap'>
                            <SocialAccount />
                            <Box display={{ base: 'none', md: 'flex' }} gap={4} alignItems='center'>
                                <Text color='royalWhite'>PREVIOUS PROJECT </Text>
                                <Text color='royalWhite'>NEXT PROJECT </Text>
                            </Box>
                            <Box>
                                <Link href="#top">
                                <Text color='royalGold' fontSize={{ base: 'sm', md: 'md' }}>BACK TO TOP</Text>
                                </Link>
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </VibeLayout>
        </Box>
    )
}
