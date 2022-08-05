import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";

export default function Home({ results }) {
  const router = useRouter();

  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          key={movie.id}
        >
          <div className="movie" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
            />
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <a>
                <h4>{movie.original_title}</h4>
              </a>
            </Link>
          </div>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/movies");
  const { results } = await res.json();
  return {
    props: { results },
  };
}
// getServerSideProps 함수안에 작성하는 것은 서버에서 처리한다.
// API key도 작성하면 client 사이드에서는 볼수 없다.
// server side 를 통해서 props를 page에 보낼 수 있다.
// props 는 plain object 이여야 한다.
