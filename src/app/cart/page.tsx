"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bike } from "@/types/bike";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Bike[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(stored);
  }, []);

  const removeFromCart = (id: string) => {
    const updated = cartItems.filter((item) => item._id !== id);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const handleCheckout = () => {
    // For now, just clear cart and show alert
    alert("Checkout successful!");
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center">
          Your cart is empty.{" "}
          <Link href="/" className="text-blue-500 underline">
            Go shopping
          </Link>
        </p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="card bg-base-100 shadow-sm flex flex-col md:flex-row gap-4 p-4 items-center"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={120}
                  height={100}
                  className="rounded-md"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-green-600 font-medium">${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="btn btn-error btn-sm"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          <div className="text-right mt-6">
            <Link href="/checkout">
              {" "}
              <button className="btn btn-primary" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
