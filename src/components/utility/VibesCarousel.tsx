import React, { useState, useRef } from 'react'
import { Box } from '@chakra-ui/react'
import Slider from "react-slick";
import Image from 'next/image';
import design from "public/Vibes/mobileDesign.png"
import replace from "public/Vibes/musicEveryday.png"
import desing_soln from "public/Vibes/design_soln.png"

import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';


const PrevBtn = ({ onClick }: { onClick: React.MouseEventHandler<HTMLElement> }) => {

    return (
        <Box as='button' p='0.5rem' borderRadius='full' border='1px' borderColor='royalWhite' onClick={onClick} >
            <ArrowBackIcon color='royalGold' />
        </Box>
    )
}

const NextBtn = ({ onClick }: { onClick: React.MouseEventHandler<HTMLElement> }) => {
    return (
        <Box as='button' p='0.5rem' borderRadius='full' border='1px' borderColor='royalWhite' onClick={onClick}>
            <ArrowForwardIcon color='royalGold' />
        </Box>
    )
}

export default function VibesCarousel() {
    const sliderRef = useRef<any>(null)


    const settings = {
        dots: true,
        infinte: true,
        centerMode: true,
        centerPadding: "150px",
        arrows: false,
        speed: 500,
        slideToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "10px",

                }
            },
        ],


    }
    return (
        <Box mt='4rem'>
            <Slider {...settings} ref={sliderRef}>
                <Image src={desing_soln} alt='designs' />
                <Image src={design} alt='designs' />
                <Image src={replace} alt='designs' />
            </Slider>
            <Box mt='1rem' display='flex' gap={4} justifyContent='flex-end'>
                <PrevBtn onClick={sliderRef?.current?.slickPrev} />
                <NextBtn onClick={sliderRef?.current?.slickNext} />
            </Box>
        </Box>
    )
}



