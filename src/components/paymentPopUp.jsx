function PaymentPopUp() {
  return (
    <div className=" flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>

          <h1 className="brand text-xl font-bold flex text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-600">
            E.Com
          </h1>
        </div>
        <h3 className="text-lg font-bold mb-4">
          Address Saved! and Payment Method Selected!
        </h3>
        <p className="text-gray-600">
          Your address and payment method have been successfully saved.
        </p>
      </div>
    </div>
  );
}
export default PaymentPopUp;
