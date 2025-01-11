const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText}
      </label>
      <input
        type={type}
        className="form-input"
        name={name}
        value={value ? value : undefined}
        onChange={handleChange}
      />
    </div>
  );
};
export default FormRow;
