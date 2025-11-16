

const String = ({Team}) => {
  return (
    <div>
            {Object.values(Team).map((t, i) => (
        <p key={i}>Team : {t}</p>
      ))}
    </div>
  )
}

export default String
