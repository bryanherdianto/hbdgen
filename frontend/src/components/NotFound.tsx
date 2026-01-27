import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="relative max-w-7xl mx-auto w-full py-16 text-center overflow-hidden rounded-3xl">
            <img
                src="/blue-rect.svg"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover -z-10"
            />
            <h2 className="text-5xl font-bold mb-4 tracking-tight">404</h2>
            <p className="text-xl font-medium mb-8 text-stone-800">
                Oops! The celebration you're looking for doesn't exist.
            </p>
            <Link to="/" className="inline-block">
                <button className="button-container rounded-full font-bold">
                    <span className="circle1"></span>
                    <span className="circle2"></span>
                    <span className="circle3"></span>
                    <span className="circle4"></span>
                    <span className="circle5"></span>
                    <span className="text">Go Home</span>
                </button>
            </Link>
        </div>
    );
}