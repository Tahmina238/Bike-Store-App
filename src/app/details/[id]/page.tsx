"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Bike } from "@/types/bike";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { toast } from "sonner";

const ProductDetails = () => {
  const { id } = useParams();
  const [bike, setBike] = useState<Bike | null>(null);

  const handleAddToCart = () => {
    if (!bike) return;
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...existingCart, bike];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Bike added to cart!");
  };

  useEffect(() => {
    const fetchBikeDetails = async () => {
      const res = await fetch(
        `https://bike-store-backend-steel.vercel.app/displayProduct/${id}`
      );
      const data = await res.json();
      setBike(data.data);
    };
    if (id) fetchBikeDetails();
  }, [id]);

  if (!bike) return <div className="p-4 text-center">Loading...</div>;
  console.log(bike);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <h1 className="text-2xl font-bold text-center p-4">Product Details</h1>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
          <div className="card bg-base-100 shadow-sm flex flex-col lg:flex-row gap-4">
            <figure className="w-full lg:w-1/2">
              {bike?.img && (
                <Image
                  src={bike.img}
                  alt={bike.title}
                  width={1000}
                  height={700}
                  className="object-cover w-full rounded-lg max-h-[350px] sm:max-h-[450px] md:max-h-[550px] lg:max-h-full"
                />
              )}
            </figure>
            <div className="card-body w-full lg:w-1/2 space-y-4">
              <h2 className="card-title text-2xl">{bike.title}</h2>
              <p className="text-base text-gray-600">{bike.description}</p>
              <p className="text-black-600 font-bold text-xl">
                Price: ${bike.price}
                {/* Color:${bike.color}
                Size:${bike.size} */}
              </p>
              <p className="text-yellow-500 font-medium">⭐ {bike.ratings}</p>
              <div className="card-actions justify-end mt-4">
                <button
                  onClick={handleAddToCart}
                  className="btn btn-primary w-full lg:w-auto"
                >
                  Add to Cart
                </button>
                <button className="btn btn-primary w-full sm:w-auto">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails;
