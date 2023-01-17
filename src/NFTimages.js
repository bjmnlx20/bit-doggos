import React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Flex, Input, Text, Image } from '@chakra-ui/react';
import dog from './assets/NFTs/FINAL.gif';

const images = [dog];

export default function ImageSwapper() {
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(images[Math.floor(Math.random() * images.length)]);
        }, 5000)
        
        return () => clearInterval(intervalId);
    }, [])


return (
    <div>
    <Image src={currentImage} boxSize="200px" margin="0 5px" />
    </div>
    )  
}
