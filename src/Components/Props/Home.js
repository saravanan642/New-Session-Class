import Array from "./Array"
import Parent from "./Parent"
import String from "./String"
import SubChild from './Subchild'
import Boolean from "./Boolean"
import Sample from "./Sample"


const Child = ({ Deatils }) => {
  return (
    <div className=" bg-blue-900">
      <Parent name={"saravana"} age={"20"} />
      <p> {Deatils?.name ?? ""}</p>
      <p>{Deatils?.age || ""}</p>
      <div>
        <SubChild marks={"67"} />
      </div>
      <div>
        <String Team={{
          1: "mumbai",
          2: "chennai",
          3: "kolkata"
        }} />
      </div>

      <div>
        <Array players={["Virat", "Rohit", "Hardik"]} />
      </div>
      <div>
        <Boolean />
      </div>

      <div>
        <Sample employee = {{
          Named : "saravanan",
          Sallary : "10000",
          Month : "May"
          
         
        }}/>
           
        
      </div>
    </div>
  )
}

export default Child
