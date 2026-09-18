import LoginForm from "@/Components/Auth/LoginForm";
import GoogleBtn from "@/Components/SocialLogin/GoogleBtn";
import Link from "next/link";


import { FaGoogle } from "react-icons/fa";

export const metadata = {
    title: "Login",
    description: "Login to your account",
};

const LogInPage = () => {
  

  
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-10 ">
            <div className="w-full max-w-md">
                <div className="card bg-base-100 shadow-2xl border border-base-300">
                    <div className="card-body">
                        <div className="text-center mb-6">
                            <h1 className="text-4xl font-bold">
                                Welcome Back
                            </h1>
                            <p className="text-base-content/70 mt-2">
                                Sign in to access your account.
                            </p>
                        </div>

                        {/* LogIn form */}
                        <LoginForm></LoginForm>

                        <div className="divider">OR</div>

                        {/* Google Login btn here */}
                        <GoogleBtn></GoogleBtn>

                     
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogInPage;