import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api'; // Assume you have this method in your API service

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching categories:', err);
        setError('Failed to fetch categories. Please try again later.');
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Product Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map(category => (
          <Link 
            key={category.id} 
            to={`/category/${category.id}`} 
            className="block p-4 border rounded-lg hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
            {category.image && (
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-40 object-cover rounded"
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;