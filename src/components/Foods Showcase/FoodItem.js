import React from "react";

const FoodItem = ({ post, precio }) => {
    return (
        <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-2xl">
            <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4">Post</span>
            {/* Asegúrate de que `post.imageUrl` se pase y exista */}
            <div className="overflow-hidden rounded-2xl flex flex-grow">
                {post.imageUrl ? (
                    <img src={post.imageUrl} alt={post.title.rendered} className="w-500 h-500 object-cover mb-4 rounded" />
                ) : (
                    <p>No image available</p> // Mensaje si no hay imagen
                )}
            </div>
            <h1 className="text-gray-900 poppins text-lg">{post.title.rendered}</h1>
            <h1>{precio ? <p>Precio: ${precio}</p> : <p>Precio no disponible</p>}</h1>
            <p className="text-gray-500 poppins text-sm text-center" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        </div>
    );
}

export default FoodItem;
