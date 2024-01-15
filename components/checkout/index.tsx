export default function CheckoutUI() {
  return (
    <>
      <div className="w-full text-sm">
        <form action="">
          <div className="contact my-16">
            <p className="text-lg font-semibold">Contact information</p>
            <div className="my-2">
              <label htmlFor="fname" className="my-4">
                Email address:
                <input
                  required
                  id="email"
                  type="email"
                  name="email"
                  className="text-base leading-4 p-2 relative z-0 w-full focus:outline-none text-gray-800 placeholder-gray-800 dark:text-white dark:placeholder-white dark:border-white dark:bg-gray-900 border border-gray-800"
                />
              </label>
            </div>
          </div>
          <div className="shipping my-16">
            <p className="text-lg font-semibold">Shipping information</p>
            <div className="flex flex-col md:flex-row gap-6 mt-4">
              <label htmlFor="fname" className="w-full">
                First name:
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  required
                  className="text-base leading-4 p-2 relative z-0 w-full focus:outline-none text-gray-800 placeholder-gray-800 dark:text-white dark:placeholder-white dark:border-white dark:bg-gray-900 border border-gray-800"
                />
              </label>
              <label htmlFor="lname" className="w-full">
                Last name:
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  required
                  className="text-base leading-4 p-2 relative z-0 w-full focus:outline-none text-gray-800 placeholder-gray-800 dark:text-white dark:placeholder-white dark:border-white dark:bg-gray-900 border border-gray-800"
                />
              </label>
            </div>
            <div className="my-4">
              <label htmlFor="street" className="w-full">
                Street:
                <input
                  type="text"
                  id="street"
                  name="street"
                  required
                  className="text-base leading-4 p-2 relative z-0 w-full focus:outline-none text-gray-800 placeholder-gray-800 dark:text-white dark:placeholder-white dark:border-white dark:bg-gray-900 border border-gray-800"
                />
              </label>
            </div>

            <div className="flex flex-col md:flex-row gap-6 my-4">
              <label htmlFor="barangay" className="w-full">
                Region:
                <input
                  type="text"
                  id="region"
                  name="region"
                  required
                  className="text-base leading-4 p-2 relative z-0 w-full focus:outline-none text-gray-800 placeholder-gray-800 dark:text-white dark:placeholder-white dark:border-white dark:bg-gray-900 border border-gray-800"
                />
              </label>
              <label htmlFor="barangay" className="w-full">
                City/Municipality:
                <input
                  type="text"
                  id="cm"
                  name="cm"
                  required
                  className="text-base leading-4 p-2 relative z-0 w-full focus:outline-none text-gray-800 placeholder-gray-800 dark:text-white dark:placeholder-white dark:border-white dark:bg-gray-900 border border-gray-800"
                />
              </label>
              <label htmlFor="barangay" className="w-full">
                Barangay:
                <input
                  type="text"
                  id="barangay"
                  name="barangay"
                  required
                  className="text-base leading-4 p-2 relative z-0 w-full focus:outline-none text-gray-800 placeholder-gray-800 dark:text-white dark:placeholder-white dark:border-white dark:bg-gray-900 border border-gray-800"
                />
              </label>
            </div>
            <div className="my-4">
              <label htmlFor="phone">
                Phone number:
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="123-45-678"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                  className="text-base leading-4 p-2 relative z-0 w-full focus:outline-none text-gray-800 dark:text-white dark:placeholder-white dark:border-white dark:bg-gray-900 border border-gray-800"
                />
              </label>
            </div>
          </div>
          <div className="payment my-16">
            <p className="text-lg font-semibold">Payment</p>
            <div className="flex gap-6 my-4">
              <label htmlFor="credit-card">
                <input
                  type="radio"
                  name="payment"
                  id="credit-card"
                  className="mr-2 text-base"
                />
                Credit card
              </label>
              <label htmlFor="paypal">
                <input
                  type="radio"
                  name="payment"
                  id="paypal"
                  className="mr-2 text-lg"
                />
                Paypal
              </label>
            </div>
            <div className="my4">
              <label htmlFor="card-number">
                Card number:
                <input
                  required
                  type="number"
                  name="card-number"
                  id="card-number"
                  className="text-base leading-4 p-2 relative z-0 w-full focus:outline-none text-gray-800 placeholder-gray-800 dark:text-white dark:placeholder-white dark:border-white dark:bg-gray-900 border border-gray-800"
                />
              </label>
            </div>

            <div className="my-4">
              <label htmlFor="name-on-card">
                Name on card:
                <input
                  required
                  type="text"
                  name="name-on-card"
                  id="name-on-card"
                  className="text-base leading-4 p-2 relative z-0 w-full focus:outline-none text-gray-800 placeholder-gray-800 dark:text-white dark:placeholder-white dark:border-white dark:bg-gray-900 border border-gray-800"
                />
              </label>
            </div>

            <div className="flex gap-6 my-4">
              <label htmlFor="expiration" className="w-full">
                Expiration date:
                <input
                  required
                  type="text"
                  name="expiration"
                  id="expiration"
                  className="text-base leading-4 p-2 relative z-0 w-full focus:outline-none text-gray-800 placeholder-gray-800 dark:text-white dark:placeholder-white dark:border-white dark:bg-gray-900 border border-gray-800"
                />
              </label>
              <label htmlFor="cvc" className="w-1/3">
                CVC:
                <input
                  required
                  type="text"
                  name="cvc"
                  id="cvc"
                  className="text-base leading-4 p-2 relative z-0 w-full focus:outline-none text-gray-800 placeholder-gray-800 dark:text-white dark:placeholder-white dark:border-white dark:bg-gray-900 border border-gray-800"
                />
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
