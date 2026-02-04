import digitalComicsIcon from "../assets/img/buy-comics-digital-comics.png"
import merchandiseIcon from "../assets/img/buy-comics-merchandise.png"
import subscriptionIcon from "../assets/img/buy-comics-subscriptions.png"
import comicShopLocator from "../assets/img/buy-comics-shop-locator.png"
import dcPowerVisa from "../assets/img/buy-dc-power-visa.svg"


export default function Footer() {
  return <footer>
    <div className="bg-primary py-5">
      <div className="container d-flex justify-content-around align-items-center">
        <figure className="d-flex align-items-center text-white">
          <img src={digitalComicsIcon} alt="DIGITAL COMICS ICON" />
          <figcaption>DIGITAL COMICS</figcaption>
        </figure>
        <figure className="d-flex align-items-center text-white">
          <img src={merchandiseIcon} alt="DIGITAL COMICS ICON" />
          <figcaption>DC MERCHANDISE</figcaption>
        </figure>
        <figure className="d-flex align-items-center text-white">
          <img src={subscriptionIcon} alt="DIGITAL COMICS ICON" />
          <figcaption>SUBSCRIPTION</figcaption>
        </figure>
        <figure className="d-flex align-items-center text-white">
          <img src={comicShopLocator} alt="DIGITAL COMICS ICON" />
          <figcaption>COMIC SHOP LOCATOR</figcaption>
        </figure>
        <figure className="d-flex align-items-center text-white">
          <img src={dcPowerVisa} alt="DIGITAL COMICS ICON" />
          <figcaption>DC POWER VISA</figcaption>
        </figure>
      </div>
    </div>
  </footer>;
}
