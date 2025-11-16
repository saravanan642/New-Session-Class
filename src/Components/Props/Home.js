import Parent from "./Parent"
import String from "./String"
import SubChild from './Subchild'



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

    </div>
  )
}

export default Child
