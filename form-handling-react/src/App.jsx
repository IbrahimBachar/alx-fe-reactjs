
import './App.css'
import FormikForm from './components/formikForm'
import RegistrationForm from './components/RegistrationForm'

function App() {

  return (
    <>
    <h1>Registration Form</h1>

    <h2>Controller Form</h2>
      <RegistrationForm />

    <h2>Formik Form</h2>
      <FormikForm />
    </>
    
  )
}

export default App
