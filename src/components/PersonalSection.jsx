import React, { Component } from 'react'
import ProfProjectList from './ProfProjectList';
import PetProjectList from './PetProjectList';

export default class PersonalSection extends Component {

  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }

  render() {
    return (
      <div className='dark:text-white p-6 bg-black'>
        <div>
          <h1 className="text-2xl font-bold mt-4">PET PROJECTS</h1>
        </div>
        <div className="mt-4"><PetProjectList/></div>
      </div>
    );
  }
}

