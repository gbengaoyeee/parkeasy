import { firAuth } from "@/api/firebase";
import { useAppContext } from "@/context/AppContext";
import { AuthContext } from "@/context/AuthContext";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { Loader2 } from "lucide-react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/*

Expired link for testing
http://localhost:5173/sso-redirect?userId=26a1f03b-274f-413d-9fd0-55dcbf12d3e1&secret=bb3abf652e23d61d94adfa9b9aa5055820d862c61c668e54717a56be555fcdceaa03dc0a89a2265db2bafbd29a7807ddbbcf86f5fe5b9cefd3ec5681d58956b363d56d48a9a905fc61ad0392bba2e6ed774acb6064fdc2dcd67123f923b1a075f805662e3c6359d53e263b0a732745b826a63d503d1c42cddb75fac04590e91c&expire=2023-12-13T20%3A57%3A06.143%2B00%3A00&project=656d74d2808bca1159bd
*/
const SSORedirect = () => {
  const navigate = useNavigate()
  const { setUser } = useContext(AuthContext)
  const {tenant} = useAppContext()

  // useEffect(() => {
  //   const secret = query.get("secret");
  //   const userId = query.get("userId");
  //   if(userId && secret) {
  //       appwriteClient.account.updateMagicURLSession(userId, secret)
  //       .then((session) => {
  //           appwriteClient.account.get()
  //           .then((user) => {
  //               setUser(user)
  //               navigate('/')
  //           })
  //       })
  //       .catch((error) => {
  //           console.error(error)
  //           toast.error('An error occurred and you could not be signed in')
  //           navigate('/login')
  //       })
  //   } else {
  //       navigate('/login')
  //   }
  // }, [])


  useEffect(() => {
    if(isSignInWithEmailLink(firAuth, window.location.href)) {
      let email = localStorage.getItem('emailForSignIn');
      if (!email) {
        // User opened the link on a different device. To prevent session fixation
        // attacks, ask the user to provide the associated email again. For example:
        navigate('/login')
      } else {
        signInWithEmailLink(firAuth, email, window.location.href)
        .then((result) => {
          setUser(result.user)
          tenant === 'host' ? navigate('/') : navigate('/discover')
        })
      }
    }
  }, []);

  return (
    <div>
      <Loader2 className="animate-spin-slow" />
    </div>
  );
};

export default SSORedirect;
