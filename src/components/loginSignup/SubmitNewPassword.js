const SubmitNewPassword = ({ submit }) => {
  return (
    <form
      className='bg-white w-[431px]  flex flex-col justify-between items-center py-8 px-4 rounded-3xl
shadow-[0px_4px_10px_rgba(0,0,0,0.12)]'
    >
      <div className='flex flex-col justify-center items-center gap-2 '>
        <h1 className='font-bold text-3xl text-green-500'> تایید بازنشانی </h1>
        <p className='font-medium text-gray-600 text-xs'>
          رمز عبور با موفقیت بازنشانی شد، لطفا برای ورود اطلاعات جدید را وارد
          کنید
        </p>
      </div>

      <button
        onClick={submit}
        className='bg-cream text-navy w-full py-2.5 font-bold rounded-lg mt-6 '
      >
        تایید و ورود
      </button>
    </form>
  );
};

export default SubmitNewPassword;
