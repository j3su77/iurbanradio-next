import { FC, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

import styles from "./login.module.css";
import { AuthLayout } from "../../components/layouts";
import { validations } from "../../utils";
import { FormElement } from "../../components/ui";
import { InputField } from '../../components/ui/FormElement';

type FormData = {
  email: string;
  password: string;
};

const LoginPage: FC = () => {
  const router = useRouter();

  const { handleSubmit, register,  formState: { errors }, } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: ""
    },
    mode: "onChange"
  });
  const onSubmit = (data: FormData) => console.log(data);

  const [Error, setError] = useState("");
 
  const [showError, setShowError] = useState(false);

  const onLoginUser = async ({ email, password }: FormData) => {
    // setShowError(false);
    // await signIn("credentials", { email, password });
    console.log(email, password)
  };



  return (
    <AuthLayout
      title="Ingresar"
      pageDescription="Aquí puedes iniciar sesion en iUrban Radio"
    >
      <div className={styles.container_login}>
        <span className={styles.loginTitle}>Iniciar sesión</span>
        <form className={styles.loginForm} onSubmit={handleSubmit(onLoginUser)} >
          <label>Email</label>
          <InputField 
          label="email"
           register={register}
            required 
            error={!!errors.email} 
            errorMessage={errors.email?.message}
            />


          <label>Contraseña</label>
          <InputField 
          label="password" 
          register={register} 
          required 
          error={!!errors.password} 
          errorMessage={errors.password?.message}
          />
          

          <button className={`button ${styles.loginButton}`}>Ingresar</button>

          <div className={styles["content__link-register"]}>
            <Link href="/auth/register">
              <a className={styles.link__register}>
                ¿Aún no tienes una cuenta? Registrate
              </a>
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
