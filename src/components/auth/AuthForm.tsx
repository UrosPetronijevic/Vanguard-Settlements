import type { FormType } from "../../types/formType";

import Input from "../../ui/input";
import AuthHeader from "./AuthHeader";

type AuthFormProps = {
  formType: FormType;
  handleForm: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  error: any;
};

export default function AuthForm({
  formType,
  handleForm,
  setEmail,
  setPassword,
  loading,
  error,
}: AuthFormProps) {
  return (
    <form onSubmit={handleForm} className="max-w-md m-auto pt-24">
      <AuthHeader formType={formType} />

      <div className="flex flex-col py-4">
        <Input setFunc={setEmail} inputType="email" />

        <Input setFunc={setPassword} inputType="password" />

        <button disabled={loading}>
          {formType === "signup" ? "Sign up" : "Sign in"}
        </button>

        {error && <p className="text-red-500 text-center pt-4">{error}</p>}
      </div>
    </form>
  );
}
