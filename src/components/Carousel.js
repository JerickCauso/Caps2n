import './Carousel.css';
const Carousel = () => {
  return (

    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-screen overflow-hidden md:h-screen ">
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="https://www.presello.com/wp-content/uploads/2022/08/Photo-5-13-23-11-10-07-AM.jpg" className="absolute block bg-cover w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          <div className="pt-64 carousel-caption bg-gray-800 flex flex-col align-middle bg-opacity-40 p-5 pl-52 justify-start h- w-full absolute bottom-0 top-0">
            <h5 className="pb-4 text-white text-xl mb-2">Baguio City</h5>
            <h2 className="text-gold text-6xl font-bold mb-4">
              <span className="text-custom-green text-6xl mb-4">Freyya</span> <span className='block'>Model
                House</span>
            </h2>
            <p className="pb-5 text-white text-xl mb-4">
              A modern look in the summer capital of the Philippines
            </p>
            <p className="mb-5">
              <a href="#spacer"><span className="quote-price">Visit Preview</span></a>
            </p>
          </div>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="https://www.presello.com/wp-content/uploads/2022/09/29134-2.jpg" className="absolute block bg-cover w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          <div className="pt-64 carousel-caption bg-gray-800 flex flex-col align-middle bg-opacity-40 p-5 pl-52 justify-start h- w-full absolute bottom-0 top-0">
            <h5 className="pb-4 text-white text-xl mb-2">Boracay Island</h5>
            <h2 className="text-gold text-6xl font-bold mb-4">
              <span className="text-custom-green text-6xl mb-4">Ella</span> <span className='block'>Model
                House</span>
            </h2>
            <p className="pb-5 text-white text-xl mb-4">
              A cozy and luxiorious dwelling in the Island of Boracay
            </p>
            <p className="mb-5">
              <a href="#spacer"><span className="quote-price">Visit Preview</span></a>
            </p>
          </div>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="https://www.presello.com/wp-content/uploads/2020/09/IMG_9557-scaled.jpg" className="absolute block bg-cover w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          <div className="pt-64 carousel-caption bg-gray-800 flex flex-col align-middle bg-opacity-40 p-5 pl-52 justify-start h- w-full absolute bottom-0 top-0">
            <h5 className="pb-4 text-white text-xl mb-2">Davao City</h5>
            <h2 className="text-gold text-6xl font-bold mb-4">
              <span className="text-custom-green text-6xl mb-4">Augustta</span> <span className='block'>Model
                House</span>
            </h2>
            <p className="pb-5 text-white text-xl mb-4">
              A modern look in the summer capital of the Philippines
            </p>
            <p className="mb-5">
              <a href="#spacer"><span className="quote-price">Visit Preview</span></a>
            </p>
          </div>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="https://www.presello.com/wp-content/uploads/2022/10/F8342A6B-B949-4C0E-9FEF-036EFD853F62-scaled.jpg" className="absolute block bg-cover w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          <div className="pt-64 carousel-caption bg-gray-800 flex flex-col align-middle bg-opacity-40 p-5 pl-52 justify-start h- w-full absolute bottom-0 top-0">
            <h5 className="pb-4 text-white text-xl mb-2">Tagaytay City</h5>
            <h2 className="text-gold text-6xl font-bold mb-4">
              <span className="text-custom-green text-6xl mb-4">Gretta</span> <span className='block'>Model
                House</span>
            </h2>
            <p className="pb-5 text-white text-xl mb-4">
              A glamorous looking penthouse
            </p>
            <p className="mb-5">
              <a href="#spacer"><span className="quote-price">Visit Preview</span></a>
            </p>
          </div>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="https://www.presello.com/wp-content/uploads/2022/02/21487-1.jpg" className="absolute block bg-cover w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          <div className="pt-64 carousel-caption bg-gray-800 flex flex-col align-middle bg-opacity-40 p-5 pl-52 justify-start h- w-full absolute bottom-0 top-0">
            <h5 className="pb-4 text-white text-xl mb-2">Metro Manila</h5>
            <h2 className="text-gold text-6xl font-bold mb-4">
              <span className="text-custom-green text-6xl mb-4">Aletta</span> <span className='block'>Model
                House</span>
            </h2>
            <p className="pb-5 text-white text-xl mb-4">
              A modern look in the summer capital of the Philippines
            </p>
            <p className="mb-5">
              <a href="#spacer"><span className="quote-price">Visit Preview</span></a>
            </p>
          </div>
        </div>
      </div>
      <div id="carousel-indicator" className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
      </div>
      <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>

  )
}

export default Carousel;