import Carousel from 'react-bootstrap/Carousel';

function NoTransitionExample() {
  return (
    <Carousel slide={false}>
      <Carousel.Item className="mainImgCont" >
        <img className="cardimg" src="/sub/image1.JPG" alt="image1 not available"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="mainImgCont" >
      <img className="cardimg" src="/sub/image2.JPG" alt="image1 not available"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="mainImgCont" >
      <img className="cardimg" src="/sub/image3.jpeg" alt="image1 not available" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default NoTransitionExample;