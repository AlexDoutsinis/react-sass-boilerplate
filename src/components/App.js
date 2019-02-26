import React, { useState } from "react";
import "../sass/main.scss";

const App = () => {
  const state = { msg: "Hello" };

  const [msg, setMsg] = useState(state);

  return (
    <div className="container">
      <div>{msg.msg}</div>
      <button onClick={() => setMsg({ msg: "Helloooo" })}>Click here</button>
      <button onClick={() => setMsg({ msg: "Hello" })}>Click here too</button>
    </div>
  );
};

export default App;
