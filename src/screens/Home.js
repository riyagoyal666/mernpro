




// import React, { useEffect, useState } from 'react';
// import Card from '../components/Card';
// import Footer from '../components/Footer';
// import Navbar from '../components/NavBar';

// export default function Home() {
//   const [foodCat, setFoodCat] = useState([]);
//   const [foodItems, setFoodItems] = useState([]);
//   const [search, setSearch] = useState('');

//   const loadFoodItems = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/foodData", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       const data = await response.json();
//       console.log('Received data:', data);
//       setFoodItems(data[0]);
//       setFoodCat(data[1]);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     loadFoodItems();
//   }, []);

//   return (
//     <div>
//       <Navbar />

//       <div>
//         <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
//           <div className="carousel-inner" id='carousel'>
//             <div className="carousel-caption" style={{ zIndex: "9" }}>
//               <div className="d-flex justify-content-center">
//                 <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Search in here..." aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
//                 <button className="btn text-white bg-danger" onClick={() => { setSearch('') }}>X</button>
//               </div>
//             </div>
//             <div className="carousel-item active">
//               <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
//             </div>
//             <div className="carousel-item">
//               <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
//             </div>
//             <div className="carousel-item">
//               <img src="https://source.unsplash.com/random/900x700/?barbeque" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
//             </div>
//           </div>
//           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>

//       <div className='container'>
//         {foodCat.map((data) => (
//           <div key={data.id} className="fs-3 m-3">
//             {data.CategoryName}
//             <hr />
//             <div className='row'>
//               {foodItems.length !== 0 && foodItems
//                 .filter((item) => {
//                   const categoryMatch = item.CategoryName === data.CategoryName;
//                   const nameMatch = item.name.toLowerCase().includes(search.toLowerCase());
//                   console.log('Category Match:', categoryMatch, 'Name Match:', nameMatch);
//                   return categoryMatch && nameMatch;
//                 })
//                 .map((filteredItem) => (
//                   <div key={filteredItem.id} className='col-12 col-md-6 col-lg-3'>
//                     <Card foodName={filteredItem.name} item={filteredItem} options={filteredItem.options[0]} ImgSrc={filteredItem.img} />
//                   </div>
//                 ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       <Footer />
//     </div>
//   );
// }






import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [search, setSearch] = useState('');
  const [userEmail, setUserEmail] = useState(null); 

  const loadFoodItems = async () => {
    try {
     const response = await fetch("http://localhost:5000/api/foodData", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      console.log('Received data:', data);
      setFoodItems(data[0]);
      setFoodCat(data[1]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    loadFoodItems();
  }, []);

  return (
    <div>
      <Navbar />

      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner" id='carousel'>
            <div className="carousel-caption" style={{ zIndex: "9" }}>
              <div className="d-flex justify-content-center">
                <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Search in here..." aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                <button className="btn text-white bg-danger" onClick={() => { setSearch('') }}>X</button>
              </div>
            </div>
           <div className="carousel-item active">
               <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
             <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x700/?barbeque" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
           </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
           </button>
         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
           <span className="visually-hidden">Next</span>
          </button>
         
        </div>
      </div>

      <div className='container'>
        {foodCat.map((data) => (
          <div key={data.id} className="fs-3 m-3">
            {data.CategoryName}
            <hr />
            <div className='row'>
              {foodItems.length !== 0 && foodItems
                .filter((item) => {
                  const categoryMatch = item.CategoryName === data.CategoryName;
                  const nameMatch = item.name.toLowerCase().includes(search.toLowerCase());
                  console.log('Category Match:', categoryMatch, 'Name Match:', nameMatch);
                  return categoryMatch && nameMatch;
                })
                .map((filteredItem) => (
                  <div key={filteredItem.id} className='col-12 col-md-6 col-lg-3'>
                    <Card foodItem={filteredItem} options={filteredItem.options[0]} />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}




