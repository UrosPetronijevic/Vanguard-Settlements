import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/auth/AuthForm";
import signInUser from "../../utils/auth/signInUser";
import useSessionStore from "../../stores/sessionStore";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { session } = useSessionStore();
  const navigate = useNavigate();

  console.log(session);

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signInUser(email, password);

      if (result.success) {
        navigate("/homepage");
      }
    } catch (error) {
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <AuthForm
        handleForm={handleSignIn}
        formType="signin"
        setEmail={setEmail}
        setPassword={setPassword}
        error={error}
        loading={loading}
      />
    </div>
  );
}
