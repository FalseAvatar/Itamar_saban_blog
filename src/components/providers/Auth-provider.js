import { useState, createContext } from "react";

export const AuthContext = createContext(null);

export function AuthProvidor({ children }) {
  const [user, setUser] = useState();
  const password = "1234";

  const signIn = (user) => {
    if (user.password === password) {
      setUser(user);
    } else {
      alert("wrong password");
    }
  };

  const signOut = () => {
    setUser(null);
  };

  const value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
