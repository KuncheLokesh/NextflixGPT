import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../uitls/firebaseconfig";
import { useNavigate } from "react-router-dom";

const Header=()=>{
    const navigate=useNavigate();

    const handleSignOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
          }).catch((error) => {
            // An error happened.
          });

    }

    const user=useSelector((store)=>store.user);
    console.log(user,"from heading")
    return <div className="absolute w-screen z-10 bg-gradient-to-b flex justify-between from-black">
        <img className="p-2 m-3 w-44 " src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"></img>

        {user && 
        <div className="flex">
        <img className="w=12 h-12 my-5 " src="https://thumbs.dreamstime.com/z/man-profile-cartoon-smiling-vector-illustration-graphic-design-135443492.jpg" alt="Image of user" />
        <button  onClick={handleSignOut}>Sign Out</button>
    </div>}
    </div>
}
export default Header;