'use client'

import { Button } from '../Button';
import styles from './ImagesGallery.module.scss'
import React, { useState } from 'react';


interface ImagesGalleryProps {
    className?: string
    images: string[]
}

const ImagesGallery: React.FC<ImagesGalleryProps> = ({className,images}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className={className}>
            <div className={styles.imagesGallery}>
                <div className={styles.mainImage}>
                    <img className='rounded' src={images[currentImageIndex]} alt={`Product Image ${currentImageIndex + 1}`} />
                </div>
                <div className={styles.thumbnails}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className={index === currentImageIndex ? 'active rounded' : 'rounded'}
                            onClick={() => setCurrentImageIndex(index)}
                        />
                    ))}
                </div>
                <div className={styles.buttons}>
                    <Button variant='ghost' onClick={handlePrev}>&lt;</Button>
                    <Button variant='ghost' onClick={handleNext}>&gt;</Button>
                </div>
            </div>
        </div>
    );
};

export default ImagesGallery;