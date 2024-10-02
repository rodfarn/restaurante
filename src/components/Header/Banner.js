import React from 'react'

const Banner = () => {
    return (
        <section className="header-banner h-96 w-full bg-yellow-50">
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-center text-3xl md:text-4xl lg:text-5xl poppins italic font-semibold text-white">Bienvenido</h1>

                <button 
    className="text-sm bg-primary py-3 px-6 mt-8 rounded-full text-white poppins orange-500 focus:ring-4 transition duration-300 hover:scale-105 transform"
    onClick={() => {
        const element = document.getElementById('foods-slider');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }}
>
    ¡Conoce nuestro menú!
</button>           
            </div>
        </section>
    )
}

export default Banner
