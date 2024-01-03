

// import React, { useState, useEffect, useRef } from 'react';
// import { useDispatchCart, useCart } from './ContextReducer';

// export default function Card(props) {
//   const dispatch = useDispatchCart();
//   const options = props.options || {};
//   const priceOptions = options ? Object.keys(options) : [];
//   const [qty, setQty] = useState(1);
//   const [size, setSize] = useState(priceOptions[0] || "");
//   const data = useCart();
//   const priceRef = useRef();

//   useEffect(() => {
//     setSize(priceRef.current.value);
//   }, [priceOptions]);

//   const handleAddToCart = async () => {
//     if (!props.foodItem) {
//       console.error('Food item is undefined!');
//       return;
//     }

//     console.log('Executing handleAddToCart');
//     console.log('Food ID:', props.foodItem._id);
//     console.log('Options:', options);
//     console.log('Selected Size:', size);

//     for (const item of data) {
//       if (item.id === props.foodItem._id) {
//         if (item.size === size) {
//           const finalPrice = qty * parseInt(options[size]);
//           console.log('Updating item in cart:', { type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty });
//           await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty });
//           return;
//         }
//         break;
//       }
//     }

//     const finalPrice = qty * parseInt(options[size]);
//     console.log('Adding item to cart:', {
//       type: "ADD",
//       id: props.foodItem._id,
//       name: props.foodItem._name,
//       price: finalPrice,
//       qty: qty,
//       size: size,
//       img: props.foodItem.img // Assuming img is available in props.foodItem
//     });
//     await dispatch({
//       type: "ADD",
//       id: props.foodItem._id,
//       name: props.foodItem._name,
//       price: finalPrice,
//       qty: qty,
//       size: size,
//       img: props.foodItem.img // Assuming img is available in props.foodItem
//     });
//   };

//   return (
//     <div>
//       {props.foodItem ? (
//         <div className="container mt-3">
//           <div className="card" style={{ width: "18rem", maxHeight: "360px" }}>
//             {props.foodItem.img && <img src={props.foodItem.img} className="d-block w-100" alt="..." style={{ height: "120px", objectFit: "fill" }} />}
//             {props.foodItem.name && <h5 className="card-title">{props.foodItem.name}</h5>}
//             <div className="card-body">
//               <div className='container w-100'>
//                 <select className='m-2 h-100 bg-success rounded' onChange={(e) => setQty(e.target.value)}>
//                   {Array.from(Array(6), (e, i) => (
//                     <option key={i + 1} value={i + 1}>{i + 1}</option>
//                   ))}
//                 </select>
//                 <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
//                   {priceOptions.map((data) => (
//                     <option key={data} value={data}>{data}</option>
//                   ))}
//                 </select>
//                 <div className='d-inline h-100 fs-5'>
//                   Rs.{qty * parseInt(options[size])}/-
//                 </div>
//               </div>
//               <hr />
//               <button className={'btn btn-success justify-center ms-2'} onClick={handleAddToCart}>Add to Cart</button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div>Food item is undefined</div>
//       )}
//     </div>
//   );
// }




// import React, { useState, useEffect, useRef } from 'react';
// import { useDispatchCart, useCart } from './ContextReducer';

// export default function Card(props) {
//   const dispatch = useDispatchCart();
//   const options = props.options || {};
//   const priceOptions = options ? Object.keys(options) : [];
//   const [qty, setQty] = useState(1);
//   const [size, setSize] = useState(priceOptions[0] || "");
//   const data = useCart();
//   const priceRef = useRef();

//   useEffect(() => {
//     setSize(priceRef.current.value);
//   }, [priceOptions]);

//   const handleAddToCart = async () => {
//     if (!props.foodItem) {
//       console.error('Food item is undefined!');
//       return;
//     }

//     console.log('Executing handleAddToCart');
//     console.log('Food ID:', props.foodItem._id);
//     console.log('Options:', options);
//     console.log('Selected Size:', size);

//     for (const item of data) {
//       if (item.id === props.foodItem._id) {
//         if (item.size === size) {
//           const finalPrice = qty * parseInt(options[size]);
//           console.log('Updating item in cart:', { type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty });
//           await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty });
//           return;
//         }
//         break;
//       }
//     }

//     const finalPrice = qty * parseInt(options[size]);
//     console.log('Adding item to cart:', {
//       type: "ADD",
//       id: props.foodItem._id,
//       name: props.foodItem._name,
//       price: finalPrice,
//       qty: qty,
//       size: size,
//       img: props.foodItem.img // Assuming img is available in props.foodItem
//     });
//     await dispatch({
//       type: "ADD",
//       id: props.foodItem._id,
//       name: props.foodItem._name,
//       price: finalPrice,
//       qty: qty,
//       size: size,
//       img: props.foodItem.img // Assuming img is available in props.foodItem
//     });
//   };

