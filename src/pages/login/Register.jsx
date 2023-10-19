import { useContext, useState } from "react";
import { AuthContext } from "../../authContext/AuthContext";
import { Link } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState(null);
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const img = new FormData();
    img.append("image", form[4]?.files[0]);

    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${
      import.meta.env.VITE_imgBB_apiKey
    }`;

    const response = await fetch(url, {
      method: "POST",
      body: img,
    });
    const json = await response.json();

    createUser(form.email.value, form.password.value)
      .then(() => {
        if (json?.status == 200) {
          updateUserProfile(form.name.value, json.data.url).then(() => {
            console.log("update success");
          });
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <form onSubmit={handleRegister}>
          <h2 className="text-2xl font-semibold mb-4">Register</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <select className="w-full p-2 border rounded">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <input type="file" name="file" />
          </div>
          <button className="bg-blue-500 text-white p-2 rounded w-full mb-2">
            Register
          </button>
          <div className="mt-4">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-blue-400 hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
