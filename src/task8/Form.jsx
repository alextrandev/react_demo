import { useState } from "react"

function Form({handleSubmit}) {
    const [userInputs, setUserInputs] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        role: ""
    })

    const handleChange = (e) => {
        setUserInputs({
            ...userInputs,
            [e.target.name]: e.target.value
        })
    }

    return (
       <form onChange={handleChange}>
            <label htmlFor="firstname">First name: </label>
            <input 
                type="text"
                name="firstname"
                id="firstname"
                placeholder="John"
                value={userInputs.firstname}
            />
            <label htmlFor="lastname">Lastname </label>
            <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Doe"
                value={userInputs.lastname}
            />
            <label htmlFor="phone">Phone no.: </label>
            <input
                type="number"
                name="phone"
                id="phone"
                placeholder="0123456789"
                value={userInputs.phone}
            />
            <label htmlFor="email">E-mail: </label>
            <input
                type="email"
                name="email"
                id="email"
                placeholder="example@example.com"
                value={userInputs.email}
            />
            <label htmlFor="role">Role: </label>
            <input
                type="text"
                name="role"
                id="role"
                placeholder="Developer"
                value={userInputs.role}
            />
            <button type="submit" onClick={() => handleSubmit(userInputs)}>Submit</button>
        </form>
    )
}

export default Form