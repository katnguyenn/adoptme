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
    };

    // can turn into an arrow function so 'this' keyword is bound to the scope where the function is defined
    handleIndexClick(event) {
        this.setState({
            // comes back as a string from the Dom, so + to make it a number
            active: +event.target.dataset.index
        })
    }

    render() {
        const { active } = this.state;
        const { images } = this.props

        return (
            <div className="carousel">
                <img src={images[active]} alt="animal" />
                <div className="carousel-smaller">
                    {images.map((photo, index) => (
                        // eslint-disable-next-line
                        // img should be a button
                        <img
                            key={photo}
                            src={photo}
                            data-index={index}
                            onClick={this.handleIndexClick.bind(this)}
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