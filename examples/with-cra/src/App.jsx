import { Button, Paper, InputPassword, FormController, Input } from '@pillar-ui/core'
import { Envelop, Lock } from '@pillar-ui/icons'
import { toCapitalize } from '@pillar-ui/utils'
import { useState } from 'react'
import '@pillar-ui/core/main.css'

function App() {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState({})

  function handleChange(event) {
    const { name, value } = event.target
    const newValue = name === 'email' ? toCapitalize(value) : value
    setFormData((prevFormValues) => ({ ...prevFormValues, [name]: newValue }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const form = e.target

    if (form.checkValidity()) {
      setError({})
    } else {
      const validationErrors = {}

      for (let i = 0; i < form.elements.length; i++) {
        const field = form.elements[i]
        if (!field.checkValidity()) {
          validationErrors[field.name] = field.validationMessage
        }
      }

      setError(validationErrors)
    }

    console.log(formData)
  }

  return (
    <Paper className="u_center">
      <Paper as="form" flow="sm" onSubmit={handleSubmit} width="60-char" border>
        <FormController required label="Name" error={error.name}>
          <Input
            value={formData.name}
            name="name"
            onChange={handleChange}
            placeholder="Default Input"
            suffix={<Envelop />}
          />
        </FormController>
        <FormController required label="Email" error={error.email}>
          <Input
            prefixInput={<Envelop width={16} />}
            value={formData.email}
            name="email"
            onChange={handleChange}
            placeholder="Default Input"
          />
        </FormController>
        <FormController
          error={error.password}
          required
          minLength={7}
          label="Password"
          hint="Enter your password (at least 7 characters)"
        >
          <InputPassword value={formData.password} name="password" onChange={handleChange} />
        </FormController>
        <Button icon={<Lock />}> Login </Button>
      </Paper>
    </Paper>
  )
}

export default App
