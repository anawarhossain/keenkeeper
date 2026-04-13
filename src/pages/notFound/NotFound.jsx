import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
      <div>
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-6">
          <div className="text-center">
            {/* Large 404 Text */}
            <h1 className="text-9xl font-black text-primary opacity-20">404</h1>

            <div className="-mt-16">
              <h2 className="text-3xl md:text-5xl font-bold text-base-content mb-4">
                Oops! পৃষ্ঠাটি পাওয়া যায়নি
              </h2>
              <p className="text-lg text-base-content/70 mb-8 max-w-md mx-auto">
                দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে অথবা
                এর লিঙ্কটি ভুল।
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/" className="btn btn-primary btn-wide shadow-lg">
                  হোম পেজে ফিরে যান
                </Link>

                <button
                  onClick={() => window.history.back()}
                  className="btn btn-outline btn-wide"
                >
                  আগের পৃষ্ঠায় যান
                </button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="mt-12 flex justify-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary animate-bounce"></div>
              <div className="w-3 h-3 rounded-full bg-secondary animate-bounce [animation-delay:-.3s]"></div>
              <div className="w-3 h-3 rounded-full bg-accent animate-bounce [animation-delay:-.5s]"></div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default NotFound;