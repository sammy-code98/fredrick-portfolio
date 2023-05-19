import React from 'react'
import { Box, HStack, Text } from '@chakra-ui/react'
export default function SocialAccount() {
    return (
        <Box>
            <HStack display={{ base: 'none', md: 'flex' }}>
                <Text color='royalWhite' textDecoration='underline'>BEHANCE </Text>
                <Text color='royalWhite' textDecoration='underline'>DRIBBLE</Text>
                <Text color='royalWhite' textDecoration='underline'>INSTAGRAM</Text>
                <Text color='royalWhite' textDecoration='underline'>LINKEDIN</Text>
            </HStack>
        </Box>
    )
}
