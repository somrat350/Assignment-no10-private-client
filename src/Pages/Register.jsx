import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaImage, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../Hooks/useAuth";
import Loading from "../Components/Loading";

const Register = () => {
  const { user, userLoading, setUserLoading, createUG, createUEP, updateUser } =
    useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [passValidateText, setPassValidateText] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState(true);

  useEffect(() => {
    if (user && !userLoading) {
      navigate(from, { replace: true });
    }
  }, [user, userLoading, navigate, from]);

  if (userLoading) return <Loading />;

  const passwordValidate = (e) => {
    const tempPass = e.target.value;

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
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoUrl = e.target.photoUrl.value;

    if (!password) {
      toast.error("Please enter validate password!");
      return;
    }

    const updatedObj = {
      displayName: name,
      photoURL: photoUrl,
    };

    createUEP(email, password)
      .then(() => {
        return updateUser(updatedObj);
      })
      .then(() => {
        navigate(from, { replace: true });
        toast.success("Register successful.");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          navigate("/login");
          toast.error(
            "This email is already registered. Please log in instead."
          );
        } else {
          toast.error(error.message);
        }
      })
      .finally(() => {
        setUserLoading(false);
      });
  };

  const handleCreateGoogle = () => {
    createUG()
      .then(() => {
        navigate(from, { replace: true });
        toast.success("Sign Up successful.");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setUserLoading(false);
      });
  };

  return (
    <div className="max-w-7xl mx-auto p-5 flex items-center justify-center">
      <title>Register | RentWheels</title>
      <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden ">
        <div className="flex flex-col sm:flex-row gap-2 bg-indigo-100">
          <div className="sm:w-1/2 flex flex-col gap-3 p-5 items-center justify-center bg-primary text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-center">
              Hello, Welcome!
            </h2>
            <p>Already have an account?</p>
            <Link
              to="/login"
              className="btn border-none text-xl font-medium text-primary bg-white rounded-full"
            >
              Login
            </Link>
          </div>

          <div className="sm:w-1/2 flex flex-col gap-4 p-2 sm:p-5 justify-center">
            <h2 className="text-4xl font-bold text-center text-black">
              Register
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full h-10 ps-2 pe-8 border border-gray-400 rounded-sm outline-none text-gray-600 font-medium"
                  required
                />
                <FaUser className="absolute top-1/4 right-2 text-gray-600" />
              </div>
              {/* Photo url */}
              <div className="relative">
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="Photo URL"
                  className="w-full h-10 ps-2 pe-8 border border-gray-400 rounded-sm outline-none text-gray-600 font-medium"
                  required
                />
                <FaImage className="absolute top-1/4 right-2 text-gray-600" />
              </div>
              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full h-10 ps-2 pe-8 border border-gray-400 rounded-sm outline-none text-gray-600 font-medium"
                  required
                />
                <MdEmail className="absolute top-1/4 right-2 text-gray-600" />
              </div>
              {/* Password */}
              <div className="relative">
                <input
                  onChange={passwordValidate}
                  type={passwordType ? "password" : "text"}
                  name="password"
                  placeholder="Password"
                  className="w-full h-10 ps-2 pe-8 border border-gray-400 rounded-sm outline-none text-gray-600 font-medium"
                  required
                />
                {passwordType ? (
                  <FaEyeSlash
                    onClick={() => setPasswordType(!passwordType)}
                    className="absolute top-1/4 right-2 text-gray-600 cursor-pointer"
                  />
                ) : (
                  <FaEye
                    onClick={() => setPasswordType(!passwordType)}
                    className="absolute top-1/4 right-2 text-gray-600 cursor-pointer"
                  />
                )}
              </div>
              <span className="text-[12px] text-right text-red-500">
                {passValidateText}
              </span>
              <button className="btn btn-primary border-none text-lg font-medium">
                Register
              </button>
            </form>
            <div className="flex items-center justify-center gap-2">
              <div className="h-0.5 w-12 bg-gray-400"></div>
              <span className="text-gray-600">or</span>
              <div className="h-0.5 w-12 bg-gray-400"></div>
            </div>
            <button
              onClick={handleCreateGoogle}
              className="btn bg-black text-white border-black"
            >
              <svg
                aria-label="Google logo"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
