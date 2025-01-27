function InputContainer({ id, text, type, placeholder }) {
  const placeholderText = `e.g. ${placeholder}`

  return(
    <div className="input-container">
        <label htmlFor={id}>{text}</label>
        <input id={id} type={type} placeholder={placeholderText}/>
      </div>
  )
}

export default InputContainer