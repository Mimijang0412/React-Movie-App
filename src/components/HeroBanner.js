import React, { useEffect, useState } from 'react';

function HeroBanner() {
	const [randomMovie, setRandomMovie] = useState([]);

	useEffect(() => {
		const getRandomMovies = async () => {
			const json = await (
				await fetch(
					`https://yts.mx/api/v2/list_movies.json?minimum_rating=9`
				)
			).json();
			let allMovies = json.data.movies;
			let random = Math.floor(Math.random() * allMovies.length);
			setRandomMovie(allMovies[random]);
			// console.log(random, allMovies, randomMovie);
		};

		getRandomMovies();
	}, [randomMovie]);

	return (
		<div className='mt-12 text-white z-10'>
			<img src={randomMovie.large_cover_image} alt='' />
			<div className='my-5'>
				<h3 className='px-1 mb-2'>{randomMovie.title}</h3>
				<p>{randomMovie.summary}</p>
			</div>
		</div>
	);
}

export default HeroBanner;
