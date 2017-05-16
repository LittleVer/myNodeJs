/**
 * Created by little_ver on 2017/4/24.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types';
var name = "杜华成";
var list = ['蓝山咖啡','猫屎咖啡','拿铁'];
class CommonForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login:true
        };
        this.handleHelloClick = this.handleHelloClick.bind(this);
    }
    handleHelloClick() {
        this.setState({login:!this.state.login});
        //this.refs.helloSpan.innerHTML = `Hello World ${this.props.name}`;
    }
    render() {
        let text = `Hello ${this.state.login?this.props.name:'请登录'}`;
        return (
          <div>
              <span ref="helloSpan" onClick={this.handleHelloClick}>
                  {text}
              </span>
              <ol>
                  {
                  list.map((key, i) => <li key={key}>{i+':'+key}</li>)
                  }
              </ol>
              <ul>
                  {
                      this.props.children.map((key,i)=><li key={i}>{key}</li>)
                  }
              </ul>
          </div>
        );
    }
}

CommonForm.propTypes = {
    name : PropTypes.string.isRequired
};
CommonForm.defaultProps = {
    name : 'webwork'
};
export default CommonForm;