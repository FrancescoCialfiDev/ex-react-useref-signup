import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { useState } from "react"

// Gli utenti devono iscriversi indicando le loro competenze e specializzazioni.

function App() {

  let letters = "abcdefghijklmnopqrstuvwxyz".split("");
  let numbers = "0123456789".split("");
  let symbols = "!@#$%^&*()-_=+[]{}|;:'//,.<>?/`~".split("");

  const [error, setError] = useState({
    username: "",
    password: "",
    shortDesc: "",
  })

  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    password: '',
    specialization: '',
    ageOfExperience: '',
    shortDesc: '',
    available: false,
  })

  function validForm(name, value) {

    // Username Validation
    switch (name) {
      case "username":
        if (!symbols.some((symbol) => value.includes(symbol)) && value.trim() && value.length >= 6) {
          setError((prev) => ({ ...prev, username: "valido" }))
        } else if (value === "") {
          setError((prev) => ({ ...prev, username: "" }))
        } else {
          setError((prev) => ({ ...prev, username: "non valido" }))
        }
        break;

      // Password Validation
      case "password":
        if (value.length >= 8 && letters.some((letter) => value.includes(letter)) && symbols.some((symbol) => value.includes(symbol)) && numbers.some((number) => value.includes(number))) {
          setError((prev) => ({ ...prev, password: "valido" }))
        } else if (value === "") {
          setError((prev) => ({ ...prev, password: "" }))
        } else {
          setError((prev) => ({ ...prev, password: "non valido" }))
        }
        break;

      // Description Validation
      case "shortDesc":
        if (name === "shortDesc" && !value.startsWith(" ") && !value.endsWith(" ") && value.length >= 100 && value.length <= 1000) {
          setError((prev) => ({ ...prev, shortDesc: "valido" }))
        } else if (value === "") {
          setError((prev) => ({ ...prev, shortDesc: "" }))
        } else {
          setError((prev) => ({ ...prev, shortDesc: "non valido" }))
        }
        break;

      default:
        break;
    }
  }

  function handleChange(event) {
    const { value, name, type, checked } = event.target
    validForm(name, value)
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: type !== "checkbox" ? value : checked,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <main className="p-4">
      <form className=" p-4 rounded-4 w-50" style={{ backgroundColor: "#055153" }} onSubmit={handleSubmit}>

        {/*Full Name*/}
        <div className="fullName my-4">
          <input
            required
            name="fullName"
            className="p-2 rounded-1 border-0 w-100"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Inserisci un nome"
          />
        </div>

        {/*Username*/}
        <div className="username my-4">
          <input
            required
            autoComplete="username"
            name="username"
            className="p-2 rounded-1 border-0 w-100"
            type="text"
            value={formData.username}
            onChange={handleChange}
            placeholder="Inserisci un username"
          />
          {error.username === "non valido" && <p style={{ color: "#ff0000", margin: "0px" }}>Campo non valido</p>}
          {error.username === "valido" && <p style={{ color: "#2fd30ed3" }}>Campo valido</p>}
        </div>

        {/*Password*/}
        <div className="password my-4">
          <input
            required
            autoComplete="current-password"
            name="password"
            className="p-2 rounded-1 border-0 w-100"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Inserisci una password"
          />
          {error.password === "non valido" && <p style={{ color: "#ff0000", margin: "0px" }}>Campo non valido</p>}
          {error.password === "valido" && <p style={{ color: "#2fd30ed3" }}>Campo valido</p>}
        </div>

        {/*Specializations*/}
        <div className="specialization my-4">
          <label className="text-white p-2 rounded-1 border-0 w-100" htmlFor="specializzazione"> Inserisci un valore:
            <select className="p-2 mx-2 rounded-2 border-0" value={formData.specialization} name="specialization" required id="specializzazione" onChange={handleChange}>
              <option value="" disabled>Inserisci una specializzazione</option>
              <option value="Full Stack">Full Stack</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
            </select>
          </label>
        </div>

        {/*Age Of Experience*/}
        <div className="esperience my-4">
          <input
            required
            name="ageOfExperience"
            className="p-2 rounded-1 border-0 w-100"
            type="number"
            value={formData.ageOfExperience}
            onChange={handleChange}
            placeholder="Inserisci anni di esperienza"
            min={"0"}
          />
        </div>

        {/*Description*/}
        <div className="description my-4">
          <textarea
            required
            className="p-2 rounded-1 border-0 w-100"
            name="shortDesc"
            id="shortDesc"
            value={formData.shortDesc}
            onChange={handleChange}
            placeholder="Inserisci una descrizione"
          ></textarea>
          {error.shortDesc === "non valido" && <p style={{ color: "#ff0000", margin: "0px" }}>Campo non valido</p>}
          {error.shortDesc === "valido" && <p style={{ color: "#2fd30ed3" }}>Campo valido</p>}
        </div>

        {/*CheckBox*/}
        <div className="checkbox my-4">
          <div className="d-flex gap-2">
            <div>
              <input className="m-2" type="checkbox" name="available" id="accetto" onChange={handleChange} checked={formData.available} />
              <label htmlFor="accetto" className="text-white">Disponibile</label>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-success">Invia</button>

      </form>
    </main >
  )
}

export default App
