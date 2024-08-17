import React from 'react';

function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="mb-4">
          Founded in 2023, our e-commerce platform was born out of a passion for delivering quality products and exceptional customer service. We believe in making online shopping an enjoyable and hassle-free experience for all our customers.
        </p>
        <p>
          Our team of dedicated professionals works tirelessly to curate a selection of products that meet our high standards of quality and value. We're committed to continuous improvement and always strive to exceed our customers' expectations.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p>
          Our mission is to provide a seamless online shopping experience, offering a wide range of high-quality products at competitive prices. We aim to build lasting relationships with our customers based on trust, reliability, and excellent service.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside">
          <li>Curated selection of quality products</li>
          <li>Competitive prices</li>
          <li>Excellent customer service</li>
          <li>Secure and easy shopping experience</li>
          <li>Fast and reliable shipping</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;