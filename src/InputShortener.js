
const InputShortener = () => {
  return (
    <div className="inputContainer">
      <h1> URL <span>Shortener</span></h1>
      <div>
        <input type="text" placeholder="Paste a link to shorten it"/>
        <button>Shorten</button>
      </div>
    </div>
  )
}

export default InputShortener