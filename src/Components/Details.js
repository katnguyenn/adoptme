import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {

    state = { loading: true, showModal: false };


    async componentDidMount() {
        const res = await fetch(
            // this refers to Details component
            // prop is passed down from the parent
            // match and params are coming from react-router in App.js(/details/:id)
            // match: matched path
            // params: parameters from the user
            // id: in /details/:id
            `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
        )
        const json = await res.json()
        this.setState(
            Object.assign(
                {
                    loading: false,
                },
                // name, location, description will all be passed in
                json.pets[0]

            )
        )
    }

    toggleModal = () =>
        this.setState({ showModal: !this.state.showModal });
    adopt = () => (window.location = "http://bit.ly/pet-adopt");
    render() {
        if (this.state.loading) {
            return <h2>loading</h2>
        }
        const { animal, breed, city, state, description, name, images, showModal } = this.state;
        return (
            <div className="details">
                <Carousel images={images} />
                <div>
                    <h1>{name}</h1>
                    <h2>{animal} - {breed} - {city}, {state}</h2>
                    <ThemeContext.Consumer>
                        {([theme]) => (
                            <button 
                            onClick={this.toggleModal}
                            style={{ backgroundColor: theme }}>Adopt {name}</button>
                        )}
                    </ThemeContext.Consumer>

                    <p>{description}</p>
                    
                    {
                        showModal ? (
                            <Modal>
                                <div>
                                    <h1>Would you like to adopt {name}?</h1>
                                    <div className="buttons">
                                        <button onClick={this.adopt}>Yes</button>
                                        <button onClick={this.toggleModal}>No</button>
                                    </div>
                                </div>
                            </Modal>
                        ) : null
                    }
                </div>
            </div>
        )
    }
}

// by default, react router doesn't pass in all its information to Details
// so wrapping withRouter to Details is going to pass those props in (higher order component)
const DetailsWithRouter = withRouter(Details)

export default function DetailsWithErrorBoundary() {
    return (
        <ErrorBoundary>
            <DetailsWithRouter />
        </ErrorBoundary>
    )
}