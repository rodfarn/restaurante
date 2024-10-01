import React, { useEffect, useState } from 'react';
import FoodItem from './FoodItem';
import Skeleton from './Skeleton';

const Foods = () => {
    const [menuTab, setMenuTab] = useState('Pastas');
    const [loading, setLoading] = useState(true);
    const [foods, setFoods] = useState([]);

    // Llamada a la API
    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const response = await fetch('http://pizzadays.local/wp-json/wp/v2/posts');
                const data = await response.json();

                // Obtener la URL de la imagen para cada alimento
                const foodsWithImages = await Promise.all(data.map(async (item) => {
                    if (item.featured_media) {
                        try {
                            const mediaResponse = await fetch(`http://pizzadays.local/wp-json/wp/v2/media/${item.featured_media}`);
                            const mediaData = await mediaResponse.json();
                            item.imageUrl = mediaData.source_url; // Asignar la URL de la imagen a la propiedad `imageUrl`
                        } catch (error) {
                            console.error('Error fetching image:', error);
                        }
                    }
                    return item;
                }));

                console.log('Fetched foods:', foodsWithImages); // Añadir console.log
                setFoods(foodsWithImages);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchFoods();
    }, []);

    // Manejo de las pestañas del menú
    const handleMenuTabs = (type) => {
        setMenuTab(type);
    };

    // Filtrar alimentos por categorías
    const filteredFoods = foods.filter((item) => {
        if (menuTab === 'Pastas') return item.categories.includes(3); // Categoría de Pastas
        if (menuTab === 'Pizzas') return item.categories.includes(4); // Categoría de Pizzas
        if (menuTab === 'Lasañas') return item.categories.includes(5); // Categoría de Lasañas
        return false;
    });

    return (
        <section className="my-12 max-w-screen-xl mx-auto px-6">
            {/* Pestañas del menú */}
            <div className="flex items-center justify-center space-x-6">
                <p className={menuTab === 'Pastas' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Pastas')}>PASTAS</p>
                <p className={menuTab === 'Pizzas' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Pizzas')}>PIZZAS</p>
                <p className={menuTab === 'Lasañas' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Lasañas')}>LASAÑAS</p>
            </div>

            {/* Todos los alimentos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {loading ? (
                    <Skeleton />
                ) : (
                    filteredFoods.map(item => (
                        <FoodItem 
                            key={item.id} 
                            post={item} // Pasar el objeto completo `item` que incluye `imageUrl`
                            precio={item.acf ? item.acf.Precio : null} // Incluyendo el preci
                        />
                    ))
                )}
            </div>
        </section>
    );
};

export default Foods;