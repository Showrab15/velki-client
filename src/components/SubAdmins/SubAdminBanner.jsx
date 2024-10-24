import subadminbanner from "../../assets/subadminbanner.jpg";
export default function SubAdminBanner() {
  return (
    <div className="mt-10 mx-4 md:mx-10">
      <div>
        <img className="mx-auto mb-8 w-full" src={subadminbanner} alt="" />
      </div>
      <div className="m-2">
        <h3 className="mb-3 md:text-2xl text-[16px] font-semibold text-left text-black">
          এজেন্ট দের সাথে লেনদেন এর আগে ভেল্কির নিয়ম গুলো জেনে নিন!!
        </h3>
        <p className=" md:text-[14px] text-xs  font-semibold leading-8  text-left">
          **প্রতারনার হাত থেকে বাচতে সবার আগে ভিজিট করুন ভেল্কি সাইটঃ VELKI.COM
          **হোয়াটসঅ্যাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ বা লেনদেন করা <br className="md:block hidden"/>
          যাবে না এবং করলে তা গ্রহনযোগ্য হবে না।
        </p>
      </div>
      <h3 className="my-10 leading-[40px] text-3xl font-bold text-center text-black">
      VELKI SUB ADMIN LIST


      </h3>
    </div>
  );
}
