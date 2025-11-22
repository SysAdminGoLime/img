
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual login logic
    toast({
      title: "Login attempted",
      description: "This is a template. Actual login functionality needs to be implemented.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow flex items-center justify-center py-16 px-4 bg-[#f5f5f5]">
        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Login Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md mx-auto"
          >
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-[#003733] mb-2">Welcome Back</h1>
                <p className="text-[#666666]">Please enter your details to sign in</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-[#222222]">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium text-[#222222]">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-[#70BC0E] rounded border-gray-300" />
                    <span className="ml-2 text-sm text-[#666666]">Remember me</span>
                  </label>
                  <a href="/forgot-password" className="text-sm text-[#70BC0E] hover:text-[#003733]">
                    Forgot password?
                  </a>
                </div>

                <Button type="submit" className="w-full bg-[#70BC0E] hover:bg-[#003733] text-white">
                  Sign in
                </Button>

                <p className="text-center text-sm text-[#666666]">
                  Don't have an account?{" "}
                  <a href="/register" className="text-[#70BC0E] hover:text-[#003733] font-medium">
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:block"
          >
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Login"
              className="rounded-2xl object-cover w-full h-[600px]"
            />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
