import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";

class Details extends Component {

   state = { loading: true };
    

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
    render() {
        if(this.state.loading) {
            return <h2>loading</h2>
        }
        const { animal, breed, city, state, description, name, images } = this.state;
        return (
            <div className="details">
                <Carousel images={images} />
                <div>
                    <h1>{name}</h1>
                    <h2>{animal} - {breed} - {city}, {state}</h2>
                    <button>Adopt {name}</button>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}

// by default, react router doesn't pass in all its information to Details
// so wrapping withRouter to Details is going to pass those props in (higher order component)
export default withRouter(Details);