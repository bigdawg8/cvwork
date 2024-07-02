import React, { useState } from 'react';

const Z = () => {
    const [toggle,setToggle] = useState(true);
    const toggleChange = () =>{
        setToggle(!toggle);
    }
  return (
    <div>
      <h1>About page</h1>
      <button onClick={toggleChange}>{toggle ? "Expand" : "Shrink"}</button>
      {toggle && (<div className='article'>
      <h2>Article</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
       </div>)}
    </div>
  )
}

export default Z
