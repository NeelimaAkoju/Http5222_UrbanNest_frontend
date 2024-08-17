import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import ProductCard from '../components/ProductCard';
import { getCategories, getProductsByCategory } from '../services/api';

// Don't forget to import the CSS files for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MAX_PRODUCTS_PER_CATEGORY = 8;

function Home() {
  const [categories, setCategories] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);

        const productsPromises = categoriesData.map(category => 
          getProductsByCategory(category.id, MAX_PRODUCTS_PER_CATEGORY)
        );
        const productsResults = await Promise.all(productsPromises);

        const productsMap = {};
        categoriesData.forEach((category, index) => {
          productsMap[category.id] = productsResults[index];
        });

        setCategoryProducts(productsMap);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Banner Carousel */}
      <div className="mb-12">
        <Slider {...carouselSettings}>
          {Object.values(categoryProducts).flat().slice(0, 5).map(product => (
            <div key={product.id} className="relative">
              <img 
                src={product.images[0]} 
                alt={product.title} 
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-xl font-bold">{product.title}</h3>
                <p>${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Categorized Products */}
      {categories.map(category => (
        <section key={category.id} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categoryProducts[category.id]?.slice(0, MAX_PRODUCTS_PER_CATEGORY).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-6">
            <Link 
              to={`/category/${category.id}`} 
              className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              View All {category.name}
            </Link>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Home;