import "../styles/home.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";
import { carrosel1, carrosel2, carrosel3 } from "../components/Images";
import { Button } from "../components/Button";

export function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <main className="main-container">
      <div className="carousel-container">
        <ul className="nav">
         
          <div className="login-container d-flex flex-row">
            <li className="botao-nav">
              <Button route="/signup" text="Signup" className="link-signup" />
            </li>
            <li className="botao-nav2">
              <Button route="/login" text="Login" />
            </li>
          </div>
        </ul>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="carousel-container img"
              src={carrosel1}
              alt="Primeiro slide"
            />
            <Carousel.Caption>
              <h3>
                <Link to="/">Musica</Link>
              </h3>
              <p>Descricao.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-container img"
              src={carrosel2}
              alt="Segundo slide"
            />
            <Carousel.Caption>
              <h3>
                <Link to="/">Radio</Link>
              </h3>
              <p>
                Descricao
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-container img"
              src={carrosel3}
              alt="Terceiro slide"
            />
            <Carousel.Caption>
              <h3>
                <Link to="/">Video</Link>
              </h3>
              <p>
                Descricao
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </main>
  );
}
