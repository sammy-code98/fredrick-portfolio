import React, { useEffect, useRef } from 'react';
import { Box, Text, Divider, Link } from "@chakra-ui/react";
import { Button, WorksCard, WorksCarousel, SocialAccount } from "../utility";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { RecentWork } from '@/staticData';



export default function RecentWorkSection() {

    const slidephotosRef = useRef<HTMLDivElement>(null);
    const asuzaRef = useRef<HTMLDivElement>(null);
    const vibeRef = useRef<HTMLDivElement>(null);
    const whatsappRef = useRef<HTMLDivElement>(null);
    const sleepyRef = useRef<HTMLDivElement>(null);
    const slidephotoRef = useRef<HTMLDivElement>(null);

    const handleAsuzaMouseMove = () => {
        const slidephotos = slidephotosRef.current;
        const asuza = asuzaRef.current;
        if (slidephotos) {
            slidephotos.style.marginTop = '0px';
        }
        if (asuza) {
            asuza.style.color = 'rgb(177, 177, 177)';
        }
    };

    const handleAsuzaMouseLeave = () => {
        const asuza = asuzaRef.current;
        if (asuza) {
            asuza.style.color = 'initial';
        }
    };

    const handleVibeMouseMove = () => {
        const slidephotos = slidephotosRef.current;
        const vibe = vibeRef.current;
        if (slidephotos) {
            slidephotos.style.marginTop = '-120%';
        }
        if (vibe) {
            vibe.style.color = 'rgb(177, 177, 177)';
        }
    };

    const handleVibeMouseLeave = () => {
        const vibe = vibeRef.current;
        if (vibe) {
            vibe.style.color = 'initial';
        }
    };

    const handleWhatsappMouseMove = () => {
        const slidephotos = slidephotosRef.current;
        const whatsapp = whatsappRef.current;
        if (slidephotos) {
            slidephotos.style.marginTop = '-240%';
        }
        if (whatsapp) {
            whatsapp.style.color = 'rgb(177, 177, 177)';
        }
    };

    const handleWhatsappMouseLeave = () => {
        const whatsapp = whatsappRef.current;
        if (whatsapp) {
            whatsapp.style.color = 'initial';
        }
    };

    const handleSleepysoMouseMove = () => {
        const slidephotos = slidephotosRef.current;
        const sleepy = sleepyRef.current;
        if (slidephotos) {
            slidephotos.style.marginTop = '-360%';
        }
        if (sleepy) {
            sleepy.style.color = 'rgb(177, 177, 177)';
        }
    };

    const handleSleepysoMouseLeave = () => {
        const sleepy = sleepyRef.current;
        if (sleepy) {
            sleepy.style.color = 'initial';
        }
    };

    const handleEffMouseMove = () => {
        const slidephoto = slidephotoRef.current;
        if (slidephoto) {
            slidephoto.style.display = 'initial';
            slidephoto.style.opacity = '1';
            slidephoto.style.scale = '1';
        }
    };

    const handleEffMouseLeave = () => {
        const slidephoto = slidephotoRef.current;
        if (slidephoto) {
            slidephoto.style.display = 'none';
            slidephoto.style.opacity = '1';
            slidephoto.style.scale = '0';
        }
    };


    useEffect(() => {
        const handleSlidephotoMouseMove = (event: MouseEvent) => {
            const slidephoto = slidephotoRef.current;
            if (slidephoto) {
                slidephoto.style.top = `${event.clientY}px`;
                slidephoto.style.left = `${event.clientX}px`;
                slidephoto.style.transform = `translate(${-event.clientX * 0.21}px, ${-event.clientY * 0.7}px)`;
                slidephoto.style.cursor = 'pointer';
            }
        };

        window.addEventListener('mousemove', handleSlidephotoMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleSlidephotoMouseMove);
        };
    }, []);

    const mouseAction: {
        [key: string]: {
            onMouseMove: () => void,
            onMouseLeave: () => void
        }
    } = {
        'asuza': {
            onMouseMove: handleAsuzaMouseMove,
            onMouseLeave: handleAsuzaMouseLeave
        },
        'vibe': {
            onMouseMove: handleVibeMouseMove,
            onMouseLeave: handleVibeMouseLeave
        },
        'whatsapp': {
            onMouseMove: handleWhatsappMouseMove,
            onMouseLeave: handleWhatsappMouseLeave
        },
        'sleepy': {
            onMouseMove: handleSleepysoMouseMove,
            onMouseLeave: handleSleepysoMouseLeave
        },
    }

    return (
        <Box>
            <Box id="slidephoto" ref={slidephotoRef}>
                <div id="slidephotos">
                    <div className="photu"></div>
                    <div className="photu"></div>
                    <div className="photu"></div>
                    <div className="photu"></div>
                </div>
                <div id="view">
                    <h1>View</h1>
                </div>
            </Box>
            <Box mt="4rem" py="4rem" as="section" id="recentWorks">
                <Text color="royalWhite" fontSize="xl">
                    RECENT WORKS
                </Text>
                <Box mt="4rem">
                    <Divider />
                    <Box mt="3rem" id="eff" onMouseMove={handleEffMouseMove} onMouseLeave={handleEffMouseLeave}>
                        {RecentWork.map((work) => (
                            <Box id={work.id} key={work.title} onMouseMove={mouseAction[work.id].onMouseMove} onMouseLeave={mouseAction[work.id].onMouseLeave}>
                                <WorksCard
                                    description={work.description}
                                    role={work.role}
                                    serviceType={work.serviceType}
                                    title={work.title}
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Button title="MORE OF MY WORKS" />
                </Box>

                <Box
                    as="div"
                // data-aos="fade-zoom-in"
                // data-aos-easing="ease-in-back"
                // data-aos-delay="300"
                // data-aos-offset="0"
                >
                    <WorksCarousel />
                    <Box
                        display={{ base: "none", md: "flex" }}
                        justifyContent="space-between"
                        alignItems="center"
                        pb="2rem"
                        mt={{ base: "1rem", md: "8rem" }}
                        flexWrap="wrap"
                    >
                        <SocialAccount />
                        <Box>
                            <Link href="/#top">
                                <Text color="royalGold">BACK TO TOP</Text>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
