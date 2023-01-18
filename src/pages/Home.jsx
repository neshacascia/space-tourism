import React from 'react';

export default function Home(props) {
  return (
    <section className="home w-screen h-auto px-6 flex flex-col justify-center items-center gap-20 text-lightBlue mt-12">
      <div className="left w-fit flex flex-col gap-4 text-center">
        <h2 className="font-h2 text-base font-normal">
          SO, YOU WANT TO TRAVEL TO
        </h2>
        <h1 className="font-h1 text-h1">SPACE</h1>
        <p className="font-body text-base leading-6">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className="right">
        <button className="bg-white font-h1 text-darkBlue text-button h-button w-button rounded-full">
          EXPLORE
        </button>
      </div>
    </section>
  );
}