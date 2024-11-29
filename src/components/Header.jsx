import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../uitls/firebaseconfig";
import { useNavigate } from "react-router-dom";
import { adduser, removeuser } from "../uitls/UserSlice";
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES, USER_LOGO } from "../uitls/constant";
import { tooglegptSearch } from "../uitls/gptSlice";
import { changeLanguage } from "../uitls/lanugaeSlice";

const Header=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();

    useEffect(()=>{
        const unsubscriber=onAuthStateChanged(auth, (user) => {
            if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            // const uid = user.uid;
            // console.log(user)
            const {uid,email,displayName}=user;
            dispatch(adduser({uid:uid,email:email,displayName:displayName}));
            navigate("/browse")
            // ... 
            } else {
            // User is signed out
            dispatch(removeuser());
            // ...
            navigate("/")
            }
        });
        return ()=>unsubscriber();
       },[])

    const handleSignOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
          }).catch((error) => {
            // An error happened.
          });

    }

    const handleGPTButton=()=>{
        dispatch(tooglegptSearch());
    }

    const user=useSelector((store)=>store.user);
    const showGPT=useSelector(store=>store.gpt.showgptPage);

    const changeThePreferLanguage=(e)=>{
        dispatch(changeLanguage(e.target.value));
    }
    
    return <div className="absolute w-screen z-10 bg-gradient-to-b flex justify-between from-black">
        <img className="p-2 m-3 w-44 " src={LOGO} alt="logo"></img>

        {user && 
        <div className="flex">
            <div >
                <select onChange={changeThePreferLanguage} className="mt-8 py-2">
                    {SUPPORTED_LANGUAGES.map((lan)=><option key={lan.code} value={lan.code}>{lan.name}</option>)}
                </select>
            </div>
            <div>
            <button className=" m-6 p-3 bg-purple-500 text-white rounded-lg" onClick={handleGPTButton}>{showGPT?"Home Page":"gptSearch"}</button>
            </div>
            
        <img className="w=12 h-12 my-5 " src={USER_LOGO} alt="Image of user" />
        <button  onClick={handleSignOut}>Sign Out</button>
    </div>}
    </div>
}
export default Header;