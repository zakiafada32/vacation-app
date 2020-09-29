import React, { Component } from 'react';
import InputNumber from 'elements/Form/InputNumber';
import InputDate from 'elements/Form/InputDate';

export default class Example extends Component {
  // example input number
  // state = {
  //   value: '1',
  // };
  // handleChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };
  // render() {
  //   console.log(this.state);
  //   return (
  //     <div className='container'>
  //       <div
  //         className='row align-items-center justify-content-center'
  //         style={{ height: '100vh' }}
  //       >
  //         <div className='col-auto'>
  //           <InputNumber
  //             max={30}
  //             suffix=' night'
  //             onChange={this.handleChange}
  //             name='value'
  //             value={this.state.value}
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // example input date
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className='container'>
        <div
          className='row align-items-center justify-content-center'
          style={{ height: '100vh' }}
        >
          <div className='col-auto'>
            <InputDate
              max={30}
              onChange={this.handleChange}
              name='value'
              value={this.state.value}
            />
          </div>
        </div>
      </div>
    );
  }
}
