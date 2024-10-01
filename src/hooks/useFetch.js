import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        axios.get('http://pizzadays.local/wp-json/wp/v2/posts')
            .then(res => {
                console.log(res.data); // Agrega esta línea para verificar los datos
                setFoods(res.data);
            })
            .catch(err => console.error('Error al obtener los datos:', err));
    }, []);

    return [foods];
}

export default useFetch;
