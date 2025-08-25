import "./App.scss";
import { useState } from "react";
import rocketUrl from "./assets/images/rocket.png";
import { ReactComponent as Logo } from "./assets/icons/logo.svg";
import { ReactComponent as CartIcon } from "./assets/icons/cart.svg";

const heroUrl = `${process.env.PUBLIC_URL}/assets/images/hero.webp`;
const earthUrl = `${process.env.PUBLIC_URL}/assets/images/earth.webp`;
const heroUrlMobile = `${process.env.PUBLIC_URL}/assets/images/hero-mobile.webp`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`app ${menuOpen ? "no-scroll" : ""}`}>
      {/* Header */}
      <header className="header">
        <a href="/" className="header__logo" aria-label="GO">
          <Logo className="header__logo-icon" />
        </a>

        <nav className="header__nav" aria-label="Primary">
          <ul className="header__list">
            <li className="header__item">
              <a href="/" className="header__link">
                Home
              </a>
            </li>

            <li className="header__item">
              <a href="/" className="header__link">
                Products
              </a>
            </li>

            <li className="header__item">
              <a href="/" className="header__cart-link" aria-label="Cart">
                <CartIcon className="header__cart-icon" />
              </a>
            </li>
          </ul>
        </nav>

        <button
          className={`burger ${menuOpen ? "is-open" : ""}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mnav"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div
        className={`overlay ${menuOpen ? "is-open" : ""}`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      />
      <nav
        id="mnav"
        className={`mnav ${menuOpen ? "is-open" : ""}`}
        aria-label="Mobile"
      >
        <button
          className="mnav__close"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          ×
        </button>
        <ul className="mnav__list">
          <li>
            <a href="/" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="/" onClick={closeMenu}>
              Products
            </a>
          </li>
          <li>
            <a href="/" onClick={closeMenu}>
              Cart
            </a>
          </li>
        </ul>
      </nav>

      <main>
        {/* Hero */}
        <section
          className="hero"
          style={{
            "--hero-bg-mobile": `url("${heroUrlMobile}")`,
            "--hero-bg": `url(${heroUrl})`,
            "--earth-bg": `url(${earthUrl})`,
          }}
          aria-labelledby="hero-title"
        >
          <div className="hero__inner">
            <h1 id="hero-title" className="hero__title">
              Discover the vast <br /> expanses of{" "}
              <span className="hero__accent">space</span>
            </h1>

            <p className="hero__subtitle">
              Where the possibilities are{" "}
              <span className="hero__accent--lime">endless!</span>
            </p>

            <a href="/" className="btn">
              Learn more
            </a>
          </div>
        </section>

        {/* Offers */}
        <section class="offers" aria-labelledby="offers-title">
          <h2 class="offers__title" id="offers-title">
            Offers
          </h2>

          <div class="offers__grid">
            {/* <!-- Large --> */}
            <article class="card card--lg card--bg-offer-1">
              <h3 class="card__title">
                Move the borders
                <br />
                of reality!
              </h3>
              <p class="card__subtitle">
                Go on a space adventure - it's possible with us!
              </p>
              <a href="/" class="btn btn--outline">
                Learn more
              </a>
            </article>

            {/* <!-- Small left --> */}
            <article class="card card--bg-offer-2">
              <h3 class="card__title">
                Space is not
                <br />
                just stars and planets
              </h3>
              <p class="card__subtitle">Go on a space adventure</p>
              <a href="/" class="btn btn--outline">
                Learn more
              </a>
            </article>

            {/* <!-- Small right --> */}
            <article class="card card--bg-offer-3">
              <h3 class="card__title">
                For those
                <br />
                who dream of stars
              </h3>
              <p class="card__subtitle">Our offer: make your dream come true</p>
              <a href="/" class="btn btn--outline">
                Learn more
              </a>
            </article>

            {/* <!-- Large bottom --> */}
            <article class="card card--lg card--bg-offer-4">
              <h3 class="card__title">
                Fulfill your
                <br />
                fantastic dreams
              </h3>
              <p class="card__subtitle">Space has never been so close</p>
              <a href="/" class="btn btn--outline">
                Learn more
              </a>
            </article>
          </div>
        </section>

        <section className="about" aria-labelledby="about-title">
          <input id="about-more" type="checkbox" className="about__toggle" />

          <div className="about__inner">
            <h2 className="about__title" id="about-title">
              Embark on a space journey
            </h2>

            <div className="about__text-wrapper">
              <p className="about__text">
                Travelling into space is one of the most exciting and
                unforgettable adventures that can change your life forever. And
                if you have ever dreamed of exploring stars, planets and
                galaxies, then our company is ready to help you realize this
                dream. We offer a unique experience that will allow you to go on
                a space journey and see all the secrets of the universe. We
                guarantee that every moment in space will be filled with
                incredible impressions, excitement and new discoveries. Our team
                of professionals takes care of your safety and comfort so that
                you can fully enjoy your adventure in space. We offer various
                options for space excursions.
              </p>
            </div>
            <label className="btn btn--link" htmlFor="about-more">
              Read more
            </label>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer" role="contentinfo">
        <div className="footer__inner">
          <img src={rocketUrl} alt="" className="footer__icon" />
          <p className="footer__text">Exciting space adventure!</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
