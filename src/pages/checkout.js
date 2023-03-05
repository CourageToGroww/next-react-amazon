import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";


function Checkout() {
  const items = useSelector(selectItems);
  const { session } = useSession();

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-2xl mx-auto">
      <title>Checkout</title>
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            style={{ objectFit: "contain" }}
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className=" text-3xl border-b pb-4">
              {items.length === 0 ? "Your basket is empty" : "Shopping basket"}
            </h1>

            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/* Right */}
        <div>
          {items.length > 0 && (
            <>
            <h2 className='whitespace-nowrap font-bold'>Subtotal ({items.length} items):
            <span classname="font-bold">
             {/* <Currency quantity={total} currency="USD" /> */}
            </span>

            </h2>
            
            <button className={`button mt-2 ${!session && 'from-gray-300 to bg-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
              {!session ? 'Sign in to check out' : 'Proceed to checkout'}
            </button>
            </>


          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
