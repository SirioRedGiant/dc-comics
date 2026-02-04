import dcLogo from "../assets/img/dc-logo.png";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo-container">
          <img src={dcLogo} alt="DC logo" />
        </div>
        <nav>
          <ul className="d-flex list-unstyled m-0 gap-3 fw-bold">
            <li>CHARACTERS</li>
            <li>COMICS</li>
            <li>MOVIES</li>
            <li>TV</li>
            <li>GAMES</li>
            <li>COLLECTIBLES</li>
            <li>VIDEOS</li>
            <li>FANS</li>
            <li>NEWS</li>
            <li>SHOP</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
