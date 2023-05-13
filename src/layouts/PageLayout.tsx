import { NavBar } from '@/components/utility'
import { Box } from '@chakra-ui/react'
import React from 'react'

interface PageProps {
    children: any
}
export default function PageLayout({ children }: PageProps): JSX.Element {
    return (
        <Box >
            <NavBar />
            <Box px={{ base: '1rem', md: '4rem' }}>
                {children}
            </Box>
        </Box>

    )
}
