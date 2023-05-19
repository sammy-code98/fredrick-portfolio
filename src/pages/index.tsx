import Head from "next/head";
import "@fontsource/inter";
import Loadable from "react-loadable";
import { Box, Text, Heading, Link } from '@chakra-ui/react'
import { HomeLayout } from '@/layouts'
import { AboutSection, HeroSection, RecentWorkSection } from '@/components/sections'
import { Button, SocialAccount } from '@/components/utility'
import { socialLinks } from "@/staticData";


export default function Index() {
  return (
    <>
      <Head>
        <title>Precious Fredrick</title>
        <meta
          name="description"
          content="Hello, I am Fred a professional digital designer. I am interested in collaborating with you on your project."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as='div'
        bg="primary">

        <HomeLayout>
          <Box>
            <HeroSection />
            <AboutSection />
            <RecentWorkSection />

            <Box mt={{ base: "1rem", md: "4rem" }} py={{ base: '0.5rem', md: "4rem" }} as="section" id="contactMe" >
              <Text color="royalWhite" fontSize='xl'>CONTACT ME</Text>
              <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" py="4rem">
                <Button title="HAVE A PROJECT IN MIND ?" />
                <Box mt="2rem">
                  <Heading
                    fontWeight={700}
                    fontSize={{ base: "3rem", md: "6rem" }}
                    lineHeight={{ base: "4rem", md: "8.125rem" }}
                    textAlign="center"
                    marginX="auto"
                    color="royalWhite"
                    width={{ base: "100%", md: "60%" }}
                  >
                    LET’S WORK TOGETHER
                  </Heading>
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={{ base: "4", md: "10.625rem" }}
                flexWrap="wrap"
              >
                {socialLinks.map((link) => {
                  return (
                    <Box
                      key={link.title}
                      as="button"
                      fontSize="1.063rem"
                      border="1px"
                      borderRadius="2rem"
                      textColor={"royalWhite"}
                      borderColor={"royalWhite"}
                      py={{ base: "0.4rem", md: "0.8rem" }}
                      px={{ base: "0.4rem", md: "2rem" }}
                    >
                      {link.title}
                    </Box>
                  );
                })}
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              pb="2rem"
              mt={{ base: "1rem", md: "8rem" }}
            >
              <Box>
                <SocialAccount />
              </Box>

              <Box>
                <Link href="/#top">
                  <Text fontSize={{ base: "sm", md: "md" }} color="royalGold">
                    BACK TO TOP
                  </Text>
                </Link>
              </Box>
            </Box>
          </Box>
        </HomeLayout>
      </Box>
    </>
  );
}
