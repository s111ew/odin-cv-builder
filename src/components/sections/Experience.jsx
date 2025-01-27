import InputContainer from "../InputContainer"

const inputObjects = [
  {
    numId: 0,
    id: "job-title",
    text: "Job Title",
    type: "text",
    placeholder: "Software Engineer"
  },
  {
    numId: 1,
    id: "company",
    text: "Company",
    type: "text",
    placeholder: "Google"
  },
  {
    numId: 2,
    id: "location",
    text: "Location",
    type: "text",
    placeholder: "London, UK"
  },
  {
    numId: 3,
    id: "date",
    text: "Finish Date",
    type: "date",
    placeholder: "01/01/2025"
  },
  {
    numId: 4,
    id: "responsibilities",
    text: "Responsibilities & Achievements",
    type: "text",
    placeholder: "Increased user engagement by 13% by implementing algorithmic solutions"
  },
]

function Experience() {
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
    <h2>Experience
      
    </h2>
    <div className="inputs">
      {inputs}
    </div>
    </>
  )
}

export default Experience