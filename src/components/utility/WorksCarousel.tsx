import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
const firstRowImages = [
    { id: 1, title: "", src: '/work_1.png', bg: "#FFF3EC" },
    { id: 2, title: "", src: '/work_2.png', bg: "#303030" },
    { id: 3, title: "", src: '/work_3.png', bg: "linear-gradient(117.43deg, #202020 29.18%, #4F6266 99.98%)" },
    { id: 4, title: "", src: '/work_1.png', bg: "linear-gradient(135.4deg, #C4C4C4 37.87%, rgba(255, 255, 255, 0.76) 72.38%)" },
]
const secondRowImages = [
    { id: 5, title: "", src: '/work_1.png', bg: "#D1D1D1" },
    { id: 6, title: "", src: '/work_6.png', bg: "#747474" },
    { id: 7, title: "", src: '/work_1.png', bg: "#FFB4E9" },
    { id: 8, title: "", src: '/work_8.png', bg: "#A6A6A6" },
]

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
        <Box m='1rem' bg={bg}>
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
        <Box m='1rem' bg={bg}>
            <Box
                position="relative"
                {...sliderImageSty}>
                <Image fill src={src} alt={title} />
            </Box>
        </Box>
    )
}