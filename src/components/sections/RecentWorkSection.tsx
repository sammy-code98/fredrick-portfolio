import { Box, Text, Divider, HStack, Link } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Button, WorksCard, WorksCarousel } from '../utility';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 


const RecentWork = [
    {
        title: 'ASUZA GAMING',
        description: 'Asuza is an Esport Management platform that specializes in fostering the growth of gamers within and outside of Africa.',
        role: ['UI DESIGN', 'UX DESIGN', 'CONCEPT'],
        serviceType: ['CASE STUDY', 'MOBILE DESIGN', 'BRANDING']
    },
    {
        title: 'VIBE BETA',
        description: 'VIBE BETA is a cutting-edge music app that helps up-and-coming talent get discovered.',
        role: ['UI DESIGN', 'UX DESIGN', 'REDESIGN'],
        serviceType: ['WEB DESIGN ', 'MOBILE DESIGN']
    },
    {
        title: 'WHATSAPP STATUS',
        description: 'AN IMPROVEMENT TO THE WHATSAPP STATUS UI AND A BRAND NEW FEATURE ROLE OUT',
        role: ['UI DESIGN', 'UX DESIGN', 'REDESIGN'],
        serviceType: ['CASE STUDY ', 'MOBILE DESIGN']
    },
    {
        title: 'SLEEPY APP',
        description: 'Sleepy is a product designed to improve the quality of life for individuals with sleep difficulties. ',
        role: ['UI DESIGN', 'UX DESIGN'],
        serviceType: ['CASE STUDY', 'MOBILE DESIGN']
    }
]

export default function RecentWorkSection() {
    // useEffect(() => {
    //     AOS.init();

    // }, [])

    return (
        <Box mt='4rem' py='4rem' as='section' id='recentWorks'>
            <Text color='royalWhite' fontSize='xl'>RECENT WORKS</Text>
            <Box mt='4rem'>
                <Divider />
                <Box mt='3rem'>
                    {RecentWork.map((work) => (
                        <WorksCard
                            key={work.title}
                            description={work.description}
                            role={work.role}
                            serviceType={work.serviceType}
                            title={work.title} />
                    ))}
                </Box>
            </Box>
            <Box display='flex' justifyContent='center'>
                <Button title='MORE OF MY WORKS' />
            </Box>

            <Box as='div'
            // data-aos="fade-zoom-in"
            // data-aos-easing="ease-in-back"
            // data-aos-delay="300"
            // data-aos-offset="0"
            >
                <WorksCarousel />
                <Box display={{ base: 'none', md: 'flex' }}
                    justifyContent='space-between' alignItems='center' pb='2rem' mt={{ base: '1rem', md: '8rem' }} flexWrap='wrap'>
                    <HStack>
                        <Text color='royalWhite' textDecoration='underline'>BEHANCE </Text>
                        <Text color='royalWhite' textDecoration='underline'>DRIBBLE</Text>
                        <Text color='royalWhite' textDecoration='underline'>INSTAGRAM</Text>
                        <Text color='royalWhite' textDecoration='underline'>LINKEDIN</Text>
                    </HStack>

                    <Box>
                        <Link href='/#top'>
                        <Text color='royalGold'>BACK TO TOP</Text>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box >

    )
}
