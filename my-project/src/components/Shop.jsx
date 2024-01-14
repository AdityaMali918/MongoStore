import React, { useState, useEffect } from "react";
import * as Realm from "realm-web";
import { Link } from 'react-router-dom';

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 8; 

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    const fetchData = async () => {
      const REAL_APP_ID = "products-ndbcu";
      const app = new Realm.App({ id: REAL_APP_ID });
      const credentials = Realm.Credentials.anonymous();

      try {
        const user = await app.logIn(credentials);
        if(search){
          const searchplace = await user.functions.searchProducts(search);
          console.log(searchplace);
          setProducts(searchplace);
        }
        else{
          const searchplace = await user.functions.getAllProduct(currentPage,pageSize);
        console.log(searchplace);
        setProducts(searchplace.result);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Invoke the async function directly

    // No need to return a cleanup function if there's nothing to clean up
  }, [search,currentPage]); // Empty dependency array to run the effect only once


  const handleLoadMore = () => {
    console.log(currentPage);
    if(currentPage >= 2){
      setCurrentPage(1);
    }
    else{
    setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="py-3 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" border ml-2 my-2 py-2 px-3 rounded-xl w-1/2"
          placeholder="search..."
        />
      </form>
      <div className="mt-2 grid gap-x-6 gap-y-6 grid-cols-2 pl-2 md:grid-cols-3 lg:grid-cols-4 rounded-md mx-auto overflow-hidden ">
  {products.length > 0 &&
    products.map((place) => (
      <Link to={`/product/${place.id}`} key={place._id} className="relative mr-2  bg-gray-200 rounded-2xl p-3 shadow-md shadow-bottom">
        <div className="bg-gray-300 rounded-2xl flex mb-2">
          <img
            className="rounded-2xl object-cover aspect-square"
            src={place.image}
            alt=""
          />
          <button className="absolute bottom-16 right-8 bg-green-600 rounded-full w-21">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>
          </button>
        </div>
        <div>
          <h3 className="font-bold leading-4">{place.name}</h3>
          <h2 className="text-sm truncate leading-4 mt-2">{place.category}</h2>
          <div className="mt-1">
            Price: <span className="font-bold">${place.price}</span>
          </div>
        </div>
      </Link>
    ))}
</div>{
  !search &&
<div className="flex justify-center mt-4">
        <button
          onClick={handleLoadMore}
          className="bg-blue-500 text-white px-4 py-2 rounded-full mb-2"
        >
          Load More
        </button>
      </div>
      }
    </>
  );
}
