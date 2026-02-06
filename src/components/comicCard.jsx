export default function ComicCard({ thumb, series }) {
  return (
    <div className="col-12 col-md-4 col-lg-2">
      <div className="comic-card text-white">
        <div className="img-container mb-3">
          <img src={thumb} alt={series} className="img-fluid w-100" />
        </div>
        <span className="text-uppercase small fw-bold">{series}</span>
      </div>
    </div>
  );
}
