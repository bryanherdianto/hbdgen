import { SignedIn, SignedOut } from '@clerk/clerk-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ImageSlider = ({ images, link }: { images: { src: string; alt: string }[], link: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-2xl mx-auto">
      {/* Image Container */}
      <div className="relative w-full aspect-video overflow-hidden rounded-2xl border border-stone-200 bg-white">
        <div
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <div key={idx} className="min-w-full h-full">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Preview Button */}
        <Link
          to={link}
          className="absolute top-3 right-3 p-1 bg-white rounded-full transition-all border border-stone-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-stone-700 group-hover:scale-110 duration-200">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
          </svg>
        </Link>
      </div>

      {/* Dot Indicators */}
      <div className="flex gap-1">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 w-2 rounded-full duration-500 transition-all ${currentIndex === idx ? "bg-blue-600 w-6" : "bg-stone-300 hover:bg-stone-400"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

function Create() {
  const [selectedSection, setSelectedSection] = useState<number>(1);

  const cardStackImages = [
    { src: '/card-stack-1.png', alt: 'Card Stack 1' },
    { src: '/card-stack-2.png', alt: 'Card Stack 2' },
  ];

  const stickyPixelImages = [
    { src: '/sticky-pixel-1.png', alt: 'Sticky Pixel 1' },
    { src: '/sticky-pixel-2.png', alt: 'Sticky Pixel 2' },
  ];

  const simpleValentineImages = [
    { src: '/simple-valentine-1.png', alt: 'Simple Valentine 1' },
    { src: '/simple-valentine-2.png', alt: 'Simple Valentine 2' },
  ];

  return (
    <>
      <SignedIn>
        <div className="relative max-w-7xl mx-auto w-full py-12 text-center mb-8 overflow-hidden rounded-3xl">
          <img
            src="/blue-rect.svg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
          {selectedSection == 1 && (
            <h1 className="text-4xl font-bold tracking-tight">Choose your favorite design</h1>
          )}
          {selectedSection == 2 && (
            <h1 className="text-4xl font-bold tracking-tight">Personalize your message</h1>
          )}
          {selectedSection == 3 && (
            <h1 className="text-4xl font-bold tracking-tight">The finishing touches</h1>
          )}
        </div>
        {
          selectedSection == 1 && (
            <>
              <h2 className="text-3xl font-semibold tracking-tight mb-2">Birthday</h2>
              <div className="mb-12 grid grid-cols-2 gap-4">
                <div>
                  <ImageSlider images={cardStackImages} link="/templates/card-stack" />
                </div>
                <div>
                  <ImageSlider images={stickyPixelImages} link="/templates/sticky-pixel" />
                </div>
              </div>

              <h2 className="text-3xl font-semibold tracking-tight mb-2">Valentine</h2>
              <div className="mb-12 grid grid-cols-2 gap-4">
                <div>
                  <ImageSlider images={simpleValentineImages} link="/templates/simple-valentine" />
                </div>
              </div>
            </>
          )
        }
        {selectedSection == 2 && (
          <>
          </>
        )}
        {selectedSection == 3 && (
          <>
          </>
        )}
        <div className='flex justify-center gap-5'>
          {selectedSection > 1 && (
            <button onClick={() => setSelectedSection(selectedSection - 1)} className="button-container rounded-full font-bold">
              <span className="circle1"></span>
              <span className="circle2"></span>
              <span className="circle3"></span>
              <span className="circle4"></span>
              <span className="circle5"></span>
              <span className="text">Back</span>
            </button>
          )}
          {selectedSection < 3 && (
            <button onClick={() => setSelectedSection(selectedSection + 1)} className="button-container rounded-full font-bold">
              <span className="circle1"></span>
              <span className="circle2"></span>
              <span className="circle3"></span>
              <span className="circle4"></span>
              <span className="circle5"></span>
              <span className="text">Next</span>
            </button>
          )}
          {selectedSection == 3 && (
            <button onClick={() => setSelectedSection(selectedSection + 1)} className="button-container rounded-full font-bold">
              <span className="circle1"></span>
              <span className="circle2"></span>
              <span className="circle3"></span>
              <span className="circle4"></span>
              <span className="circle5"></span>
              <span className="text">Submit</span>
            </button>
          )}
        </div>
      </SignedIn>
      <SignedOut>
        <section className="relative max-w-7xl mx-auto w-full py-20 text-center overflow-hidden rounded-3xl">
          <img
            src="/blue-rect.svg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
          <h2 className="text-3xl font-bold mb-8 tracking-tight">Sign in to manage your content</h2>
          <Link to="/sign-in" className="inline-block">
            <button className="button-container rounded-full font-bold">
              <span className="circle1"></span>
              <span className="circle2"></span>
              <span className="circle3"></span>
              <span className="circle4"></span>
              <span className="circle5"></span>
              <span className="text">Join Us</span>
            </button>
          </Link>
        </section>
      </SignedOut>
    </>
  );
}

export default Create;