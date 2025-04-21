import React, { useState } from 'react'
import ProfProjectList from './ProfProjectList';

export default function ProfExperienceSection()  {

  // constructor() {
  //   super();
  //   this.state = {
  //     expanded: true,
  //     activeKey: "1"
  //   };
  //   this.handleSelect = this.handleSelect.bind(this);
  // }

  const [activeKey, setActiveKey] = useState("1");

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
  }

    return (
      <div className="dark:text-white p-6 bg-black">
        <div>
          <h1 className="text-2xl font-bold mt-4">PROFESSIONAL EXPERIENCE</h1>
        </div>
        <div className="mt-4">
        <ProfProjectList activeKey={activeKey} onSelect={handleSelect}/></div>
      </div>
    );
}

