import { useState,useEffect } from "react";
import axios from "axios";

const useAdminRoles = (user) => {
    const [admin, setAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      axios.get(`http://localhost:5000/admin/${user?.email}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          setAdmin(res.data.admin);
          setLoading(false);
        });
    }, [user]);
    return [admin, loading];
  };

  export default useAdminRoles;