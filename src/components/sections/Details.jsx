import InputContainer from "../InputContainer"

const inputObjects = [
  {
    numId: 0,
    id: "first-name",
    text: "First Name",
    type: "text",
    placeholder: "Jane"
  },
  {
    numId: 1,
    id: "second-name",
    text: "Second Name",
    type: "text",
    placeholder: "Smith"
  },
  {
    numId: 2,
    id: "job-title",
    text: "Job Title",
    type: "text",
    placeholder: "Software Engineer"
  },
  {
    numId: 3,
    id: "website",
    text: "Website",
    type: "text",
    placeholder: "jane-portfolio.com"
  },
  {
    numId: 4,
    id: "email",
    text: "Email Address",
    type: "email",
    placeholder: "jane.smith@example.com"
  },
  {
    numId: 5,
    id: "phone",
    text: "Phone Number",
    type: "number",
    placeholder: "+44 7738530265"
  },
  {
    numId: 6,
    id: "location",
    text: "Location",
    type: "text",
    placeholder: "City, United Kingdom"
  },
]

function Details() {
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
    <h2>Details</h2>
    <div className="inputs">
      {inputs}
    </div>
    </>
  )
}

export default Details