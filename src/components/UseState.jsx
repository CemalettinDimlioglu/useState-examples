//?! Hook Kullanim Kurallari:
// //* 1. İlk olarak import edilmeliler. import { useState } from "react";
// //* 2. Hook'lar ust seviyede kullanilmalidir. Yani Hook'lar bir
// //*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
// //*    kullanilmamalidir.
// //* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
// //*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
// //*    (Custom hook'lar icerisinde bir hook cagrilabilir)
// //?    https://reactjs.org/docs/hooks-rules.html
// //*

import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  //   // console.log(count);
  // };
  // const decrement = () => {
  //   setCount(count - 1);
  // };

  // const clear = () => {
  //   setCount((count = 0));
  // };

  // //! Alternatives 1
  // const decrement = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   } else {
  //     alert("Counter can not be negative number");
  //   }
  // };
 
  return (
    <div>
      <div className="container text-center mt-4">
        <h2 className="text-danger">Use State Counter</h2>
        <h1 className="display-4">Count:{count}</h1>
        <button onClick={() => setCount(count + 1)} className="btn btn-success">
          INC
        </button>
        <button onClick={() => setCount(0)} className="btn btn-danger">
          CLR
        </button>
        {/* <button onClick={()=> setCount(count-1)} className="btn btn-warning"> */}
        <button
          onClick={() => count > 0 && setCount(count - 1)}
          className="btn btn-warning"
        >
          DEC
        </button>
        {/* //! Alternatives 2
        <button
          onClick={() =>
            count > 0 ? setCount(count - 1) : alert("Should be bigger than 0")
          }
          className="btn btn-warning"
        >
          DEC
        </button> */}
        ;
      </div>
    </div>
  );
};
export default UseState;
