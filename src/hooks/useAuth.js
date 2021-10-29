// useContext
import { useContext } from "react";

//import Auth context
import { AuthContext } from "../Context/AuthProvider";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;
