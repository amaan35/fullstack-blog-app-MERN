import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [formdata, setformdata] = useState({});
  const [errorMessage, seterrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (event) => {
    setformdata({ ...formdata, [event.target.id]: event.target.value.trim() });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formdata.username || !formdata.email || !formdata.password) {
      seterrorMessage("Please fill out all the fields");
    }
    try {
      setIsLoading(true);
      seterrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      //handling error from server
      if (data.success === false) {
        return seterrorMessage(data.message);
      }
      setIsLoading(false)
      if(res.ok){
        navigate('/sign-in')
      }
    } catch (error) {
      //handling error on client side
      seterrorMessage(error.message);
    }finally{
      setIsLoading(false)
    }
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link
            to="/"
            className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
          >
            <span className="px-1 py-1 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-400 text-white">
              Ali's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              className="bg-gradient-to-r from-indigo-500 to-blue-400"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
