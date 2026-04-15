import React from 'react';
import { Link } from 'react-router';

const NodataTimelineCard = () => {
    return (
      <div>
        <div className="flex items-center justify-center px-6">
          <div className="text-center h-full flex flex-col items-center justify-center gap-6">
            <div className="">
              <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">
                Oops! কোনো ডাটা পাওয়া যায়নি
              </h2>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

export default NodataTimelineCard;