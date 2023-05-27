import React from 'react'
import { Box, HStack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function SocialAccount() {
    const router = useRouter()
    const href = "/works/AzuzaGaming"

    return (
        <Box>
            <HStack display={{ base: 'none', md: 'flex' }}>
                <Text color={router.asPath === href ? 'black' : 'royalWhite'} textDecoration='underline'>BEHANCE </Text>
                <Text color={router.asPath === href ? 'black' : 'royalWhite'} textDecoration='underline'>DRIBBLE</Text>
                <Text color={router.asPath === href ? 'black' : 'royalWhite'} textDecoration='underline'>INSTAGRAM</Text>
                <Text color={router.asPath === href ? 'black' : 'royalWhite'} textDecoration='underline'>LINKEDIN</Text>
            </HStack>
        </Box>
    )
}
