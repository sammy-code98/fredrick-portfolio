import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import { firstRowImages, secondRowImages } from '../../staticData/index';

interface ImageCardProp {
    src: string
    bg: string
    title: string
}

const sliderImageSty = {
    display: 'flex',
    justifyContent: 'center',
    width: "100%",
    height: { base: "177.15px", md: "27.625rem" },
    margin: 'auto',
    padding: {
        base: '0.5rem', md: '0.8rem'
    }
}
export default function WorksCarousel() {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 10000,
        nextArrow: <></>,
        prevArrow: <></>,
        autoplay: true,
        autoplaySpeed: 500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
        ]
    }
    const secondSettings = {
        rtl: true,
        ...settings
    }
    return (
        <Box py='6rem' >
            <Slider {...settings}>
                {firstRowImages.map((work) => (
                    <ImageCard key={work.id} title={work.title} bg={work.bg} src={work.src} />
                ))}
            </Slider>

            <Slider {...secondSettings}>
                {secondRowImages.map((work) => (
                    <SecondImageCard key={work.id} title={work.title} src={work.src} bg={work.bg} />
                ))}
            </Slider>
        </Box>
    )
}


const ImageCard = ({ src, bg, title }: ImageCardProp) => {
    return (
        <Box m='1rem' bg={bg} p='0.5rem'>
            <Box
                position="relative"
                alignItems="center"
                {...sliderImageSty}
            >
                <Image fill src={src} alt={title} />
            </Box>
        </Box>
    )
}

const SecondImageCard = ({ src, bg, title }: ImageCardProp) => {
    return (
        <Box m='1rem' bg={bg} p='0.5rem'>
            <Box
                position="relative"
                {...sliderImageSty}
            >
                <Image fill src={src} alt={title} />
            </Box>
        </Box>
    )
}