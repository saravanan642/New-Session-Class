import Buttonfunction from "./Buttonfunction"


const Parent = (Props) => {
  return (
    <div>
      <p>  Name -  {Props.name }</p>
      <p> Age - {Props.age} </p>
   
      <div>
        <Buttonfunction  Click = {()=>{alert ( "Button clicked ")} }/>
          <button >Click me</button>
      </div>



    </div>
  )
}

export default Parent;
