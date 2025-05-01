"use client";
import { Bike } from "@/types/bike";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const AllProducts = () => {
  // all Bikes page
  const [products, setProducts] = useState<Bike[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        "https://bike-store-backend-steel.vercel.app/displayProduct"
      );
      const data = await response.json();
      setProducts(data.data);
    };
    fetchProduct();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {products.map(
        (
          bike: Bike //maping bikes
        ) => (
          <div key={bike._id} className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <Image
                width={300}
                height={300}
                src={bike?.img}
                className="img-fluid rounded-top"
                alt={bike.title}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{bike.title}</h2>
              <p>{bike.description}</p>
              <p className="text-green-600 font-semibold">${bike.price}</p>
              <p className="text-yellow-500">⭐ {bike.ratings}</p>
              <div className="card-actions">
                <Link href={`/details/${bike._id}`}>
                  <button className="btn btn-primary">See details</button>
                </Link>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default AllProducts;