//   return (
//     <div className="mb-3"> {/* Added margin-bottom for spacing between cards */}
//       {props.foodItem ? (
//         <div className="container mt-3">
//           <div className="card" style={{ width: "18rem", maxHeight: "360px" }}>
//             {props.foodItem.img && <img src={props.foodItem.img} className="d-block w-100" alt="..." style={{ height: "120px", objectFit: "fill" }} />}
//             {props.foodItem.name && <h5 className="card-title">{props.foodItem.name}</h5>}
//             <div className="card-body">
//               <div className='container w-100'>
//                 <select className='m-2 h-100 bg-success rounded' onChange={(e) => setQty(e.target.value)}>
//                   {Array.from(Array(6), (e, i) => (
//                     <option key={i + 1} value={i + 1}>{i + 1}</option>
//                   ))}
//                 </select>
//                 <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
//                   {priceOptions.map((data) => (
//                     <option key={data} value={data}>{data}</option>
//                   ))}
//                 </select>
//                 <div className='d-inline h-100 fs-5'>
//                   Rs.{qty * parseInt(options[size])}/-
//                 </div>
//               </div>
//               <hr />
//               <button className={'btn btn-success justify-center ms-2'} onClick={handleAddToCart}>Add to Cart</button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div>Food item is undefined</div>
//       )}
//     </div>
//   );
// }





// import React, { useState, useEffect, useRef } from 'react';
// import { useDispatchCart, useCart } from './ContextReducer';

// export default function Card(props) {
//   const dispatch = useDispatchCart();
//   const options = props.options || {};
//   const priceOptions = options ? Object.keys(options) : [];
//   const [qty, setQty] = useState(1);
//   const [size, setSize] = useState(priceOptions[0] || "");
//   const data = useCart();
//   const priceRef = useRef();

//   useEffect(() => {
//     setSize(priceRef.current.value);
//   }, [priceOptions]);

//   const handleAddToCart = async () => {
//     if (!props.foodItem) {
//       console.error('Food item is undefined!');
//       return;
//     }

//     console.log('Executing handleAddToCart');
//     console.log('Food ID:', props.foodItem._id);
//     console.log('Options:', options);
//     console.log('Selected Size:', size);

//     for (const item of data) {
//       if (item.id === props.foodItem._id) {
//         if (item.size === size) {
//           const finalPrice = qty * parseInt(options[size]);
//           console.log('Updating item in cart:', { type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty });
//           await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty });
//           return;
//         }
//         break;
//       }
//     }

//     const finalPrice = qty * parseInt(options[size]);
//     console.log('Adding item to cart:', {
//       type: "ADD",
//       id: props.foodItem._id,
//       name: props.foodItem._name,
//       price: finalPrice,
//       qty: qty,
//       size: size,
//       img: props.foodItem.img // Assuming img is available in props.foodItem
//     });
//     await dispatch({
//       type: "ADD",
//       id: props.foodItem._id,
//       name: props.foodItem._name,
//       price: finalPrice,
//       qty: qty,
//       size: size,
//       img: props.foodItem.img // Assuming img is available in props.foodItem
//     });
//   };
//   // ... (previous code)



//   return (
//     <div className="mb-3 mx-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
//       {props.foodItem ? (
//         <div className="container mt-3 mx-2">
//           <div className="card" style={{ width: "18rem", maxHeight: "360px", margin: "20px 10px" }}>
//             {props.foodItem.img && <img src={props.foodItem.img} className="d-block w-100" alt="..." style={{ height: "120px", objectFit: "fill" }} />}
//             {props.foodItem.name && <h5 className="card-title">{props.foodItem.name}</h5>}
//             <div className="card-body">
//               <div className='container w-100'>
//                 <div className="d-flex justify-content-between align-items-center">
//                   <select className='m-2 h-75 bg-success rounded custom-select' onChange={(e) => setQty(e.target.value)}>
//                     {Array.from(Array(6), (e, i) => (
//                       <option key={i + 1} value={i + 1}>{i + 1}</option>
//                     ))}
//                   </select>
//                   <select className='m-2 h-75 bg-success rounded custom-select' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
//                     {priceOptions.map((data) => (
//                       <option key={data} value={data}>{data}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className='d-inline h-100 fs-5'>
//                   Rs.{qty * parseInt(options[size])}/-
//                 </div>
//               </div>
//               <hr />
//               <button className={'btn btn-success justify-center ms-2'} onClick={handleAddToCart}>Add to Cart</button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div>Food item is undefined</div>
//       )}
//     </div>
//   );
// }






// import React, { useState, useEffect, useRef } from 'react';
// import { useDispatchCart, useCart } from './ContextReducer';

// export default function Card(props) {
//   const dispatch = useDispatchCart();
//   const options = props.options || {};
//   const priceOptions = options ? Object.keys(options) : [];
//   const [qty, setQty] = useState(1);
//   const [size, setSize] = useState(priceOptions[0] || "");
//   const data = useCart();
//   const priceRef = useRef();

//   useEffect(() => {
//     setSize(priceRef.current.value);
//   }, [priceOptions]);

