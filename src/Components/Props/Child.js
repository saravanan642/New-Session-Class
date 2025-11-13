import Parent from "./Parent"
import Subchild from "./Subchild"


const Child = ({Deatils}) => {
  return (
    <div className=" bg-blue-900">
      <Parent name={"saravana"} age= {"20"}/>
      <p> { Deatils?.name ?? ""}</p>
      <p>{ Deatils?.age || ""}</p>
      <Subchild marks ={"67"}/>
    </div>
  )
}

export default Child
