export const validateData=(email,password,fullname)=>{
    console.log(fullname,email,password);
    let vaildateName=/^[A-Za-z]+( [A-Za-z]+)*$/.test(fullname);
    
    const vaildMail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passwordregex=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?/~_+\-=|]).{8,32}$/;
    const validPassword=passwordregex.test(password);
    // console.log(vaildateName,vaildMail,validPassword)
    if(!vaildMail){
        return "Email is not vaild"
    }
    if(!validPassword){
        return "Password is not Vaild (At least one letter (either uppercase or lowercase).At least one digit.Minimum length of 8 characters.Only allows letters and digits (no special characters))"
    }
    if(fullname!=undefined && !vaildateName){
        // console.log("why it is coming")
        return "Name is not valid";
    }
    return null;

}