//   const handleAddToCart = async () => {
//     if (!props.foodItem) {
//       console.error('Food item is undefined!');
//       return;
//     }

//     console.log('Executing handleAddToCart');
//     console.log('Food ID:', props.foodItem._id);
//     console.log('Options:', options);
//     console.log('Selected Size:', size);

//     for (const item of data) {
//       if (item.id === props.foodItem._id) {
//         if (item.size === size) {
//           const finalPrice = qty * parseInt(options[size]);
//           console.log('Updating item in cart:', { type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty });
//           await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty });
//           return;
//         }
//         break;
//       }
//     }

//     const finalPrice = qty * parseInt(options[size]);
//     console.log('Adding item to cart:', {
//       type: "ADD",
//       id: props.foodItem._id,
//       name: props.foodItem._name,
//       price: finalPrice,
//       qty: qty,
//       size: size,
//       img: props.foodItem.img // Assuming img is available in props.foodItem
//     });
//     await dispatch({
//       type: "ADD",
//       id: props.foodItem._id,
//       name: props.foodItem._name,
//       price: finalPrice,
//       qty: qty,
//       size: size,
//       img: props.foodItem.img // Assuming img is available in props.foodItem
//     });
//   };

//   return (
//     <div className="mb-3 mx-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
//       {props.foodItem ? (
//         <div className="container mt-3 mx-2">
//           <div className="card" style={{ width: "18rem", margin: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
//             {props.foodItem.img && <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "cover" }} />}
//             <div className="card-body">
//               {props.foodItem.name && <h5 className="card-title">{props.foodItem.name}</h5>}
//               <div className='container w-100'>
//                 <div className="d-flex justify-content-between align-items-center">
//                   <select className='m-2 h-75 bg-success rounded custom-select' onChange={(e) => setQty(e.target.value)}>
//                     {Array.from(Array(6), (e, i) => (
//                       <option key={i + 1} value={i + 1}>{i + 1}</option>
//                     ))}
//                   </select>
//                   <select className='m-2 h-75 bg-success rounded custom-select' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
//                     {priceOptions.map((data) => (
//                       <option key={data} value={data}>{data}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className='d-inline h-100 fs-5'>
//                   Rs.{qty * parseInt(options[size])}/-
//                 </div>
//               </div>
//               <hr />
//               <button className={'btn btn-success w-100'} onClick={handleAddToCart}>Add to Cart</button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div>Food item is undefined</div>
//       )}
//     </div>
//   );
// }



import React, { useState, useEffect, useRef } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';

export default function Card(props) {
  const dispatch = useDispatchCart();
  const options = props.options || {};
  const priceOptions = options ? Object.keys(options) : [];
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(priceOptions[0] || "");
  const data = useCart();
  const priceRef = useRef();

  useEffect(() => {
    setSize(priceRef.current.value);
  }, [priceOptions]);

  const handleAddToCart = async () => {
    if (!props.foodItem) {
      console.error('Food item is undefined!');
      return;
    }

    console.log('Executing handleAddToCart');
    console.log('Food ID:', props.foodItem._id);
    console.log('Options:', options);
    console.log('Selected Size:', size);

    for (const item of data) {
      if (item.id === props.foodItem._id) {
        if (item.size === size) {
          const finalPrice = qty * parseInt(options[size]);
          console.log('Updating item in cart:', { type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty });
          await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty });
          return;
        }
        break;
      }
    }

    const finalPrice = qty * parseInt(options[size]);
    console.log('Adding item to cart:', {
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem._name,
      price: finalPrice,
      qty: qty,
      size: size,
      img: props.foodItem.img // Assuming img is available in props.foodItem
    });
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem._name,
      price: finalPrice,
      qty: qty,
      size: size,
      img: props.foodItem.img // Assuming img is available in props.foodItem
    });
  };

  return (
    <div className="mb-3 mx-auto" style={{ maxWidth: '600px' }}>
      {props.foodItem ? (
        <div className="container mt-3">
          <div className="card" style={{ width: "18rem", margin: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            {props.foodItem.img && <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "cover" }} />}
            <div className="card-body">
              {props.foodItem.name && <h5 className="card-title">{props.foodItem.name}</h5>}
              <div className='container w-100'>
                <div className="d-flex justify-content-between align-items-center">
                  <select className='m-2 h-75 bg-success rounded custom-select' onChange={(e) => setQty(e.target.value)}>
                    {Array.from(Array(6), (e, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                  <select className='m-2 h-75 bg-success rounded custom-select' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                    {priceOptions.map((data) => (
                      <option key={data} value={data}>{data}</option>
                    ))}
                  </select>
                </div>
                <div className='d-inline h-100 fs-5'>
                  Rs.{qty * parseInt(options[size])}/-
                </div>
              </div>
              <hr />
              <button className={'btn btn-success w-100'} onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      ) : (
        <div>Food item is undefined</div>
      )}
    </div>
  );
}
