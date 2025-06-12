// import React, {  useEffect, useState } from 'react';
import Header from '../components/Header';
import MovieSlider from '../components/MovieSlider';
import HeroBanner from '../components/HeroBanner'

function Home() {	
	return (
		<div className="bg-black min-h-screen h-full overflow-x-hidden px-12">
      <Header/>
      <HeroBanner/>
      <div className="mt-12 text-white z-10">
        <MovieSlider categories={'Popular Movies'} min_rating={8}/>
        <MovieSlider categories={'Less Popular Movies'} min_rating={6}/>
      </div>
		</div>
	);
}

export default Home;