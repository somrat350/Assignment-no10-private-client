import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import GoogleBtn from "../../Components/Auth/GoogleBtn";
import DemoBtn from "../../Components/Auth/DemoBtn";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import Loading from "../../Components/Loading";

const Login = () => {
  const { userLoading, setUserLoading, loginUEP } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [showPassword, setShowPassword] = useState(false);
  const [passValidateText, setPassValidateText] = useState("");
  const [password, setPassword] = useState("");

  // password validation
  const passwordValidate = (e) => {
    const tempPass = e.target.value;
    setPassword("");

    if (!/[a-z]/.test(tempPass)) {
      setPassValidateText("Password must contain lowercase.");
      return;
    } else if (!/[A-Z]/.test(tempPass)) {
      setPassValidateText("Password must contain Uppercase.");
      return;
    } else if (tempPass.length < 6) {
      setPassValidateText("Password must 6 letters.");
      return;
    } else {
      setPassValidateText("");
      setPassword(tempPass);
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    if (!password) {
      setPassValidateText("Please enter validate password!");
      return;
    }

    loginUEP(email, password)
      .then(() => {
        navigate(from);
        toast.success("Login successful.");
      })
      .catch((error) => {
        if (
          error.code === "auth/invalid-credential" ||
          error.code === "auth/wrong-password"
        ) {
          toast.error("Invalid email or password. Please try again.");
        } else {
          toast.error(error.message);
        }
      })
      .finally(() => {
        setUserLoading(false);
      });
  };

  if (userLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center p-5">
        <Loading />
      </div>
    );
  }
  return (
    <div className="h-screen w-full flex items-center justify-center p-5">
      <div className="bg-base-300 w-full max-w-md p-10 rounded-2xl">
        <h2 className="text-center text-3xl font-bold">Login your account</h2>
        <p className="text-center text-base font-medium mt-4">
          Don't have an account ?{" "}
          <Link to="/auth/register" className="text-primary ml-1">
            Register
          </Link>
        </p>
        {/* Google */}
        <GoogleBtn />
        <p className="text-center font-bold text-white/50 my-4">Or</p>
        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <input
              required
              name="email"
              type="email"
              placeholder="Email"
              className="bg-base-100 rounded-xl py-4 pl-4 pr-12 w-full"
            />
            <span className="absolute z-10 right-4 top-1/2 -translate-y-1/2 text-lg font-medium p-1">
              <MdEmail />
            </span>
          </div>
          <div className="relative">
            <input
              required
              name="password"
              onChange={passwordValidate}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="bg-base-100 rounded-xl py-4 pl-4 pr-12 w-full"
            />
            {showPassword ? (
              <span
                onClick={() => setShowPassword(false)}
                className="absolute z-10 right-4 top-1/2 -translate-y-1/2 text-lg font-medium p-1 cursor-pointer"
              >
                <FaEye />
              </span>
            ) : (
              <span
                onClick={() => setShowPassword(true)}
                className="absolute z-10 right-4 top-1/2 -translate-y-1/2 text-lg font-medium p-1 cursor-pointer"
              >
                <FaEyeSlash />
              </span>
            )}
          </div>
          {passValidateText && (
            <p className="text-red-500 text-right text-sm mr-2">
              {passValidateText}
            </p>
          )}
          <button
            type="submit"
            className="bg-primary p-4 text-xl font-medium rounded-xl w-full cursor-pointer hover:bg-primary/70 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center font-bold text-white/50 my-4">Or</p>
        {/* Demo */}
        <DemoBtn />
      </div>
    </div>
  );
};

export default Login;
