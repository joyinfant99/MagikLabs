import React from 'react';
import Link from 'next/link';

const products = [
  {
    name: "ReplyMagik",
    features: [
      "AI-powered email response suggestions",
      "Custom learning from your writing style",
      "Integration with popular email clients",
      "Multi-language support",
      "Privacy-focused design"
    ]
  },
  {
    name: "ReviewMagik",
    features: [
      "Automated sentiment analysis of customer reviews",
      "Customizable response templates",
      "Integration with major review platforms",
      "Trend analysis and reporting",
      "Team collaboration features"
    ]
  },
  {
    name: "NoteMagik",
    features: [
      "AI-assisted note organization",
      "Real-time collaboration",
      "Cross-platform synchronization",
      "Rich media embedding",
      "Advanced search capabilities"
    ]
  },
  {
    name: "HueMagik",
    features: [
      "AI-powered color palette generation",
      "Color accessibility checker",
      "Export to various design software",
      "Inspiration from images and trends",
      "Customizable color rules"
    ]
  },
  {
    name: "MyPrayerBook",
    features: [
      "Customizable prayer tracker",
      "Inspirational content delivery",
      "Community prayer requests",
      "Multi-faith support",
      "Meditation timer and guided sessions"
    ]
  }
];

const ProductsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#00274D]">Our Products</h1>
      <div className="space-y-12">
        {products.map((product) => (
          <div key={product.name} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-[#00274D]">{product.name}</h2>
            <ul className="list-disc list-inside space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-700">{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/" className="text-[#00274D] hover:text-[#28A745] transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ProductsPage;