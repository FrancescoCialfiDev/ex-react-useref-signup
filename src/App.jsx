import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { useState } from "react"

// Gli utenti devono iscriversi indicando le loro competenze e specializzazioni.

function App() {

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'//,.<>?/`~";

  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    password: '',
    specialization: '',
    ageOfExperience: '',
    shortDesc: '',
    available: false,
  })

  function handleChange(event) {
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value
    setFormData(() => ({
      ...formData,
      [event.target.name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <main className="p-4">

      <form className="d-flex flex-column bg-secondary p-4 rounded-4 gap-2 w-50" onSubmit={handleSubmit}>

        {/*Full Name*/}
        <input
          name="fullName"
          className="px-2 rounded-1 border-0"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Inserisci un nome"

        />

        {/*Username*/}
        <input
          autoComplete="username"
          name="username"
          className="px-2 rounded-1 border-0"
          type="text"
          value={formData.username}
          onChange={handleChange}
          placeholder="Inserisci un username"

        />

        {/*Password*/}
        <input
          autoComplete="current-password"
          name="password"
          className="px-2 rounded-1 border-0"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Inserisci una password numerica"

        />

        {/*Specializations*/}
        <label className="text-white px-2 rounded-1 border-0" htmlFor="specializzazione"> Inserisci un valore:
          <select className="px-2 mx-2 rounded-2 border-0" value={formData.specialization} name="specialization" id="specializzazione" onChange={handleChange}>
            <option value="" disabled>Inserisci una specialization</option>
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </label>


        {/*Age Of Experience*/}
        <input
          name="ageOfExperience"
          className="px-2 rounded-1 border-0"
          type="number"
          value={formData.ageOfExperience}
          onChange={handleChange}
          placeholder="Inserisci anni di esperienza"
          min={"0"}

        />

        {/*Description*/}
        <textarea
          className="px-2 rounded-1 border-0"
          name="shortDesc"
          id="shortDesc"
          value={formData.shortDesc}
          onChange={handleChange}
          placeholder="Inserisci una descrizione"

        ></textarea>

        {/*CheckBox*/}
        <div className="d-flex gap-2">
          <div>
            <input className="m-2" type="checkbox" name="available" id="accetto" onChange={handleChange} checked={formData.available} />
            <label htmlFor="accetto" className="text-white">Disponibile</label>
          </div>
        </div>
        <button type="submit" className="btn btn-success">Invia</button>

      </form>

    </main >
  )
}

export default App
