const SubscriptionBar = () => {
  return (
    <div className=" h-60 w-10/12 mx-auto flex justify-center items-center bg-linear-to-l from-teal-200 to-violet-200 gap-5 mt-12 rounded-2xl">
      <div className=" w-1/3">
        <p className="text-[#1FD7DD]">Weekly Drop</p>
        <h2 className=" text-2xl font-bold">Good Games, Delivered.</h2>
        <p className=" text-gray-500">
          One thoughtful email every Friday: hand-picked new releases, co-op
          finds, and hidden gems.
        </p>
      </div>
      <div className=" w-1/3">
        <div className="join">
          <div>
            <label className="input validator join-item border border-violet-500">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="Enter Your Email" required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <button className="btn btn-neutral join-item border-0 shadow-none bg-violet-500 text-white">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBar;
