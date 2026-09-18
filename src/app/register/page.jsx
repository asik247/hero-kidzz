import RegisterForm from "@/Components/Auth/RegisterForm";
import GoogleBtn from "@/Components/SocialLogin/GoogleBtn";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

export const metadata = {
    title: "Register",
    description: "Create your account",
};

const RegisterPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-md">
                <div className="card bg-base-100 shadow-2xl border border-base-300">
                    <div className="card-body">
                        <div className="text-center mb-6">
                            <h1 className="text-4xl font-bold">
                                Create Account
                            </h1>
                            <p className="text-base-content/70 mt-2">
                                Join our platform and start your journey today.
                            </p>
                        </div>

                       {/* Register Form */}
                       <RegisterForm></RegisterForm>

                        <div className="divider">OR</div>

                        {/* Google Login */}
                        <GoogleBtn></GoogleBtn>

                        <p className="text-center mt-4 text-sm">
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="font-semibold text-primary"
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;