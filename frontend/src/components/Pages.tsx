import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Link } from "react-router-dom"

function Pages() {
  return (
    <div>
      <SignedIn>
        <div>This content is only visible to signed-in users.</div>
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
    </div>
  )
}

export default Pages