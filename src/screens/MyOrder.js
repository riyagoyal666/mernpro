// import React, { useEffect, useState } from 'react'
// import Footer from '../components/Footer';
// import Navbar from '../components/NavBar';

// export default function MyOrder() {

//     const [orderData, setorderData] = useState({})

//     const fetchMyOrder = async () => {
//         console.log(localStorage.getItem('userEmail'))
//         await fetch("http://localhost:5000/api/myOrderData", {
          
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body:JSON.stringify({
//                 email:localStorage.getItem('userEmail')
//             })
//         }).then(async (res) => {
//             let response = await res.json()
//             await setorderData(response)
//         })




//     }

//     useEffect(() => {
//         fetchMyOrder()
//     }, [])

   

// return (
//     <div>
//       <div>
//         <Navbar />
//       </div>
  
//       <div className='container'>
//         <div className='row'>
//           {Object.keys(orderData).length > 0 &&
//             orderData.orderData &&
//             orderData.orderData.order_data.slice(0).reverse().map((item) => (
//               <div key={item.Order_date}>
//                 {item.Order_date ? (
//                   <div className='m-auto mt-5'>
//                     {item.Order_date}
//                     <hr />
//                   </div>
//                 ) : (
//                   <div className='col-12 col-md-6 col-lg-3' key={item.id}>
//                     {item.order_data.map((arrayData) => (
//                       <div key={arrayData.id}>
//                         <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
//                           <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
//                           <div className="card-body">
//                             <h5 className="card-title">{arrayData.name}</h5>
//                             <div className='container w-100 p-0' style={{ height: "38px" }}>
//                               <span className='m-1'>{arrayData.qty}</span>
//                               <span className='m-1'>{arrayData.size}</span>
//                               <span className='m-1'>{item.Order_date}</span>
//                               <div className=' d-inline ms-2 h-100 w-20 fs-5'>
//                                 ₹{arrayData.price}/-
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//         </div>
//       </div>
  
//       <Footer />
//     </div>
//   );
//   }  






import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';

export default function MyOrder() {
  const [orderData, setOrderData] = useState({});

  const fetchMyOrder = async () => {
    try {
      console.log(localStorage.getItem('userEmail'));
      const response = await fetch("http://localhost:5000/api/myOrderData", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: localStorage.getItem('userEmail')
        })
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        setOrderData(responseData);
      } else {
        console.log('Error fetching data:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error during fetchMyOrder:', error);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  useEffect(() => {
    console.log('Order Data Length:', Object.keys(orderData).length);
  }, [orderData]);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className='container'>
        <div className='row'>
          {Object.keys(orderData).length > 0 &&
            orderData.orderData &&
            orderData.orderData.order_data.slice(0).reverse().map((item) => (
              <div key={item.Order_date}>
              <div key={item.Order_date}>
  {item.Order_date ? (
    <div className='m-auto mt-5'>
      {item.Order_date}
      <hr />
    </div>
  ) : (
    <div className='col-12 col-md-6 col-lg-3' key={item.id}>
      {item.order_data.map((arrayData) => (
        <div key={arrayData.id}>
          <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
            <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
            <div className="card-body">
              <h5 className="card-title">{arrayData.name}</h5>
              <div className='container w-100 p-0' style={{ height: "38px" }}>
                <span className='m-1'>{arrayData.qty}</span>
                <span className='m-1'>{arrayData.size}</span>
                <span className='m-1'>{item.Order_date}</span>
                <div className=' d-inline ms-2 h-100 w-20 fs-5'>
                  ₹{arrayData.price}/-
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

              </div>
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
