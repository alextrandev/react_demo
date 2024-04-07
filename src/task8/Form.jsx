import { useState } from "react"

function Form() {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userInputs);
    }

    return (
       <form>
            <label htmlFor="firstname">First name: </label>
            <input 
                type="text"
                name="firstname"
                id="firstname"
                placeholder="John"
                value={userInputs.firstname}
                onChange={handleChange}
            />
            <label htmlFor="lastname">Lastname </label>
            <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Doe"
                value={userInputs.lastname}
                onChange={handleChange}
            />
            <label htmlFor="phone">Phone no.: </label>
            <input
                type="number"
                name="phone"
                id="phone"
                placeholder="0123456789"
                value={userInputs.phone}
                onChange={handleChange}
            />
            <label htmlFor="email">E-mail: </label>
            <input
                type="email"
                name="email"
                id="email"
                placeholder="example@example.com"
                value={userInputs.email}
                onChange={handleChange}
            />
            <label htmlFor="role">Role: </label>
            <input
                type="text"
                name="role"
                id="role"
                placeholder="Developer"
                value={userInputs.role}
                onChange={handleChange}
            />
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default Form