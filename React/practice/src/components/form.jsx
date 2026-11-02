import { useState } from "react"

export default function Form() {
    const [name, setName] = useState({
        name: '',
        age: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setName((prev) => ({ ...prev, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name.name)
        console.log(name.age)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} name="name" /><br />
                <input type="number" onChange={handleChange} name="age" /> <br />
                <button type="submit"> submit </button>
            </form>
        </div>
    )
}
