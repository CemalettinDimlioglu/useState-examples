

const SynteticEvents = () => {
     let text = "Hi Team!"
//   const handleClick = () => alert("Hi Everybody ! ");
//   const handleReset = (text) => alert(text);
const change = ()=>{
     text = "selam"
     console.log(text);
}

  return (
    <div>
    <h1 onClick={change}>{text}</h1>
      {/* <button onClick={handleClick()}>Click</button>
      <button onClick={()=>handleReset("selam")}>reset</button> */}
      <button onClick={(e)=>alert("selam")}>buton</button>
    </div>
  );
};

export default SynteticEvents;
