import React from 'react'
import Logo from '../../assets/logo.webp'

const Header = () => {
    return (
        <>
            <header className="bg-white py-2">
                <div className="mx-auto flex h-16 max-w-screen-xl items-center lg:gap-16 gap-6 px-4 sm:px-6 lg:px-8 font-medium">
                    <a className="block text-teal-600" href="#">
                        <img src={Logo} alt="Logo Next Boost Peru" className='logo-header' />
                    </a>
                    <div className="flex flex-1 items-center justify-end md:justify-between">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a className="transition hover:text-gray-500/75" href="#"> Inicio </a>
                                </li>
                                <li>
                                    <a className="transition hover:text-gray-500/75" href="#"> Servicios </a>
                                </li>
                                <li>
                                    <a className="transition hover:text-gray-500/75" href="#">Portafolio</a>
                                </li>
                                <li>
                                    <a className="transition hover:text-gray-500/75" href="#">Cursos</a>
                                </li>
                                <li>
                                    <a className="transition hover:text-gray-500/75" href="#">Contacto</a>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <a
                                    className="block rounded-md px-5 py-2.5 text-sm font-medium text-white transition bg-primary"
                                    href="#"
                                >
                                    <i className="bi bi-person-circle mr-2"></i>Ingresar
                                </a>
                            </div>
                            <button
                                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                            >
                                <span className="sr-only">Toggle menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header