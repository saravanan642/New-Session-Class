import Array from "./Array"
import Parent from "./Parent"
import String from "./String"
import SubChild from './Subchild'
import Boolean from "./Boolean"
import Sample from "./Sample"
import Arrayofobject from "./Arrayofobject"


const Child = ({ Deatils }) => {
  return (
    <div >
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
        <Sample employee={{
          Named: "saravanan",
          Sallary: "10000",
          Month: "May"
        }} />
      </div>

      <div>
        <Arrayofobject Students={[
          { Std1: "kalai", Age: 40, Sallary: "4k" },
          { Std2: "Ram", Age2: 22, Sallary2: "3k" },
          { Std3: "pavin ", Age: 33, Sallary: "5k" }
        ]}
        />
      </div>


    </div>
  )
}

export default Child
