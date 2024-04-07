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
                defaultValue={userInputs.firstname}
            />
            <label htmlFor="lastname">Lastname </label>
            <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Doe"
                defaultValue={userInputs.lastname}
            />
            <label htmlFor="phone">Phone no.: </label>
            <input
                type="number"
                name="phone"
                id="phone"
                placeholder="0123456789"
                defaultValue={userInputs.phone}
            />
            <label htmlFor="email">E-mail: </label>
            <input
                type="email"
                name="email"
                id="email"
                placeholder="example@example.com"
                defaultValue={userInputs.email}
            />
            <label htmlFor="role">Role: </label>
            <input
                type="text"
                name="role"
                id="role"
                placeholder="Developer"
                defaultValue={userInputs.role}
            />
            <button type="submit" onClick={(e) => handleSubmit(userInputs, e)}>Submit</button>
        </form>
    )
}

export default Form