import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  if (!product) {
    return null;
  }

  const { id, title, price, description, images } = product;

  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <div className="relative pb-[56.25%] h-0">
        {images && images.length > 0 ? (
          <img
            src={images[0]}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://picsum.photos/seed/${id}/300/200`;
            }}
          />
        ) : (
          <img
            src={`https://picsum.photos/seed/${id}/300/200`}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 truncate">{title}</h3>
        <p className="text-gray-600 mb-2">${price.toFixed(2)}</p>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{description}</p>
        <Link 
          to={`/product/${id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;