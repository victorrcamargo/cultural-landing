import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CarouselContainer = () => {
    return (
        <div className="w-full h-1/2">
            <Carousel>
                <img src="https://images.pexels.com/photos/3030268/pexels-photo-3030268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                <img src="https://picsum.photos/256/256" alt="" />
                <img src="https://picsum.photos/256/256" alt="" />
            </Carousel>
        </div>
    )
}

export default CarouselContainer