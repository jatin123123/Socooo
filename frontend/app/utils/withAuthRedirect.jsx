// utils/withAuthRedirect.js
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function withAuthRedirect(Component) {
  return function AuthenticatedComponent(props) {
    const router = useRouter();

    useEffect(() => {
      const checkAuth = async () => {
        try {
          const response = await axios.get("https://socooo-backend.onrender.com/api/auth/me", {
            withCredentials: true,
          });
          if (response.data.isAuthenticated) {
            router.push("/feed"); // Redirect to /feed if authenticated
          }
        } catch (error) {
          console.error("Error checking authentication status:", error);
        }
      };

      checkAuth();
    }, [router]);

    return <Component {...props} />;
  };
}
