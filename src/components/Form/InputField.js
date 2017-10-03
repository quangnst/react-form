import React from 'react';

class InputField extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }

        this.onChange = this.onChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }
    
    validateForm(e) {
        const target = e.target;
        var reg = this.props.regExp;
        if (!reg.test(this.state.value))
        {
            target.classList.add('error')
            return false;
        } else {
            target.classList.remove('error')
        }
    }

    onChange(e){
        const value = e.target.value;
        this.setState({
            value: value
        },this.validateForm(e))
    }

    render(){
        return(
            <input
                className={`form-control ${this.props.className ? this.props.className: ''}`}
                id={this.props.idName}
                type={this.props.textType ? this.props.textType : 'text'}
                name={this.props.textName}
                placeholder={this.props.textPlaceHolder}
                onChange={this.onChange}
            />
        )
    }
}

export default InputField;