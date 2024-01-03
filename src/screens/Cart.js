





// import React from 'react';
// import Delete from '@material-ui/icons/Delete';
// import { useCart, useDispatchCart } from '../components/ContextReducer';

// export default function Cart() {
//   const data = useCart();
//   const dispatch = useDispatchCart();

//   if (data.length === 0) {
//     return (
//       <div className='m-5 w-100 text-center fs-3'>
//         The Cart is Empty!
//       </div>
//     );
//   }

//   const handleCheckOut = async () => {
//     try {
//       console.log("Attempting to check out...");
//       const userEmail = localStorage.getItem("userEmail");
//       const response = await fetch("http://localhost:5000/api/orderData", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           order_data: data,
//           email: userEmail,
//           order_date: new Date().toDateString(),
//         }),
//       });

//       console.log("Order response", response);

//       if (response.ok) {
//         dispatch({ type: "DROP" });
//         console.log("Order successful");
//         // Optionally, show a success message to the user
//       } else {
//         console.log("Error in checkout:", response.statusText);
//         // Show an error message to the user
//       }
//     } catch (error) {
//       console.error("Error during checkout:", error);
//       // Show an error message to the user
//     }
//   };

//   const totalPrice = data.reduce((total, food) => total + food.price, 0);

//   return (
//     <div className='container m-auto mt-5'>
//       <table className='table table-hover text-dark table-bordered bg-light'>
//         <thead className='text-success fs-4'>
//           <tr>
//             <th scope='col'>#</th>
//             <th scope='col'>Name</th>
//             <th scope='col'>Quantity</th>
//             <th scope='col'>Option</th>
//             <th scope='col'>Amount</th>
//             <th scope='col'></th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((food, index) => (
//             <tr key={index}>
//               <th scope='row'>{index + 1}</th>
//               <td>{food.name}</td>
//               <td>{food.qty}</td>
//               <td>{food.size}</td>
//               <td>{food.price}</td>
//               <td>
//                 <button type="button" className="btn p-0">
//                   <Delete onClick={() => { dispatch({ type: "REMOVE", index: index }) }} />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className='text-dark fs-2'>
//         Total Price: {totalPrice}/-
//       </div>
//       <div>
//         <button className='btn btn-success mt-3' onClick={handleCheckOut}> Check Out </button>
//       </div>
//     </div>
//   );
// }






// import React from 'react';
// import Delete from '@material-ui/icons/Delete';
// import { useCart, useDispatchCart } from '../components/ContextReducer';

// export default function Cart() {
//   const data = useCart();
//   const dispatch = useDispatchCart();

//   if (data.length === 0) {
//     return (
//       <div className='m-5 w-100 text-center fs-3 text-danger'>
//         The Cart is Empty!
//       </div>
//     );
//   }

//   const handleCheckOut = async () => {
//     try {
//       console.log("Attempting to check out...");
//       const userEmail = localStorage.getItem("userEmail");
//       const response = await fetch("http://localhost:5000/api/orderData", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           order_data: data,
//           email: userEmail,
//           order_date: new Date().toDateString(),
//         }),
//       });

//       console.log("Order response", response);

//       if (response.ok) {
//         dispatch({ type: "DROP" });
//         console.log("Order successful");
//         // Optionally, show a success message to the user
//       } else {
//         console.log("Error in checkout:", response.statusText);
//         // Show an error message to the user
//       }
//     } catch (error) {
//       console.error("Error during checkout:", error);
//       // Show an error message to the user
//     }
//   };

//   const totalPrice = data.reduce((total, food) => total + food.price, 0);

//   return (
//     <div className='container m-auto mt-5'>
//       <table className='table table-hover text-dark table-bordered bg-light'>
//         <thead className='text-success fs-4'>
//           <tr>
//             <th scope='col'>#</th>
//             <th scope='col'>Name</th>
//             <th scope='col'>Quantity</th>
//             <th scope='col'>Option</th>
//             <th scope='col'>Amount</th>
//             <th scope='col'></th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((food, index) => (
//             <tr key={index}>
//               <th scope='row'>{index + 1}</th>
//               <td>{food.name}</td>
//               <td>{food.qty}</td>
//               <td>{food.size}</td>
//               <td>{food.price}</td>
//               <td>
//                 <button type="button" className="btn p-0">
//                   <Delete onClick={() => { dispatch({ type: "REMOVE", index: index }) }} />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className='text-dark fs-2'>
//         Total Price: <span className='text-success'>{totalPrice}/-</span>
//       </div>
//       <div>
//         <button className='btn btn-success mt-3' onClick={handleCheckOut}> Check Out </button>
//       </div>
//     </div>
//   );
// }






import React from 'react';
import Delete from '@material-ui/icons/Delete';
import { useCart, useDispatchCart } from '../components/ContextReducer';

export default function Cart() {
  const data = useCart();
  const dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div className='m-5 w-100 text-center fs-3 text-danger'>
        The Cart is Empty!
      </div>
    );
  }

  const handleCheckOut = async () => {
    try {
      console.log("Attempting to check out...");
      const userEmail = localStorage.getItem("userEmail");
      const response = await fetch("http://localhost:5000/api/orderData", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          order_data: data,
          email: userEmail,
          order_date: new Date().toDateString(),
        }),
      });

      console.log("Order response", response);

      if (response.ok) {
        dispatch({ type: "DROP" });
        console.log("Order successful");
        // Optionally, show a success message to the user
      } else {
        console.log("Error in checkout:", response.statusText);
        // Show an error message to the user
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      // Show an error message to the user
    }
  };

  const totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <div className='container m-auto mt-5'>
      <table className='table table-hover text-dark table-bordered bg-light'>
        <thead className='text-success fs-4'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Option</th>
            <th scope='col'>Amount</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {data.map((food, index) => (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td>{food.name}</td>
              <td>{food.qty}</td>
              <td>{food.size}</td>
              <td>{food.price}</td>
              <td>
                <button type="button" className="btn p-0">
                  <Delete onClick={() => { dispatch({ type: "REMOVE", index: index }) }} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='text-danger fs-2'> {/* Change text color to red */}
        Total Price: <span className='text-danger'>{totalPrice}/-</span> {/* Change text color to red */}
      </div>
      <div>
        <button className='btn btn-success mt-3' onClick={handleCheckOut}> Check Out </button>
      </div>
    </div>
  );
}

