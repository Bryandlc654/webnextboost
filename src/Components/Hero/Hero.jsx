import React from 'react'

const Hero = () => {
    return (
        <>
            <section
                className="relative bg-hero"
            >
                <div
                    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>
                <div
                    className="relative mx-auto max-w-screen-xl  py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
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
                                Más Información <i class="bi bi-arrow-right-short ml-1 icon-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero