import {Slideshow, TextoSlide, Slide} from "./components/Slideshow"
import styled from "styled-components"
import './index.css'
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'
import img5 from './images/5.jpg'
import img6 from './images/6.jpg'
import img7 from './images/7.jpg'
import img8 from './images/8.jpg'

const Titulo = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom:10px;
`
const App = () => {
  return (
    <main>
      <Titulo>Productos destacados</Titulo>
      <Slideshow controles={true} >
        <Slide>
          <a href="#">
            <img src={img1} alt=''/>
          </a>
          <TextoSlide>
            <p>25% Descuento en teclados</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="#">
            <img src={img2} alt=''/>
          </a>
          <TextoSlide>
            <p>25% Descuento en teclados</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="#">
            <img src={img3} alt=''/>
          </a>
          <TextoSlide>
            <p>25% Descuento en teclados</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="#">
            <img src={img4} alt=''/>
          </a>
          <TextoSlide>
            <p>25% Descuento en teclados</p>
          </TextoSlide>
        </Slide>
      </Slideshow>


      <Titulo>Productos destacados</Titulo>
      <Slideshow controles={false} autoplay={true} velocidad='500' intervalo="5000">
        <Slide>
          <a href="#">
            <img src={img5} alt=''/>
          </a>
          <TextoSlide>
            <p>10% Descuento en Relojes</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="#">
            <img src={img6} alt=''/>
          </a>
          <TextoSlide>
            <p>10% Descuento en Relojes</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="#">
            <img src={img7} alt=''/>
          </a>
          <TextoSlide>
            <p>10% Descuento en Relojes</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="#">
            <img src={img8} alt=''/>
          </a>
          <TextoSlide>
            <p>10% Descuento en Relojes</p>
          </TextoSlide>
        </Slide>
      </Slideshow>
    </main>
  );
};

export default App