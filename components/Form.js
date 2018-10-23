import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <fieldset>
          name
          <input type="text" name="name" />
          email
          <input type="text" name="email" />
          <button type="submit">Sign Up!</button>
        </fieldset>
      </form>
    );
  }
}

export default Form;
