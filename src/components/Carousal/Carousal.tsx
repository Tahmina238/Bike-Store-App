"use client";
import Image from "next/image";

const Carousel = () => {
  return (
    <div className="carousel w-full">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <Image
          width={1000}
          height={100}
          alt="carousel image"
          src="https://www.callabike.de/_ipx/w_6400/https://cms-cab.frontend.dbconnect.net/uploads/ML_18036_1_2_9a3ccc46b2.jpg"
          className="w-full h-screen object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <Image
          width={1000}
          height={100}
          alt="carousel image"
          src="https://www.reneeroaming.com/wp-content/uploads/2022/05/Beginner-Mountain-Biking-Tips-Trails.jpg"
          className="w-full h-screen object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <Image
          width={1000}
          height={100}
          alt="carousel image"
          src="https://www.fujibikes.com/cdn/shop/files/KidsBikes-WebBanners-24.jpg?v=1739975056&width=1680"
          className="w-full h-screen object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <Image
          width={1000}
          height={100}
          alt="carousel image"
          src="https://images.squarespace-cdn.com/content/v1/65b8604da9957f77dc326f4a/b4658cc7-7aec-48e3-9779-487a0e53d8bf/DSC09705+%281%29new.jpg"
          className="w-full h-screen object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
