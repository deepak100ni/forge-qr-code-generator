import React, { useEffect, useState } from 'react';
import QRCode from "react-qr-code";

function App() {
  const [data, setData] = useState('');

const handleChange = async (event) => {
  setData(event.target.value);
}

  return (
    <div>
      <input type='text' onChange={handleChange} />
      <div>
      <QRCode 
      size={256}
      style={{ height: "100x", width: "100px" }}
      value={data}
      viewBox={`0 0 256 256`}
      />
      </div>
    </div>
  );
}

export default App;
