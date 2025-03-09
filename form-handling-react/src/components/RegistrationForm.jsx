import {useState} from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Name' />
            <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email' />
            <input type='password' name='password' value={formData.password} onChange={handleChange} placeholder='Password' />
            <button type='submit'>Register</button>
        </form>
    );
}

export default RegistrationForm;