import React, { useState } from "react";
import * as Realm from "realm-web";
import { Link,Navigate } from 'react-router-dom';
import { UserContext } from "../UserContext";

export default function LoginPage() {
  const { setUser } = React.useContext(UserContext);
    const[redirect,setRedirect]=useState(false);
    const [customer, setCustomer] = useState({
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
    
          const REALM_APP_ID = "products-ndbcu";
          const app = new Realm.App({ id: REALM_APP_ID });
          const credentials = Realm.Credentials.anonymous();
    
          try {
            // Log in anonymously
            const user = await app.logIn(credentials);
            
    
            // Call the Register_store function
            const response = await user.functions.login(
              customer.email,
              customer.password
            );
            console.log(response.name)
            
            // Check the response from the server
            if (response.email) {
              setUser(response);
              alert("Login Successful");
              setRedirect(true);
            } else if (response.error) {
              alert("Login Failed: " + response.error);
            } else {
              alert("Unexpected response from the server");
            }
          } catch (e) {
            console.error("Login error:", e);
            alert("Login Failed: Please try again later");
          }
        
      };
    
      if(redirect){
        return <Navigate to="/shop" />
      }
    return (
        <>
            <div className="flex flex-col h-fit justify-center items-center m-20 p-20">
                <div className="text-4xl text-green-500 mb-6">Login</div>
                <form
                    className="flex flex-col gap-y-4 md:w-1/2 w-full"
                    onSubmit={handleSubmit}
                >
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
                            Login
                        </button>
                    </div>
                </form>
                <div className="mt-3">
                    Don't have an account yet?{" "}
                    <Link to={'/register'}>
                        <span className="underline font-bold">Register now</span>
                    </Link>
                </div>
            </div>
        </>
    )
}
