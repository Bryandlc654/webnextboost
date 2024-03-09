import React, { useRef, useState } from 'react';
import ImgHero from '../../assets/Componente_web.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Hero = () => {
    return (
        <>
            <section className="bg-hero">
                <Swiper pagination={{
                    clickable: true,
                }}
                    autoplay={{
                        delay: 6500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper">
                    <SwiperSlide>
                        <div className='overflow-hidden sm:grid sm:grid-cols-2  lg:px-8'>
                            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                                <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
                                    <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
                                        Diseño y Desarrollo <br /> de Página Web
                                    </h1>
                                    <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
                                        Utilizamos tecnologías de vanguardia para que tu sitio no solo impresione, sino que también brinde una experiencia de usuario excepcional.
                                    </p>
                                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                                        <a
                                            href="#"
                                            className="block w-full rounded btn-white px-12 py-3 text-sm font-medium shadow sm:w-auto"
                                        >
                                            Cotizar Ahora
                                        </a>
                                        <a
                                            href="#"
                                            className="block w-full rounded btn-outline px-12 py-3 text-sm font-medium shadow sm:w-auto"
                                        >
                                            Más Información <i className="bi bi-arrow-right-short ml-1 icon-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img
                                    alt=""
                                    src={ImgHero}
                                    className="h-56 w-full object-cover sm:h-full"
                                />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='overflow-hidden sm:grid sm:grid-cols-2  lg:px-8'>
                            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                                <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
                                    <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
                                        Diseño Puclitario <br /> para redes sociales
                                    </h1>
                                    <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
                                        Desde el diseño visual cautivador hasta la estrategia publicitaria efectiva, creamos campañas que conectan y generan resultados.
                                    </p>
                                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                                        <a
                                            href="#"
                                            className="block w-full rounded btn-white px-12 py-3 text-sm font-medium shadow sm:w-auto"
                                        >
                                            Cotizar Ahora
                                        </a>
                                        <a
                                            href="#"
                                            className="block w-full rounded btn-outline px-12 py-3 text-sm font-medium shadow sm:w-auto"
                                        >
                                            Más Información <i className="bi bi-arrow-right-short ml-1 icon-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img
                                    alt=""
                                    src={ImgHero}
                                    className="h-56 w-full object-cover sm:h-full"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='overflow-hidden sm:grid sm:grid-cols-2  lg:px-8'>
                            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                                <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
                                    <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
                                        Desarrollo de <br /> Software
                                    </h1>
                                    <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
                                        Desde la concepción hasta la implementación, nuestro equipo fusiona innovación y experiencia para crear soluciones que impulsan tu negocio.                                    </p>
                                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                                        <a
                                            href="#"
                                            className="block w-full rounded btn-white px-12 py-3 text-sm font-medium shadow sm:w-auto"
                                        >
                                            Cotizar Ahora
                                        </a>
                                        <a
                                            href="#"
                                            className="block w-full rounded btn-outline px-12 py-3 text-sm font-medium shadow sm:w-auto"
                                        >
                                            Más Información <i className="bi bi-arrow-right-short ml-1 icon-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img
                                    alt=""
                                    src={ImgHero}
                                    className="h-56 w-full object-cover sm:h-full"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='overflow-hidden sm:grid sm:grid-cols-2  lg:px-8'>
                            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                                <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
                                    <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
                                        Aprende <br /> Programación Web
                                    </h1>
                                    <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
                                    Con nuestro curso aprenderás desde cero y participarás en lecciones con una experiencia práctica y significativa.              
                                                    </p>
                                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                                        <a
                                            href="#"
                                            className="block w-full rounded btn-white px-12 py-3 text-sm font-medium shadow sm:w-auto"
                                        >
                                            Incríbete Ahora
                                        </a>
                                        <a
                                            href="#"
                                            className="block w-full rounded btn-outline px-12 py-3 text-sm font-medium shadow sm:w-auto"
                                        >
                                            Más Información <i className="bi bi-arrow-right-short ml-1 icon-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img
                                    alt=""
                                    src={ImgHero}
                                    className="h-56 w-full object-cover sm:h-full"
                                />
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>

            </section>
        </>
    )
}

export default Hero