import React, { useState } from "react";

const App = () => {
  // Now at 1st we will implement two-way data binding after that we wiill proceed.

  const [user, setUser] = useState([]);


  const btnhandler = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="min-h-screen w-full">
      <form
        onSubmit={(e) => {
          btnhandler(e);
        }}
        action=""
      >
        <input
          className="border m-1 p-1"
          type="text"
          placeholder="Enter Your Name"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <button className="border m-1 p-1 m-1 p-1 ">Submit</button>
      </form>
    </div>
  );
};

export default App;
