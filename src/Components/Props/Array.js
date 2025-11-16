

const Array = (players) => {
  return (
    <div>
      {Object.values(players).map((t, i) =>(
        <p  key ={i}>players : {t}</p>
      )
    )}
    </div>
  )
}

export default Array
