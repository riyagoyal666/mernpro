// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// export default function Login() {
//   const [credentials, setCredentials] = useState({ email: '', password: '' });
//   let navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/api/loginuser', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email: credentials.email, password: credentials.password }),
//       });

//       const json = await response.json();

//       if (!json.success) {
//         alert('Enter valid credentials');
//       } else {
//         localStorage.setItem('userEmail', credentials.email);
//         localStorage.setItem('authToken', json.authToken);
//         console.log('Authentication successful');

//         // Print the email after setting it in local storage
//         console.log('User Email:', localStorage.getItem('userEmail'));

//         navigate('/');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//     }
//   };

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   return (
//     <div>
//       <div className="container">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               Email address
//             </label>
//             <input type="email" className="form-control" name="email" value={credentials.email} onChange={onChange} />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Password
//             </label>
//             <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" />
//           </div>
//           <button type="submit" className="m-3 btn btn-success">
//             Submit
//           </button>
//           <Link to="/createuser" className="m-3 btn btn-danger">
//             I'm a new user
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }






import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/loginuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password }),
      });

      const json = await response.json();
      //localStorage.setItem('authToken', json.authToken);
      if (!json.success) {
        alert('Enter valid credentials');
      } else {
        localStorage.setItem('userEmail', credentials.email);
        localStorage.setItem('authToken', json.authToken);
        console.log('Authentication successful');
        console.log('User Email:', localStorage.getItem('userEmail'));
        navigate('/');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover' }}>
      <Navbar />
      <div className="container d-flex align-items-center justify-content-center">
        <form className="w-50 p-4 border bg-dark border-success rounded" onSubmit={handleSubmit}>
          <h2 className="mb-4 text-light">Login</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label text-light">
              Email address
            </label>
            <input type="email" className="form-control" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label text-light">
              Password
            </label>
            <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <Link to="/createuser" className="btn btn-danger ms-2">
            New User
          </Link>
        </form>
      </div>
    </div>
  );
}
