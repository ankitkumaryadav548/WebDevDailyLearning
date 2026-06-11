// Forms are the primary way users input data. Learn controlled vs uncontrolled components, form handling patterns, and validation with error messages.

// Controlled components store form data in React state — React is the "single source of truth". Uncontrolled components store data in the DOM itself (accessed via refs). Controlled is recommended for validation.

function ControlledForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // { username, email, password }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input name="email" type="email"
        value={formData.email} onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
}