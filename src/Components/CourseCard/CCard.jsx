import React from "react";

function CCard() {
  return (
    <div>
      <div className="c-card p-4 md:w-1/3 flex justify-center">
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg dark:bg-slate-800">
          <img
            className="object-contain w-full object-center"
            src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/videoseries/ultimate-js-tutorial-hindi-1/JS-Thumb.jpg"
            width="384"
            height="216"
            alt="blog"
          />
          <div className="px-6 md:my-11 lg:my-0 md:h-72 lg:h-64 lg:py-4 xl:h-52">
            <span className="tracking-widest text-xs title-font font-medium mb-1">
              FREE COURSE
            </span>
            <div className="title-font flex text-lg font-medium cursor-pointer text-gray-900 mb-3 dark:text-white">
              Ultimate JavaScript Course
            </div>
            <p className="text-gray-700 text-base dark:text-gray-400">
              This latest JavaScript course comes with premium curriculum that
              covers everything from basics to advance. On top of that, you will
              get my handwritten notes of JS for completely free. What are you
              waiting for? Just Enroll Buddy
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block text-white bg-purple-700 rounded-full px-3 py-2 text-sm font-semibold mr-2 my-2 cursor-pointer">
              
              Start Watching
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CCard;
