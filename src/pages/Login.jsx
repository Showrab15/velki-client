import { useContext } from "react";
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { AuthContext } from "../../src/Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      const loggedUser = result.user;
      // console.log(loggedUser);
      const savedUser = {
        name: loggedUser.displayName,
        email: loggedUser.email,
      };
      fetch(
        "https://velkii-server.vercel.app/users",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        }
      )
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
          alert("user login successfull by google");
        });
    });
  };
  return (
    <div className="text-center my-8">
      <button onClick={handleGoogleLogin} className="bg-blue-500 rounded-lg p-3 px-20">
        <FaGoogle className="text-white"></FaGoogle>
      </button>
    </div>
  );
};

export default Login;
