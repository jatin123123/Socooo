"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import withAuthRedirect from "@/app/utils/withAuthRedirect";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
function SignupPage() {
  const baseurl = "https://socooo.onrender.com";
  const { toast } = useToast();
  const [UserImage, setUserImage] = useState("");
  const [username, setUserName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${baseurl}/api/signup`,
        { username, UserImage, email, password },
        { withCredentials: true }
      );
      if (response.status >= 200 && response.status < 300) {
        toast({
          title: "Your Account created Successfully",
        });
        router.push("/auth/login");
      } else {
        setError("Failed to create user. Please try again.");
      }
    } catch (error) {
      setError("Error occurred while signing up. Please try again.");
    }
  };

  return (
    <div className="w-full flex items-center justify-center h-screen">
      <div
        id="signup-box"
        className="w-80 px-4 py-7   md:w-[80%] md:h-[80%] border rounded-xl "
      >
        <h1 className="text-xl font-semibold font-mono md:text-4xl  text-center">
          Sign-up
        </h1>
        {/* Form Starts */}
        <form
          className="mt-7 flex flex-col  md:flex-row  md:gap-28  items-center gap-4"
          onSubmit={handelSubmit}
        >
          <img
            className="w-28 object-cover object-left-top   h-28 bg-gray-400 md:-mt-16 rounded-full md:min-w-80 md:min-h-80 "
            src={
              UserImage ||
              "https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png"
            }
            alt=""
          />
          <div className="flex flex-col items-center md:text-2xl font-semibold w-full font-mono gap-5">
            <div className=" md:w-[80%] ">
              <h1>Paste Your UserImage Url </h1>
              <Input
                type="text"
                className="px-3"
                value={UserImage}
                onChange={(e) => setUserImage(e.target.value)}
                placeholder="Optional"
              />
            </div>
            <div className=" md:w-[80%] ">
              <h1>Enter YouserName</h1>
              <Input
                type="text"
                className="px-3"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="jhon "
              />
            </div>
            <div className=" md:w-[80%] ">
              <h1>Enter Email</h1>
              <Input
                type="email"
                className="px-3"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="user@gmail.com "
              />
            </div>
            <div className=" md:w-[80%] ">
              <h1>Enter Password</h1>
              <Input
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="px-3"
                placeholder="......"
              />
            </div>
            <Button className="px-10 py-5">Create Account</Button>
            <p className="  text-[12px] text-zinc-400 mr-7 tracking-tighter font-extralight ">
              Already have an account:
              <Link
                href={"/auth/login"}
                className="text-black opacity-100 hover:border-b border-black transition-all "
              >
                Sign-In
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withAuthRedirect(SignupPage);
