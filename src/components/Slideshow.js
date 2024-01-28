import React, {useState, useEffect} from 'react'

export default function Slideshow({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPreviousSlide = () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(prevIndex);
  };

  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  

  return (
    <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            
          <div
          key={index}
          className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          ><img src={slide.src} className="d-block w-100" alt={slide.alt} /></div>
        ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" onClick={goToPreviousSlide}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={goToNextSlide}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  )
}
