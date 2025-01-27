import InputContainer from "../InputContainer"

const inputObjects = [
  {
    numId: 0,
    id: "summary",
    text: "Summary",
    type: "text",
    placeholder: "e.g. As a Software Engineer with 5+ years of experience, I excel at designing and developing robust and scalable software solutions..."
  }
]

function Summary() {
  const inputs = inputObjects.map(input => 
    <InputContainer 
      key={input.numId}
      id={input.id}
      text={input.text}
      type={input.type}
      placeholder={input.placeholder}
    />
  )

  return(
    <>
    <h2>Personal Summary</h2>
    <div className="inputs">
      {inputs}
    </div>
    </>
  )
}

export default Summary