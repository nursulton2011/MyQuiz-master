import { forwardRef } from "react"

export const Input = ({ label, type, name, id, placeholder, errorMessage, ...props }) => {
  return (
    <label className="input-wrapper" htmlFor={id}>
      {label}
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required
        {...props}
      />
      <span id="error-message">{errorMessage}</span>
    </label>
  )
}
