import { ReactNode } from 'react';
import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    Stack,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';
import Image from "next/image"
import { HamburgerIcon } from '@chakra-ui/icons';
import Logo from "public/logo.svg"
import LogoWhite from "public/logoWhite.png"
import { useRouter } from 'next/router'


const Links = [
    { title: 'Work', href: '/#recentWorks' },
    { title: 'About', href: '/#aboutme' },
    { title: 'Contact', href: '/#contactMe' },

]

const NavLink = ({ children, href, onClose }: { children: ReactNode, href: string, onClose?: () => void }) => {
    const route = useRouter()
    const link = "/works/AzuzaGaming"

    return (
        <Link
        px={2}
        py={1}
        rounded={'md'}
            color={route.asPath === link ? 'black' : 'royalWhite'}
            fontWeight={500}
            href={href}
            onClick={onClose}
        >
        {children}
    </Link>

    )

};

export default function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter()
    const href = "/works/AzuzaGaming"

    return (
        <>
            <Box 
                bg={router.asPath === href ? 'secondaryGrey' : 'primary'}
                px={{ base: '1rem', md: '4rem' }} id='top'>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        variant='outline'
                        color='royalGold'
                        size={'md'}
                        icon={<HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                        _hover={{
                            bg: 'none'
                        }}
                    />
                    <HStack spacing={8} alignItems={'center'}>

                        <Box px={{ base: 'none', md: '2rem' }}>
                            <Link href='/'>
                                <Image src={router.asPath === href ? LogoWhite : Logo} alt='logo' loading='lazy' />
                            </Link>
                        </Box>

                    </HStack>
                    <Flex alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link.title} href={link.href ?? '#'} >{link.title}</NavLink>
                            ))}
                        </HStack>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box display={{ md: 'none' }}>
                        <Drawer
                            isOpen={isOpen}
                            placement='left'
                            onClose={onClose}
                        >
                            <DrawerOverlay />
                            <DrawerContent bgColor={router.asPath === href ? 'secondaryGrey' : 'primary'}>
                                <DrawerCloseButton color='royalGold' />
                                <DrawerHeader>
                                    <Link href='/'>
                                        <Image src={Logo} alt='logo' loading='lazy' />
                                    </Link>
                                </DrawerHeader>

                                <DrawerBody>
                                    <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link.title} href={link.href ?? '#'} onClose={onClose}
                                >{link.title}</NavLink>
                            ))}
                                    </Stack>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}