
import { useState } from "react";

import { Box , TextField ,Button , styled , Typography} from "@mui/material";

import { API } from "../../service/api";

const Component= styled(Box)`
    width:400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgba(0 0 0/0.6);
    `;

 const Image = styled('img') ({
    width:100 ,
    margin:'auto',
    display:'flex',
    padding:'50px 0 0 '
}) ;

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    flex-direction: column;
    & > div , & > button,&> p{
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
   text-transform:none;
   background:#FB641B;
   height:48px;
`;
 const SignupButton = styled(Button)`
 text-transform:none;
 background:#fff;
 color:#2874f0;
 height:48px;
 box-shadow: 0 2px 4px 0 rgba(0 0 0/ 20%);
 `;

 const Text = styled(Typography)`
   color:#878787;
   font-size:
 `;
 

const SignupInitvalues ={
   name:'',
   username:'',
   password:''

} 

const Login = () =>{

    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
    
    const [account, toggleaccount] = useState('login');
    const [signup,setSignup] = useState(SignupInitvalues);

    const toggleSignup = () => {
       account=== 'signup'? toggleaccount('login') : toggleaccount('signup')
    }

    
     const onInputchange =(e) =>{
      setSignup({...signup,[e.target.name] : e.target.value});
     }

     const signupUser = async ()=>{
       let response = await  API.userSignup(signup);
      console.log(response);
     }
         
    return(
         <Component>
            <Box>
               <Image src={imageURL} alt="login"  />

               {
                 account === 'login' ?
               
                <Wrapper>
                   <TextField variant="standard" label="Enter Username" />
                  <TextField variant="standard" label="Enter Password" />
                  <LoginButton variant="contained">Login</LoginButton>
                  <Text textAlign={{textAlign:'center'}}>OR</Text>
                  <SignupButton onClick={() => toggleSignup()}>create an account</SignupButton >
               </Wrapper> 
               : 
               <Wrapper>
                   <TextField variant="standard" onChange={(e) => onInputchange(e)} name="Name" label="Enter Name" />
                  <TextField variant="standard"  onChange={(e) => onInputchange(e)} name="username" label="Enter Username" />
                  <TextField variant="standard"  onChange={(e) => onInputchange(e)} name="password" label="Enter Password" />

                  <SignupButton onClick={() => signupUser()}>Signup</SignupButton>
                  <Text style={{textAlign:'center'}}>OR</Text>
                  <LoginButton variant="contained" onClick={() => toggleSignup()} >Already Have an account</LoginButton >
               </Wrapper>
              }
             </Box>
        </Component>

        
    )
}

export default Login;