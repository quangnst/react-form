import React from 'react';

class Label extends React.Component {
    render(){
        return(
            <label>
              {this.props.textLabel}
            </label>
        )
    }
}

export default Label;