import ComicCard from "./comicCard";

export default function Main({ comics }) {
  return (
    <>
      <div className="jumbotron-hardcoded">
        <img src="/img/jumbotron.jpg" alt="jumbotron" />
      </div>
      {/* contenitore per poter gestire la posizione relativa */}
      <div className="position-relative">
        <button className="btn btn-primary fw-bold current-series-button">
          CURRENT SERIES
        </button>
        <section className="bg-dark py-5">
          <div className="container">
            <div className="row g-4">
              {/*//note  ComicCard */}
              {comics.map((comic) => (
                <ComicCard
                  key={comic.id}
                  thumb={comic.thumb}
                  series={comic.series}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="bg-dark py-3 d-flex justify-content-center">
        <button className="btn btn-primary fw-bold load-more-button">
          Load More
        </button>
      </div>
    </>
  );
}
