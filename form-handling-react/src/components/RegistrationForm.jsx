import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!username) validationErrors.username = "اسم المستخدم مطلوب";
    if (!email) validationErrors.email = "البريد الإلكتروني مطلوب";
    if (!password) validationErrors.password = "كلمة المرور مطلوبة";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log({ username, email, password });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>اسم المستخدم:</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      </div>

      <div>
        <label>البريد الإلكتروني:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
        <label>كلمة المرور:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      <button type="submit">تسجيل</button>
    </form>
  );
}

export default RegistrationForm;
