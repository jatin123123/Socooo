"use client";
import React, { useEffect, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { MdDeleteForever } from "react-icons/md";
import Link from "next/link";
import axios from "axios";
import { MdModeEditOutline } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

function page() {
  const baseurl="https://socooo.onrender.com";

  const { toast } = useToast();

  const router = useRouter();
  // delete post
  const deletePost = async (postId) => {
    try {
      const response = await axios.delete(
        `${baseurl}/api/deletepost/${postId}`,
        {
          withCredentials: true,
        }
      );

      console.log("Post deleted successfully:", response.data);
      toast({
        title: "Post Deleted",
      });
      setPostdata((prevPosts) =>
        prevPosts.filter((post) => post._id !== postId)
      );
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete the post.");
    }
  };

  // MY post

  const [postdata, setPostdata] = useState([]);
  const [error, setError] = useState(null);
  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${baseurl}/api/mypost`, {
        withCredentials: true,
      });
      setPostdata(response.data.posts); // Assuming response has a 'posts' array
    } catch (error) {
      console.error("Error fetching posts:", error);
      if (error.response && error.response.status === 401) {
        alert("Unauthorized. Please log in.");
        router.push("/auth/login");
      } else {
        setError("An error occurred while fetching posts.");
      }
    }
  };

  // ProfileData
  const [profiledata, setprofile] = useState({});
  const profile = async () => {
    try {
      const response = await axios.get(
        `${baseurl}/api/adminProfile`,
        { withCredentials: true }
      );
      setprofile(response.data.admin);
      // console.log(response.data.admin);
    } catch (error) {
      alert("Somthing Went Wrong");
    }
  };
  // logout
  const logout = async () => {
    try {
      const response = await axios.get(`${baseurl}/api/logout`, {
        withCredentials: true,
      });
      if (response.status == 200) {
        toast({
          title: "You are Successfully Log-Out",
        });
        router.push("/auth/login");
      } else {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts();
    profile();
  }, []);

  return (
    <div className={`w-full h-screen `}>
      <nav className="w-full fixed   items-center text-xl md:text-2xl h-12 flex justify-between px-5">
        <Link href={"/feed"}>
          {" "}
          <i>
            {" "}
            <IoHomeOutline />{" "}
          </i>
        </Link>
        <Button onClick={logout} variant="destructive">
          LogOut
        </Button>
      </nav>
      {/* Admin Details */}
      <div
        className="w-full h-80  items-center px-5 md:flex-col md:mt-2 md: gap-5 flex"
        id="profile"
      >
        <img
          className="w-40 h-40 rounded-full object-cover object-right-top bg-fuchsia-200"
          src={profiledata.UserImage||"https://www.pngkey.com/png/full/115-1150152_default-profile-picture-avatar-png-green.png"}
          alt=""
        />
        <div className="flex flex-col  items-center">
          <div className="flex items-center gap-2">
            {" "}
            {profiledata.username ? profiledata.username : "Loading..."}{" "}
            <span className="animate-pulse text-green-700  cursor-pointer ">
              {" "}
              <MdModeEditOutline />
            </span>
          </div>
          <div className="flex gap-5 text-blue-500 font-semibold">
            {profiledata.email}
          </div>
        </div>
      </div>
      {/* Admin Post's */}

      <div className="w-full px-5 md:px-52 py-5 md:py-10 ">
        <h1 className="font-bold font-mono text-center text-xl">My Twitte</h1>

        {postdata.length > 0
          ? postdata.map((post, index) => (
              <div
                key={index}
                className="w-full motion-translate-x-in-[0%] motion-translate-y-in-[-25%] motion-opacity-in-[0%] motion-duration-[300ms]/translate motion-duration-[300ms]/opacity motion-ease-bounce flex items-center justify-between shadow-md rounded-lg border mt-5 py-3 px-5"
                id="post"
              >
                <div>
                  <h1 className="font-bold">{post.tittle}</h1>
                  <p className="text-sm">{post.description}</p>
                </div>

                <Button
                  onClick={() => deletePost(post._id)}
                  variant="destructive"
                >
                  <i>
                    <MdDeleteForever />
                  </i>
                </Button>
              </div>
            ))
          : <div className="opacity-80 tracking-tighter text-center mt-5">
            <h1>No Post Created..</h1>
          </div> }
      </div>
    </div>
  );
}

export default page;
