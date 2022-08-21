import "./App.css";
import { Component } from "react";

function Divbox(props) {
  return (
    <div className="divBox">
      <h1>{props.heading}</h1>
      {props.children}
    </div>
  );
}

function Form(props) {
  return (
    <form action="submit" onSubmit={props.onSubmit}>
      <div>
        <label htmlFor="usern">Name</label>
        <input
          onChange={props.onChange}
          type="text"
          id="usern"
          placeholder="what's your name"
        />
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          onChange={props.onChange}
          id="email"
          type="email"
          placeholder="example@email.com"
        />
      </div>
      <select onChange={props.onChange} id="">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="non-binary">Rather not say</option>
      </select>
      <button>Submit</button>
    </form>
  );
}

function Result(props) {
  return (
    <div>
      <h2>Name</h2>
      <p>{props.usern}</p>
      <h2>Email Address</h2>
      <p>{props.email}</p>
      <h2>Gender</h2>
      <p>{props.gender}</p>
    </div>
  );
}

const updat = <h4>Submitted!</h4>

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usern: "",
      email: "",
      gender: "",
      submitUpdate: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({submitUpdate: updat})

  }

  handleChange(event) {
    const target = event.target.type;
    const value = event.target.value;
    switch (target) {
      case "text":
        this.setState({ usern: value });
        break;
      case "email":
        this.setState({ email: value });
        break;
      case "select-one":
        this.setState({ gender: value });
        break;
    }
  }

  render() {
    return (
      <div className="bigDiv">
        <Divbox heading="Form">
          <Form onChange={this.handleChange} onSubmit={this.handleSubmit} />
        </Divbox>
        <Divbox heading="Profile">
          <h3>Update the form to update your profile details live</h3>
          <Result
            heading="Your Profile"
            usern={this.state.usern}
            email={this.state.email}
            gender={this.state.gender}
          />
          {this.state.submitUpdate}
        </Divbox>
      </div>
    );
  }
}

export default App;
