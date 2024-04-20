import React, { useEffect, useRef, useState } from 'react';
import './HomeBooks.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';


export default function HomeBooks() {
    const carouselRef = useRef();
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }, []);
    const quotes = [
        {
            quote: "“There is more treasure in books than in all the pirate’s loot on Treasure Island.”",
            author: "Walt Disney"
        },
        {
            quote: "“Well done is better than well said.”",
            author: "Benjamin Franklin"
        },
        {
            quote: "“You must be the change you wish to see in the world.”",
            author: "Mahatma Gandhi"
        },
        {
            quote: "“You must be the change you wish to see in the world.”",
            author: "Mahatma Gandhi"
        }
    ];

    return (
        <div className="homepage-books  px-8 py-3">
            <div className="recent flex flex-col items-center lg:flex-row gap-5">
                <div className="quotes px-6 py-8 text-white rounded-xl">
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                        autoplay={true}
                        delay={5}
                    >
                        {quotes.map((el,key) =>
                            <SwiperSlide key={key}>
                                <motion.div className='flex flex-col justify-between h-full px-5 py-4'>
                                    <p className='mb-3 font-bold'>Today’s Quote</p>
                                    <p>{el.quote}</p>
                                    <div className='text-right'>- {el.author}</div>
                                </motion.div>
                            </SwiperSlide>)}
                    </Swiper>
                </div>
                <div className="new-arrivals">
                    <motion.div ref={carouselRef} className='carousel flex rounded-xl bg-white pr-6'>
                        <div className='text text-center text-white px-2'>New Arrivals</div>
                        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className='inner-carousel flex gap-5 pl-3 py-2'>
                            <img src={require('../../../assets/books/book3.png')}
                                alt="carousel-img" className="h-40 w-28 mx-auto  my-1 p-3 object-cover rounded-xl" />
                            <img src={require('../../../assets/books/book4.png')}
                                alt="carousel-img" className="h-40 w-28 mx-auto  my-1 p-3 object-cover rounded-xl" />
                            <img src={require('../../../assets/books/book5.png')}
                                alt="carousel-img" className="h-40 w-28 mx-auto  my-1 p-3 object-cover rounded-xl" />
                            <img src={require('../../../assets/books/book6.png')}
                                alt="carousel-img" className="h-40 w-28 mx-auto  my-1 p-3 object-cover rounded-xl" />
                            <img src={require('../../../assets/books/book2.png')}
                                alt="carousel-img" className="h-40 w-28 mx-auto  my-1 p-3 object-cover rounded-xl" />
                            <img src={require('../../../assets/books/book2.png')}
                                alt="carousel-img" className="h-40 w-28 mx-auto  my-1 p-3 object-cover rounded-xl" />

                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <div className="contain">
                <div className='mt-5'>
                    <p className='text-xl font-medium text-[#4D4D4D]'>Good Morning</p>
                    <div className="box-books mt-4">
                        <div className="flex justify-between items-center">
                            <span className='text-base text-[#4D4D4D]'>Recommended for You</span>
                            <span className='text-sm text-[#8A8A8A]'><Link to="#">Show All</Link></span>
                        </div>
                        <div className="books mt-5 mb-10">
                            <section id="Projects" className="w-full md:w-fit mx-auto grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-items-center justify-center gap-y-5 gap-x-5">

                                <div className="w-full md:w-36 bg-white shadow-md rounded-lg duration-500 hover:scale-105 hover:shadow-xl">
                                    <a href="#">
                                        <img src={require('../../../assets/books/book1.png')}
                                            alt="Product" className="md:h-36 w-full md:w-28 mx-auto  mt-1 object-cover rounded-xl" />
                                        <div className="px-4 py-3 md:w-36">
                                            <p className="text-sm text-black truncate block capitalize">The Design of Every..</p>
                                            <span className="text-gray-400 mr-3 text-xs">Steve Krug, 2000</span>
                                            <div className="flex items-center">
                                                <p className="text-xs font-medium text-black cursor-auto my-1">4.5<span className="text-xs text-gray-600 font-light cursor-auto">/5</span></p>
                                                <div>

                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="w-full md:w-36 bg-white shadow-md rounded-lg duration-500 hover:scale-105 hover:shadow-xl">
                                    <a href="#">
                                        <img src={require('../../../assets/books/book2.png')}
                                            alt="Product" className="md:h-36 w-full md:w-28 mx-auto  mt-1 object-cover rounded-xl" />
                                        <div className="px-4 py-3 md:w-36">
                                            <p className="text-sm text-black truncate block capitalize">The Design of Every..</p>
                                            <span className="text-gray-400 mr-3 text-xs">Steve Krug, 2000</span>
                                            <div className="flex items-center">
                                                <p className="text-xs font-medium text-black cursor-auto my-1">4.5<span className="text-xs text-gray-600 font-light cursor-auto">/5</span></p>
                                                <div>

                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="w-full md:w-36 bg-white shadow-md rounded-lg duration-500 hover:scale-105 hover:shadow-xl">
                                    <a href="#">
                                        <img src={require('../../../assets/books/book3.png')}
                                            alt="Product" className="md:h-36 w-full md:w-28 mx-auto  mt-1 object-cover rounded-xl" />
                                        <div className="px-4 py-3 md:w-36">
                                            <p className="text-sm text-black truncate block capitalize">The Design of Every..</p>
                                            <span className="text-gray-400 mr-3 text-xs">Steve Krug, 2000</span>
                                            <div className="flex items-center">
                                                <p className="text-xs font-medium text-black cursor-auto my-1">4.5<span className="text-xs text-gray-600 font-light cursor-auto">/5</span></p>
                                                <div>

                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="w-full md:w-36 bg-white shadow-md rounded-lg duration-500 hover:scale-105 hover:shadow-xl">
                                    <a href="#">
                                        <img src={require('../../../assets/books/book4.png')}
                                            alt="Product" className="md:h-36 w-full md:w-28 mx-auto  mt-1 object-cover rounded-xl" />
                                        <div className="px-4 py-3 md:w-36">
                                            <p className="text-sm text-black truncate block capitalize">The Design of Every..</p>
                                            <span className="text-gray-400 mr-3 text-xs">Steve Krug, 2000</span>
                                            <div className="flex items-center">
                                                <p className="text-xs font-medium text-black cursor-auto my-1">4.5<span className="text-xs text-gray-600 font-light cursor-auto">/5</span></p>
                                                <div>

                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="w-full md:w-36 bg-white shadow-md rounded-lg duration-500 hover:scale-105 hover:shadow-xl">
                                    <a href="#">
                                        <img src={require('../../../assets/books/book5.png')}
                                            alt="Product" className="md:h-36 w-full md:w-28 mx-auto  mt-1 object-cover rounded-xl" />
                                        <div className="px-4 py-3 md:w-36">
                                            <p className="text-sm text-black truncate block capitalize">The Design of Every..</p>
                                            <span className="text-gray-400 mr-3 text-xs">Steve Krug, 2000</span>
                                            <div className="flex items-center">
                                                <p className="text-xs font-medium text-black cursor-auto my-1">4.5<span className="text-xs text-gray-600 font-light cursor-auto">/5</span></p>
                                                <div>

                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="w-full md:w-36 bg-white shadow-md rounded-lg duration-500 hover:scale-105 hover:shadow-xl">
                                    <a href="#">
                                        <img src={require('../../../assets/books/book6.png')}
                                            alt="Product" className="md:h-36 w-full md:w-28 mx-auto  mt-1 object-cover rounded-xl" />
                                        <div className="px-4 py-3 md:w-36">
                                            <p className="text-sm text-black truncate block capitalize">The Design of Every..</p>
                                            <span className="text-gray-400 mr-3 text-xs">Steve Krug, 2000</span>
                                            <div className="flex items-center">
                                                <p className="text-xs font-medium text-black cursor-auto my-1">4.5<span className="text-xs text-gray-600 font-light cursor-auto">/5</span></p>
                                                <div>

                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                            </section>
                        </div>
                    </div>
                    <div className="box-books mt-4">
                        <div className="flex justify-between items-center">
                            <span className='text-base text-[#4D4D4D]'>Recommended for You</span>
                            <span className='text-sm text-[#8A8A8A]'><Link to="#">Show All</Link></span>
                        </div>
                        <div className="books mt-5 mb-10">
                        <section id="Projects" className="w-full md:w-fit mx-auto grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-items-center justify-center gap-y-5 gap-x-5">

<div className="w-full md:w-36 bg-white shadow-md rounded-lg duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
        <img src={require('../../../assets/books/book1.png')}
            alt="Product" className="md:h-36 w-full md:w-28 mx-auto  mt-1 object-cover rounded-xl" />
        <div className="px-4 py-3 md:w-36">
            <p className="text-sm text-black truncate block capitalize">The Design of Every..</p>
            <span className="text-gray-400 mr-3 text-xs">Steve Krug, 2000</span>
            <div className="flex items-center">
                <p className="text-xs font-medium text-black cursor-auto my-1">4.5<span className="text-xs text-gray-600 font-light cursor-auto">/5</span></p>
                <div>

                </div>
            </div>
        </div>
    </a>
</div>
<div className="w-full md:w-36 bg-white shadow-md rounded-lg duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
        <img src={require('../../../assets/books/book2.png')}
            alt="Product" className="md:h-36 w-full md:w-28 mx-auto  mt-1 object-cover rounded-xl" />
        <div className="px-4 py-3 md:w-36">
            <p className="text-sm text-black truncate block capitalize">The Design of Every..</p>
            <span className="text-gray-400 mr-3 text-xs">Steve Krug, 2000</span>
            <div className="flex items-center">
                <p className="text-xs font-medium text-black cursor-auto my-1">4.5<span className="text-xs text-gray-600 font-light cursor-auto">/5</span></p>
                <div>

                </div>
            </div>
        </div>
    </a>
</div>

<div className="w-full md:w-36 bg-white shadow-md rounded-lg duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
        <img src={require('../../../assets/books/book3.png')}
            alt="Product" className="md:h-36 w-full md:w-28 mx-auto  mt-1 object-cover rounded-xl" />
        <div className="px-4 py-3 md:w-36">
            <p className="text-sm text-black truncate block capitalize">The Design of Every..</p>
            <span className="text-gray-400 mr-3 text-xs">Steve Krug, 2000</span>
            <div className="flex items-center">
                <p className="text-xs font-medium text-black cursor-auto my-1">4.5<span className="text-xs text-gray-600 font-light cursor-auto">/5</span></p>
                <div>

                </div>
            </div>
        </div>
    </a>
</div>

<div className="w-full md:w-36 bg-white shadow-md rounded-lg duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
        <img src={require('../../../assets/books/book4.png')}
            alt="Product" className="md:h-36 w-full md:w-28 mx-auto  mt-1 object-cover rounded-xl" />
        <div className="px-4 py-3 md:w-36">
            <p className="text-sm text-black truncate block capitalize">The Design of Every..</p>
            <span className="text-gray-400 mr-3 text-xs">Steve Krug, 2000</span>
            <div className="flex items-center">
                <p className="text-xs font-medium text-black cursor-auto my-1">4.5<span className="text-xs text-gray-600 font-light cursor-auto">/5</span></p>
                <div>

                </div>
            </div>
        </div>
    </a>
</div>

<div className="w-full md:w-36 bg-white shadow-md rounded-lg duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
        <img src={require('../../../assets/books/book5.png')}
            alt="Product" className="md:h-36 w-full md:w-28 mx-auto  mt-1 object-cover rounded-xl" />
        <div className="px-4 py-3 md:w-36">
            <p className="text-sm text-black truncate block capitalize">The Design of Every..</p>
            <span className="text-gray-400 mr-3 text-xs">Steve Krug, 2000</span>
            <div className="flex items-center">
                <p className="text-xs font-medium text-black cursor-auto my-1">4.5<span className="text-xs text-gray-600 font-light cursor-auto">/5</span></p>
                <div>

                </div>
            </div>
        </div>
    </a>
</div>

<div className="w-full md:w-36 bg-white shadow-md rounded-lg duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
        <img src={require('../../../assets/books/book6.png')}
            alt="Product" className="md:h-36 w-full md:w-28 mx-auto  mt-1 object-cover rounded-xl" />
        <div className="px-4 py-3 md:w-36">
            <p className="text-sm text-black truncate block capitalize">The Design of Every..</p>
            <span className="text-gray-400 mr-3 text-xs">Steve Krug, 2000</span>
            <div className="flex items-center">
                <p className="text-xs font-medium text-black cursor-auto my-1">4.5<span className="text-xs text-gray-600 font-light cursor-auto">/5</span></p>
                <div>

                </div>
            </div>
        </div>
    </a>
</div>

</section>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
