import React, { Component } from 'react';
import Label from './Label';
import InputField from './InputField';

class Form extends Component {
  constructor(){
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
  }

  render() {
    return (
      <div className="react-form">
        <form onSubmit={this.handleSubmit}>

          {/* Form group */}
          <div className="form-group">
            <Label textLabel="Email" />
            <InputField 
              textName="email" 
              textPlaceHolder="xyz@gmail.com" 
              regExp = { /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/ }
            />
          </div>

          {/* Form group */}
          <div className="form-group">
            <Label textLabel="Password" />
            <InputField 
              textName="password"
              textType="password"
              textPlaceHolder="Your password" 
              regExp = { /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/ }
            />
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
