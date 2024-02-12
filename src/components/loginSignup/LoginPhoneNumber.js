const LoginPhoneNumber = ({ errorMessage, register, handleSubmit }) => {
  // const onSubmitHandler = (e) => {
  //   // e.preventDefault();
  //   checkPhoneNumber.mutate();
  // };

  // const onChangeHandler = (e) => {
  //   setLoginData({
  //     ...loginData,
  //     phone_number: e.target.value,
  //   });
  // };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white w-screen md:w-[431px] flex flex-col md:justify-between items-center md:py-8  px-4 rounded-3xl
     md:shadow-[0px_4px_10px_rgba(0,0,0,0.12)]"
    >
      <div className="flex flex-col justify-center items-center gap-2 ">
        <h1 className="font-bold text-3xl text-navy md:text-gray-900">ورود</h1>
        <p className="font-medium text-navy md:text-gray-600 text-xs">
          لطفا برای ورود شماره تلفن خود را وارد کنید
        </p>
      </div>
      <div className="flex flex-col justify-center w-full gap-2 mt-8 ">
        <label className="font-medium text-sm text-regalBlue md:text-gray-700 ">
          شماره تلفن همراه
        </label>
        <div className="flex flex-col">
          <input
            {...register("phone_number", {
              pattern: /["09","00","+9"]{2}/,
              required: true,
              maxLength: 14,
              minLength: 11,
            })}
            className={`p-2 outline-none border-2 rounded-lg ${
              errorMessage && "border-red-600"
            }  `}
            placeholder="09123456789"
            type="number"
          />
          {errorMessage && (
            <span className="text-red-600 text-xs mr-2">
              شماره وارد شده نامعتبر است
            </span>
          )}
        </div>
        {/* <div className="flex justify-end text-regalBlue text-sm md:hidden ">
          <button>ورود با رمز عبور</button>
        </div> */}
      </div>
      <button
        type="submit"
        className="bg-cream text-navy w-full py-2.5 font-bold rounded-lg mt-6 "
      >
        ورود
      </button>
      <div className="hidden md:flex justify-center items-center w-full mt-4">
        <div className="w-full h-[1px] bg-gray-300"></div>
        <div
          className="border-[1px] text-gray-300 text-xs font-normal
          p-1 rounded-full min-w-[90px]"
        >
          در غیر اینصورت
        </div>
        <div className="w-full h-[1px] bg-gray-300"></div>
      </div>
      <button
        type="button"
        className="bg-navy text-white w-full py-2.5 font-medium rounded-lg  mt-4 hidden md:block"
      >
        ورود با استفاده از سامانه یکپارچه دولت من
      </button>
    </form>
  );
};

export default LoginPhoneNumber;
