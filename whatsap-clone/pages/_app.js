import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Login from "./login/login";
export default function App({ Component, pageProps }) {
  const [user] = useAuthState(auth);
  if (!user) return <Login />;
  return <Component {...pageProps} />;
}
