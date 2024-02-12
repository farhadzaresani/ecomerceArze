const WhyUseThisSection = () => {
  return (
    <div className='hidden md:flex flex-col justify-center items-center h-[748px]'>
      <div className=' flex flex-col md:flex-row w-full h-full'>
        <div className='bg-[url("/assets/Images/homePage/bgPattern.png")] bg-no-repeat bg-center w-[40%] h-full flex'>
          <h1 className='m-auto text-[37.87px] font-[500] w-[328.99px]'>
            چرا باید از این سامانه
            <span className='font-[900]'> استفاده کنیم ؟!</span>
          </h1>
        </div>
        <div className='text-[#111928]  w-full flex justify-center items-center'>
          <div className='w-[704px] h-[416px] text-justify'>
            <p className='m-auto font-[400] text-[24px] leading-[59.28px]'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاق
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUseThisSection;
