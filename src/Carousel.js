import { Component } from "react";

class Carousel extends Component {
    state = {
        active: 0
    }

    // If no images, here are some default images
    // static: defaultProps will be available on parent Carousel and const carousel = new Carousel
    // ex: carousel.defaultProps will be available
    static defaultProps = {
        images: ["http://pets-images.dev-apis.com/pets/none.jpg"]
    }

    render() {
        const { active } = this.state;
        const { images } = this.props

        return (
            <div className="carousel">
                <img src={images[active]} alt="animal" />
                <div className="carousel-smaller">
                    {images.map((photo, index) => (
                        <img
                            key={photo}
                            src={photo}
                            className={index === active ? "active" : ""}
                            alt="animal thumbnail"
                        />
                    ))}
                </div>
            </div>
        )
    }



}


export default Carousel;