import React, { useState } from "react";
import * as Realm from "realm-web";
import { Link,Navigate } from 'react-router-dom';

export default function HomePage() {
    const[redirect,setRedirect]=useState(false);
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCustomer((prev) => ({
      ...customer,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    if (
      customer.password.length > 7 &&
      /[!@#$%^&*(),.?":{}|<>]/.test(customer.password)
    ) {
      const REALM_APP_ID = "products-ndbcu";
      const app = new Realm.App({ id: REALM_APP_ID });
      const credentials = Realm.Credentials.anonymous();

      try {
        // Log in anonymously
        const user = await app.logIn(credentials);

        // Call the Register_store function
        const response = await user.functions.register(
          customer.name,
          customer.email,
          customer.password
        );

        // Check the response from the server
        if (response.result) {
          alert("Registration Successful");
          setRedirect(true);
        } else if (response.error) {
          alert("Registration Failed: " + response.error);
        } else {
          alert("Unexpected response from the server");
        }
      } catch (e) {
        console.error("Registration error:", e);
        alert("Registration Failed: Please try again later");
      }
    } else {
      alert(
        "Password must be at least 8 characters long and contain at least one special character"
      );
    }
  };

  if(redirect){
    return <Navigate to="/login" />
  }

  return (
    <>
      <div className="flex flex-col h-fit justify-center items-center m-20 p-20">
        <div className="text-4xl text-green-500 mb-6">Register</div>
        <form
          className="flex flex-col gap-y-4 md:w-1/2 w-full"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="name"
            className="border rounded-2xl border-gray-400 w-full p-2"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            className="border rounded-2xl border-gray-400 w-full p-2"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            className="border rounded-xl border-gray-400 w-full p-2"
            onChange={handleChange}
          />
          <div className="flex justify-center items-center">
            <button className="bg-green-500 p-5 hover:bg-green-400 text-white rounded-3xl w-96 md:pr-8">
              Register
            </button>
          </div>
        </form>
        <div className="mt-3">
          Already a member?{" "}
          <Link to={'/login'}>
            <span className="underline font-bold">Login now</span>
          </Link>
        </div>
      </div>
    </>
  );
}
