import React from 'react'

function Account() {
  return (
    <div>
        <center><h1>Log In</h1></center>
        <center></center>
        <center><p>Enter the username</p><input type='text' placeholder='username'></input></center>
        <center><p>Enter the Password</p><input type='text' placeholder='password'></input></center>
        <center><button>LogIn</button> <button>SignUp</button></center>

    </div>
  )
}

export default Account