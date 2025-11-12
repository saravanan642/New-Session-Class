import Parent from "./Parent"


const Child = ({Deatils}) => {
  return (
    <div className=" bg-blue-900">
      <Parent name={"saravana"} age= {"20"}/>
      <p> { Deatils?.name ?? ""}</p>
      <p>{ Deatils?.age || ""}</p>

    </div>
  )
}

export default Child
