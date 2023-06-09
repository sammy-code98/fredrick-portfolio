import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { PageLayout } from '@/layouts'
import Image from 'next/image'
import Link from 'next/link'
import { ProjectDetail, SocialAccount } from '@/components/utility'
import Azuza from "public/Azuza/Azuza.png"
import azuzaGraphics from "public/Azuza/azuzaGraphics.png"
import azuzaBg from "public/Azuza/azuzacommunity.png"
import process_1 from "public/Azuza/process_1.png"
import process_2 from "public/Azuza/process_2.png"
import azuzaLogo from "public/Azuza/azuzaLogo.png"
import design_1 from "public/Azuza/desing_1.png"
import design_2 from "public/Azuza/desing_2.png"


export default function AzuzaGaming() {
    return (
        <Box bg='secondaryGrey' >
            <PageLayout>
                <Box mt='4rem' px={{ base: '0.2rem', md: '2rem' }}>
                    <Box display='flex' gap={6} color='black'>
                        <Link href="#">
                            <Text as='span' fontSize={{ base: 'sm', md: 'md' }}>
                                PREVIOUS PROJECT
                            </Text></Link>
                        <Link href="#"> <Text as='span' fontSize={{ base: 'sm', md: 'md' }}>NEXT PROJECT</Text></Link>
                    </Box>
                    <Box mt='2rem'>
                        <ProjectDetail title={'ASUZA GAMING'}
                            description={'Asuza is an Esport Management platform that specializes in fostering the growth of gamers within and outside of Africa.'}
                            role={['UI DESIGN', 'UX DESIGN', 'CONCEPT']}
                            serviceType={['WEB DESIGN ', 'MOBILE DESIGN', 'BRANDING']} />
                    </Box>
                    <Box py='1rem' display='flex' justifyContent='center'>
                        <Image src={Azuza} alt='azuza' loading='lazy' />
                    </Box>

                    <Box mt={{ base: '1rem', md: '3rem' }} width={{ base: 'none', md: '500px' }}
                        ml={{ base: '0', md: '56rem' }}
                    >
                        <Text color='black'>PROJECT BRIEFING</Text>
                        <Text mb='0.5rem' color='black'>
                            I have been assigned to the ASUZA project and will be working alongside a team of developers, marketers, and designers to create a tournament platform for gamers.
                            My responsibilities will include collaborating with team members to ensure the successful completion of the project.
                        </Text>
                        <Text color='black'>CLIENT: ASUSZA MANAGEMENT</Text>
                        <Text color='black'>LOCATION: NIGERIA</Text>
                    </Box>

                    <Box py='4rem' display='flex' justifyContent='center'>
                        <Image src={azuzaGraphics} alt='azuza' loading='lazy' />
                    </Box>
                    <Box width={{ base: 'none', md: '500px' }} py='2rem'
                    >
                        <Text color='black' fontSize='xl' fontWeight='bold'>CHALLENGES</Text>
                        <Text color='black'>
                            One of the greatest challenges I faced while working on Asuza was designing a platform
                            that was seamless and intuitive for both gamers and tournament organizers to use.
                            Despite the innovative nature of Asuza, it was important to ensure that the design was both visually appealing and aligned with the brand's core values of community,
                            friendship, and healthy competition.
                        </Text>
                    </Box>
                    <Box py='4rem' display='flex' justifyContent='center'>
                        <Image src={azuzaBg} alt='azuza' loading='lazy' />
                    </Box>

                    <Box
                        backgroundImage="url('public/Azuza/ring.png')"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        py='3rem'
                        height='100%'
                    >
                        <Box mt='1rem' width={{ base: 'none', md: '500px' }}
                        ml={{ base: '0', md: '56rem' }} py='2rem'
                    >
                        <Text color='black' fontSize='xl' fontWeight='bold'>GOAL</Text>
                        <Text mb='0.5rem' color='black'>
                            As a designer, my primary objectives for the Asuza platform were to create a unique
                            and user-friendly experience for finding tournaments and connecting with favorite gaming communities.
                            My goal was to drive user acquisition and position Asuza as a leader in the African esports management market. Through careful planning and attention to detail,
                            I worked to achieve these objectives and enhance the overall value of the platform for all users
                        </Text>
                    </Box>

                        <Box width={{ base: 'none', md: '500px' }} py='2rem'>
                            <Text color='black' fontSize='xl' fontWeight='bold'>MY WORK PROCESS</Text>
                            <Text color='black'>
                                The design process for Asuza began with the creation of a mood board to establish the desired brand identity and user experience. I developed two themes for the site - one with a neon tech aesthetic and the other with an African community focus. After presenting these options to the Asuza team and receiving feedback, we ultimately decided that the neon tech theme best reflected the community we were building.
                                This decision was made through careful consideration and collaboration with the team.
                            </Text>
                        </Box>
                    </Box>



                    <Box py='1rem' mt='2rem' display='flex' justifyContent='center' alignItems='center' gap={2} flexWrap='wrap'>
                        <Image src={process_1} alt='azuza' loading='lazy' />
                        <Image src={process_2} alt='azuza' loading='lazy' />

                    </Box>
                    <Box py='1rem'>
                        <Text fontSize='xl' textAlign={{ base: 'left', md: 'center' }}>THE LOGO</Text>
                        <Box display='flex' mt='4rem' justifyContent='space-around' alignItems='center' flexWrap='wrap'>
                            <Image src={azuzaLogo} alt='azuza' loading='lazy' />
                            <Box width={{ base: 'none', md: '600px' }} mt='2rem'>
                                <Text>
                                    The logo for Asuza was designed by our in-house graphics designer,
                                    and I was responsible for developing the logo's use cases within the app. Through careful planning and attention to detail,
                                    I worked to ensure that the logo was integrated seamlessly and effectively into the overall design of the platform.
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box py='2rem'>
                        <Text>DESIGN SOLUTION</Text>
                        <Box mt='1rem'>
                            <Box display='flex' flexDirection='column' justifyContent='center' py='2rem'>
                                <Box>
                                    <Image src={design_1} alt='azuza' loading='lazy' />
                                </Box>
                                <Box mt='1rem'>
                                    <Image src={design_2} alt='azuza' loading='lazy' />
                                </Box>

                            </Box>


                        </Box>
                        <Box
                            backgroundImage="url('public/Azuza/ring_2.png')"
                            backgroundPosition="center"
                            backgroundRepeat="no-repeat"
                            py='3rem'
                            height='100%'
                        >
                            <Box width={{ base: 'none', md: '600px' }} mt='3rem'>
                                <Text>
                                    Through a thorough brainstorming process and competitive analysis, I was able to generate design solutions for Asuza that incorporated feedback from the team. These solutions included the implementation of a campaign feature, a blog and news tab, and other features that helped to enhance the user experience and set Asuza apart in
                                    the market. My goal was to create a platform that was intuitive, engaging, and effective for all users.
                                </Text>
                            </Box>

                            <Box mt='1rem' width={{ base: 'none', md: '500px' }}
                            ml={{ base: '0', md: '56rem' }} py='2rem'
                        >
                            <Text mb='0.5rem' color='black'>
                                Gamification of the Asuza platform was a key strategy for increasing user engagement. This was achieved through the implementation of features that made it easy for regular users to host tournaments and promote them within and outside of the platform. Additionally, we introduced a reward system to increase user curiosity and drive participation. These efforts helped to make Asuza a more dynamic and engaging experience for all users.
                            </Text>
                        </Box>

                        </Box>


                    </Box>

                    <Box>
                        <Box display='flex' justifyContent='space-between' alignItems='center' pb='2rem'
                            mt={{ base: '1rem', md: '8rem' }} flexWrap='wrap'>
                            <SocialAccount />
                            <Box display={{ base: 'none', md: 'flex' }} gap={4} alignItems='center'>
                                <Text color='black'>PREVIOUS PROJECT </Text>
                                <Text color='black'>NEXT PROJECT </Text>
                            </Box>
                            <Box>
                                <Link href='#top'>
                                    <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight='medium' color='royalGold'>BACK TO TOP</Text>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </PageLayout>

        </Box>
    )
}
