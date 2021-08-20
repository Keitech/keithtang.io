import React from "react";
import { RightContainer } from './ExperienceElements';

class Budget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleInputChange = event => {
    this.setState(
      {
        selected: event.target.id
      },
    );
  };

  render() {
    // const { studentLoanPayment } = this.state;
    // const totalMonthsDisplay = studentLoanPayment;
    return (
        <>
      <div>
        <ul>
          <li>
            <label>
              <input
                id="radio1"
                type="radio"
                name="studentLoanPayment"
                onChange={this.handleInputChange}
              />
              400
            </label>
          </li>
          <li>
            <label>
              <input
                id="radio2"
                type="radio"
                name="studentLoanPayment"
                onChange={this.handleInputChange}
              />
              500
              
            </label>
          </li>
          <li>
            <label>
              <input
                id="radio3"
                type="radio"
                name="studentLoanPayment"
                onChange={this.handleInputChange}
              />
              200
            </label>
          </li>
        </ul>
      </div>
      {this.state.selected === "radio1" && <RightContainer>hidden op1 text</RightContainer>}
      {this.state.selected === "radio2" && <RightContainer>hidden op2 text</RightContainer>}
      {this.state.selected === "radio3" && <RightContainer>hidden op3 text</RightContainer>}
      </>
    );
  }
}

export default Budget;
