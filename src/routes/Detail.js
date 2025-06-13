import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState()
	const { id } = useParams();
	
	useEffect(() => {
    const getMovieDetail = async () => {
      const json = await (
        await fetch(
          `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        )
      ).json();
      setMovie(json.data.movie)
      setLoading(false);
    };

		getMovieDetail();
	}, []);

	return (
    <div>
      {loading ? (
        <h1>Detail Loading...</h1>
      ) : (
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.genres} | {movie.year}</p>
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
