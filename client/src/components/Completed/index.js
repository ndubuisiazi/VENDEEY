export default function Final() {
    return (
      <div className="container md:mt-10">
        <div className="flex flex-col items-center">
          <div className="wrapper">
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
  
          <div className="mt-3 text-xl font-semibold uppercase" style={{color:"#388087"}}>
            Congratulations!
          </div>
          <div className="text-lg font-semibold text-gray-500">
            Your Account has been created.
          </div>
          <a className="mt-1" href="/">
            <button className="w-56 inline-block px-7 py-3 bg-black text-white font-medium lg:text-lg text-4xl leading-snug uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out">
              Close
            </button>
          </a>
        </div>
      </div>
    );
  }
  