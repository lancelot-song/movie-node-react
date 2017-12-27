require('./SignDialog.css');
import React from 'react';
import Dialog from 'components/Dialog/Dialog';
import Signup from './signup';
import Signin from './signin';
import Signout from './signout';

class Sign extends React.Component {
  constructor (props){
      super(props);
      this.state = {
          tip : {
              show : false,
              txt : ""
          }
      }
  }
  submitForm = (category, event) =>{
      event.preventDefault();
      const _form = event.target;
      const _type = _form.method;
      const _action = _form.action;

      const self = this;

      fetch(_action, {
          method: _type,
          credentials: 'include',
          body: new FormData(_form)
      })
      .then(function(response) {
          if (response.state >= 400) {
            throw new Error('Bad response from server');
          }
          return response.json();
      })
      .then(function(stories) {
          self.refs[category].submitCallback(stories);
      });
  }
  render() {
      const {type} = this.props;
      return (
          <Dialog>
              {type==='signup' &&
                  <Signup ref='signup' submitForm={this.submitForm} hideModal={this.props.hideModal} />
              }
              {type==='signin' &&
                  <Signin ref='signin' submitForm={this.submitForm} hideModal={this.props.hideModal} />
              }
              {type==='signout' &&
                  <Signout ref='signout' submitForm={this.submitForm} hideModal={this.props.hideModal} />
              }
          </Dialog>
      );
  }
}

Sign.defaultProps = {};
Sign.PropsType = {}

export default Sign;
