// import React, { useState } from 'react'
// import { useNavigate, Link } from 'react-router-dom'

// export default function Signup() {
//   const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" })

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation}))
//     const response = await fetch("http://localhost:5000/api/createuser", {
     
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })

//     });
//     const json = await response.json()
//     console.log(json);
//     if (!json.success) {
//      alert("Enter valid credentails")
//     }
   
//   }

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value })
//   }

//   return (
   
//       <>

//         <div className='container' >
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">Name</label>
//               <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}  />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">Email address</label>
//               <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange}  />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="location" className="form-label">Location</label>
//               <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange}  />
//             </div>
            
//             <div className="mb-3">
//               <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//               <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
//             </div>
//             <button type="submit" className="m-3 btn btn-success">Submit</button>
//             <Link to="/login" className="m-3  btn btn-danger">Already a user</Link>
//           </form>
        
//       </div>
//       </>
//   )
// }




// Signup.js
import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    geolocation: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          location: credentials.geolocation,
        }),
      });

      const json = await response.json();
      console.log(json);

      if (json.success) {
        // save the auth token to local storage and redirect
        localStorage.setItem('token', json.authToken);
        navigate('/login');
      } else {
        alert('Enter Valid Credentials');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundSize: 'cover',
        height: '100vh',
      }}
    >
      <div>
        <Navbar />
      </div>

      <div className="container">
        <form
          className="w-50 m-auto mt-5 border bg-dark border-success rounded"
          onSubmit={handleSubmit}
        >
          <div className="m-3">
            <label htmlFor="name" className="form-label text-light">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={credentials.name}
              onChange={onChange}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="m-3">
            <label htmlFor="email" className="form-label text-light">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={credentials.email}
              onChange={onChange}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label text-light">
               Location
            </label>
            <input
              type="text"
              className="form-control"
              name="geolocation"
              value={credentials.geolocation}
              onChange={onChange}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label text-light">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={credentials.password}
              onChange={onChange}
              name="password"
            />
          </div>
          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>
          <Link to="/login" className="m-3 mx-1 btn btn-danger">
            Already a user
          </Link>
        </form>
      </div>
    </div>
  );
}
