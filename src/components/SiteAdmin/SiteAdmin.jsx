import SiteAdminFirstTable from "./SiteAdminFirstTable";

export default function Siteadmin() {
  return (
    <div className="mt-10 mx-4 md:mx-14 border-[1px]">
      <div className="m-8">
        <h3 className="mb-4 text-2xl font-semibold text-left text-black">
          এজেন্ট দের সাথে লেনদেন এর আগে ভেল্কির নিয়ম গুলো জেনে নিন!!
        </h3>
        <p className=" md:text-[14px] text-xs  font-semibold leading-8  text-left">
          **প্রতারনার হাত থেকে বাচতে সবার আগে ভিজিট করুন ভেল্কি সাইটঃ VELKI.COM
          **হোয়াটসঅ্যাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ বা লেনদেন করা <br />
          যাবে না এবং করলে তা গ্রহনযোগ্য হবে না।
        </p>
      </div>
      <h2 className="my-10 text-lg md:text-[28px] font-bold text-center text-black uppercase">
        VELKI Site ADMIN LIST
      </h2>
      <SiteAdminFirstTable/>
    </div>
  );
}
