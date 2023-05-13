import { NavBar } from '@/components/utility'
import { Box } from '@chakra-ui/react'
import React from 'react'

interface HomeProps {
    children: any
}
export default function HomeLayout({ children }: HomeProps): JSX.Element {
    return (
        <Box data-scroll-section>
            <NavBar />
            <Box
                px={{ base: '1rem', md: '4rem' }}
                // h='100%'
                // bgImage="url('/bgParralex.jpg')"
                // bgSize='cover'
                // bgAttachment={{ base: 'scroll', md: 'fixed' }}
                // bgRepeat='no-repeat'
                // bgPosition='center'
                // pos='relative'
            >
                {children}
            </Box>
        </Box>

    )
}
