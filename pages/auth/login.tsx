import { FC, useContext, useState, useEffect} from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

import { AuthLayout, IurbanSvg } from "../../components";
import { validations } from "../../utils";
import { AuthContext } from "../../context";

import styles from "./login.module.css";

type FormData = {
  email: string;
  password: string;
};

const LoginPage: FC = () => {
  const router = useRouter();
  const { isLoggedIn, errorMessage, logout, loginUser } = useContext(AuthContext);

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const { data, status } = useSession();

  const [Error, setError] = useState("");
 
  const [showError, setShowError] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      const destination = router.query.p?.toString() || "/";
      router.replace(destination);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (watch("password").length !== 0) {
      setPasswordLength(true);
    } else {
      setPasswordLength(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch("password")]);

  const onLoginUser = async ({ email, password }: FormData) => {
    setPasswordShown(false);
    setIsSubmit(true);
    setShowError(false);

    try {
      const userLog: any = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
    

      if (userLog.ok) {
        setIsSubmit(false);
        console.log(userLog);
      
  
      } else {
        setIsSubmit(false);
        setShowError(true);
        setTimeout(() => setShowError(false), 3000);
         logout("Por favor verifica el usuario y/o contraseña")
        return;
      }
      const destination = router.query.p?.toString() || '/';
      router.replace(destination);
    } catch (error) {
      console.log(error);
    }
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <AuthLayout
      title="Ingresar"
      pageDescription="Aquí puedes iniciar sesion en iUrban Radio"
    >
      <div className={styles.loginContent}>
        <div className={styles.iconBack}>
          <IurbanSvg />
        </div>
        <form className={styles.loginForm} onSubmit={handleSubmit(onLoginUser)}>
          <div>
            <h2 className={styles.loginTitle}>Iniciar sesión</h2>
          </div>
          <p className={styles.loginDescription}>
            Bienvenido, inicia sesión para continuar
          </p>

          <div>
            <div className={styles.loginInputs}>
              <div>
                <label className={styles.loginLabel} htmlFor="Correo">Correo</label>
                <input
                  id="email"
                  className={styles.loginInput}
                  required
                  {...register("email", {
                    required: "Este campo es requerido",
                    validate: validations.isEmail,
                  })}
                />
                {errors.email && (
                  <p className={styles.loginInput_error}>
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  className={styles.loginLabel}
                  htmlFor="Contraseña"
                >Contraseña</label>
                <div className={styles.loginBox}>
                  <input
                    id="password"
                    className={styles.loginInput}
                    required
                    type={passwordShown ? "text" : "password"}
                    {...register("password", {
                      required: "Este campo es requerido",
                    })}
                  />
                  {passwordLength && (
                    <a className={styles.loginEye} onClick={togglePassword}>
                      {passwordShown ? (
                        <BsEyeSlashFill className={styles.loginEye} />
                      ) : (
                        <BsEyeFill className={styles.loginEye} />
                      )}
                    </a>
                  )}
                  {errors.password && (
                    <p className={styles.loginInput_error}>
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.loginCheck}>
              <input
                id="checkInput"
                type="checkbox"
                className={styles.loginCheck_input}
              />
              <label htmlFor="checkInput" className={styles.loginCheck_label}>
                Recuerdame
              </label>
            </div>
          </div>

          <div className={styles.loginForm_error}>
            <span
              style={{ display: showError ? "flex" : "none" }}
              className={`${styles.loginForm_error_text} fadeIn`}
            >
              <BiErrorCircle size={30} />
              {errorMessage}
            </span>
          </div>

          <div className={styles.loginButtons}>
            <button
              className={`button ${styles.loginButton}`}
              disabled={isSubmit}
            >
              Ingresar
            </button>

            <Link href="/auth/register">
              <a
                className={`button ${styles.loginButton}  ${styles.loginButton_ghost}`}
              >
                Registrarse
              </a>
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
