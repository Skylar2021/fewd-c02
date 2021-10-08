import './styles.css';
import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password === this.state.password 
    this.setState({
      authorized: auth
    });
    
  }

  render() {
    let login = (
      <form action="#" onSubmit={this.authorize }> 
      <label htmlFor="password">Please enter your password: </label>
        <input id="password" type="password" placeholder="Password"/>
        <input type="submit" />
      </form>);
    let conactInfo = (
      <ul>
        <li>
          client@example.com
        </li>
        <li>
          555.555.5555
        </li>
      </ul>
    );
    return (
      <div id="authorization">
        <h1>Contact</h1>
        {this.state.authorized ? conactInfo : login}
        {console.log(this.props)}
      </div>
    );
  }
}

export default Contact;
