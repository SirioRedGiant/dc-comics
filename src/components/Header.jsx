import dcLogo from "../assets/img/dc-logo.png"

export default function Header() {
  return <header className="bg-white">
    <div className="container d-flex jusify-content-between align-items-center">
      <div className="logo-container">
      <img src={dcLogo} alt="DC logo" />
      </div>

    </div>
  </header>;
}
