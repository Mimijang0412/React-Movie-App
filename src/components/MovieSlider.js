import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Movie from '../components/Movie';

function MovieSlider({ categories, min_rating }) {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		const json = await (
			await fetch(
				`https://yts.mx/api/v2/list_movies.json?minimum_rating=${min_rating}`
			)
		).json();
    
		setLoading(false);
		setMovies(json.data.movies);
	};
	useEffect(() => {
		getMovies();
	}, [min_rating]);

	var settings = {
		className: 'center',
		centerMode: true,
		dots: true,
		infinite: true,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 2000,
		// cssEase: "linear",
		centerPadding: '0px',
		slidesToShow: 7,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className='mt-12 text-white z-10'>
			{loading ? (
				<h1 className='text-3xl'>Loading...</h1>
			) : (
				<div className='my-5'>
          <h3 className='px-1 mb-2'>{categories}</h3>
					<Slider {...settings}>
						{movies.map((movie) => (
							<Movie
								key={movie.id}
								medium_cover_image={movie.medium_cover_image}
								title={movie.title}
								summary={movie.summary}
								genres={movie.genres}
								id={movie.id}
                year={movie.year}
							/>
						))}
					</Slider>
				</div>
			)}
		</div>
	);
}

export default MovieSlider;
