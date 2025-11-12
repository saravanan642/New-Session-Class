import Parent from "./Parent"


const Child = ({Deatils}) => {
  return (
    <div>
      <Parent name={"saravana"} age= {"20"}/>
      <p> { Deatils?.name ?? ""}</p>
      <p>{ Deatils?.age || ""}</p>

    </div>
  )
}

export default Child
