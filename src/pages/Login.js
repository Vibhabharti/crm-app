import React, {useState} from 'react'
import { Dropdown,DropdownButton} from 'react-bootstrap'
import {userSignup} from '../api/auth'


function Login() {
  const[ showSignup, setShowSignup] = useState(false);
  const [userType, setuserType] = useState("CUSTOMER");
  const [userSignupData, setUserSignupData]=useState({})
  

  const toggleSingup =()=>{
    setShowSignup(!showSignup)


  }
  const handleSelect = (e) => {
      setuserType(e)
  }

  const updateSignupData=(e)=> {
    userSignupData[e.target.id]=e.target.value;
    console.log(userSignupData);
  }
   const signupFn=()=>
   {
    const username = userSignupData.username;
    const userId = userSignupData.userId;
    const email = userSignupData.email;
    const password = userSignupData.password;
     

    const data ={
      name:username,
      userId:userId,
      email:email,
      userType: userType,
      password:password,
    }
    console.log ('DATA', data);
   }
    
  
  
  return
   ( 
    <div className='bg-primary d-flex justify-content-center align-items-center vh-100'>
      <div className="card m-5 p-5">
        <div className="row">
          <div className="col">
            {
              !showSignup ? (
<div className="Login"> 
<form> <div className='input-group m-1'>
  <input type="text" className="form-control" placeholder='User ID' />
  </div>

  <div className='input-group m-1'>
  <input type="text" className="form-control" placeholder='Password' />
  </div>
  
  <div className='input-group m-1'>
  <input type="Submit" className="form-control btn btn-primary" value="Log in" />
  </div>
  <div className="text-info text-center" onClick={toggleSingup}> Don't have an account? Signup</div>
   </form>

                <div className="SignUp">SignUp
<form onSubmit={signupFn}>
   <div className='input-group m-1'>
  <input type="text" className="form-control" placeholder='User ID' id='userid' onChange={updateSignupData} />
  </div>
  <div className='input-group m-1'>
  <input type="text" className="form-control" placeholder='UserName' id="username" onChange={updateSignupData} />
  </div>
 < div className='input-group m-1'>
  <input type="Email" className="form-control" placeholder='Email' id='email' onChange={updateSignupData} />
  </div>
  <div className='input-group m-1'>
  <input type="Number" className="form-control" placeholder= 'Age' id='age' onChange={updateSignupData} />
  </div>
  <div className='input-group m-1'>
  <input type="Mobile-number" className="form-control" placeholder='Mobile Number' id='mobilenumber' onChange={updateSignupData} />
  </div>

  <div className='input-group m-1'>
  <input type="text" className="form-control" placeholder='Password' id='password' onChange={updateSignupData} />
  </div>
  <div className='input-group m-1'>
  <span type="text-muted">User Type </span>
  <DropdownButton
   align="end"
   title={userType}
   variant="light"
   className="mx-1"
  onSelect={handleSelect}>
    
<Dropdown.Item eventKey="CUSTOMER">CUSTOMER</Dropdown.Item>
<Dropdown.Item eventKey="ENGINEER">ENGINEER</Dropdown.Item>
    
  </DropdownButton>
  </div>
   <div className='input-group m-1'>
  <input type="Submit" className="form-control btn btn-primary" value="Sign Up" />
  </div>
  <div className="text-info text-center" onClick={toggleSingup}> Already Have an account? Login</div>
   </form>

</div>
            
              
            
          </div>
        </div>
      </div>
      </div>
  
 </div> )
}

export default Login;