// import Link from "next/link";

// const page = () => {
// //   return (
//     <div>
//       <h2>Checkout</h2>
//       <div className=" flex gap-4">
//         <div>
//           <Link href="">
//             <button className="btn btn-active btn-secondary">PayPal</button>
//           </Link>
//         </div>
//         <div>
//           <Link href="">
//             <button className="btn btn-active btn-info">Amazon</button>
//           </Link>
//         </div>
//         <div>
//           <Link href="">
//             <button className="btn btn-active btn-secondary">Visa</button>
//           </Link>
//         </div>
//         <div>
//           <Link href="">
//             <button className="btn btn-active btn-primary">Master Card</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;
"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { useRouter } from "next/navigation";
import { CreditCard, DollarSign } from "lucide-react";

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState("credit");
  const router = useRouter();

  const handlePayment = () => {
    // Simulate payment success
    alert(`Payment completed with ${selectedMethod}`);
    localStorage.removeItem("cart");
    router.push("/");
  };

  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto p-6 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-6">
          Checkout & Payment
        </h1>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Select Payment Method
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button
                className={`btn ${
                  selectedMethod === "paypal"
                    ? "btn-primary"
                    : "btn-outline btn-primary"
                }`}
                onClick={() => setSelectedMethod("paypal")}
              >
                <DollarSign className="mr-2" />
                PayPal
              </button>
              <button
                className={`btn ${
                  selectedMethod === "visa"
                    ? "btn-info"
                    : "btn-outline btn-info"
                }`}
                onClick={() => setSelectedMethod("visa")}
              >
                <CreditCard className="mr-2" />
                Visa
              </button>
              <button
                className={`btn ${
                  selectedMethod === "mastercard"
                    ? "btn-warning"
                    : "btn-outline btn-warning"
                }`}
                onClick={() => setSelectedMethod("mastercard")}
              >
                <CreditCard className="mr-2" />
                MasterCard
              </button>
              <button
                className={`btn ${
                  selectedMethod === "debit"
                    ? "btn-success"
                    : "btn-outline btn-success"
                }`}
                onClick={() => setSelectedMethod("debit")}
              >
                <CreditCard className="mr-2" />
                Debit Card
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Card Details</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Card Holder Name"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="Card Number"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="Expiry Date (MM/YY)"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="CVV"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="text-right">
            <button className="btn btn-success mt-4" onClick={handlePayment}>
              Confirm & Pay
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentPage;
