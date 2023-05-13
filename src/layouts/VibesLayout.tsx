import { NavBar } from '@/components/utility'
import { Box } from '@chakra-ui/react'
import React from 'react'

interface PageProps {
    children: any
}
export default function VibeLayout({ children }: PageProps): JSX.Element {
    return (
        <Box>
            <NavBar />
            <Box
            >
                {children}
            </Box>
        </Box>

    )
}
