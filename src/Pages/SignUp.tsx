
const SignUp: React.FC = () => {
  return (
      <div className=" w-full h-screen flex flex-col items-center justify-center text-[#07161a]">
        <div className="mb-10 w-full gap-4 flex flex-col items-start md:max-w-md ">
          <h2 className=" text-5xl font-semibold tracking-wide opacity-80">New Here?</h2>
          <p className=" text-xl tracking-wide">
            Create your own Account or Login?{" "}
            <a href="/" className="text-[#e7634b] underline">
              Login
            </a>
          </p>
        </div>
        <form className="md:w-full gap-6 flex flex-col max-w-md">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text tracking-wide text-lg">Email</span>
            </label>
            <input
              type="email"
              placeholder="email address"
              className="input input-bordered w-full rounded-full max-w-md border-1 border-black"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text tracking-wide text-lg">Username</span>
            </label>
            <input
              type="email"
              placeholder="email address"
              className="input input-bordered w-full rounded-full max-w-md border-1 border-black"
            />
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text tracking-wide text-lg ">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered w-full rounded-full max-w-md border-1 border-black"
            />
          </div>
          
          <button className="p-2 bg-[#e7634b] hover:bg-white hover:text-[#e6734b] text-white duration-300 text-xl rounded-full w-full max-w-md">
            Sign In
          </button>
        </form>
        <div className="flex w-full max-w-[380px] py-8">
        <hr className=" border-[#fff9f7] w-full border-2 my-auto" />
        <p className="w-full text-center bg-[#fff9f7] p-1">or continue with </p>
        
        <hr className=" border-[#fff9f7] w-full border-2 my-auto" />
        </div>
        <div className="flex items-center justify-around w-full max-w-xs space-x-4 mt-3">
          <button
            className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="w-6 h-6 "
            >
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
            
          </button>
          <button
            className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 "
              viewBox="0 0 48 48"
            >
              <path
                fill="#fbc02d"
                d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
              />
              <path
                fill="#e53935"
                d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
              />
              <path
                fill="#4caf50"
                d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
              />
              <path
                fill="#1565c0"
                d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
              />
            </svg>
          </button>
        </div>
      </div>
  );
};

export default SignUp;
