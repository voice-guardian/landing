import { useEffect, useRef } from 'react';

interface ProductSliderProps {
  images?: {
    src: string;
    alt: string;
  }[];
}

const ProductSlider = ({ images }: ProductSliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Product images defined in the component (5 slides)
  const productImages = [
    { src: '/images/products/product1.webp', alt: 'Product 1' },
    { src: '/images/products/product2.webp', alt: 'Product 2' },
    { src: '/images/products/product3.webp', alt: 'Product 3' },
    { src: '/images/products/product4.webp', alt: 'Product 4' },
  ];
  
  // Use provided images or default to the internal product images
  const slidesToShow = images || productImages;
  
  // We'll display the first image twice - once at the beginning and once at the end
  const displayImages = [...slidesToShow, slidesToShow[0]];
  
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    const handleScroll = () => {
      // Calculate how far down the page the user has scrolled
      const scrollPosition = window.scrollY;
      
      // Simple scroll-based translation
      slider.style.transform = `translateX(-${scrollPosition * 0.3}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className="relative overflow-hidden py-0 -mt-8 mb-0"
      style={{ 
        width: '100vw', 
        marginLeft: 'calc(-50vw + 50%)'
      }}
    >
      <div 
        ref={sliderRef}
        className="flex gap-4 transition-transform duration-200 ease-out px-4"
        style={{ width: 'fit-content' }}
      >
        {displayImages.map((image, index) => {
          // Determine width class based on index (position in slide sequence)
          let sizeClass = '';
          if (index % 2 === 0) {
            // Even indexed slides (0, 2, 4) - wider
            sizeClass = 'w-96 h-96';
          } else {
            // Odd indexed slides (1, 3, 5) - narrower
            sizeClass = 'w-72 h-96';
          }
          
          // Add a class to the duplicated slide at the end
          const isLastDuplicate = index === displayImages.length - 1;
          
          return (
            <div 
              key={index} 
              className={`flex-shrink-0 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ${sizeClass} ${isLastDuplicate ? 'duplicate-first-slide' : ''}`}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSlider;
