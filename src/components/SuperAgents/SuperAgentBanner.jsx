import superagentbanner from "../../assets/superagentbannner.jpg";
export default function SuperAgentBanner() {
  return (
    <div className="mt-10 mx-4 md:mx-10">
      <div>
        <img className="mx-auto mb-8 w-full" src={superagentbanner} alt="" />
      </div>
      <div>
        <h3 className="mb-4 text-2xl font-semibold text-left text-black">
          এজেন্ট দের সাথে লেনদেন এর আগে ভেল্কির নিয়ম গুলো জেনে নিন!!
        </h3>
        <p className="text-base w-full md:text-md  font-semibold text-left">
          **প্রতারনার হাত থেকে বাচতে সবার আগে ভিজিট করুন ভেল্কি সাইটঃ VELKI.COM
          **হোয়াটসঅ্যাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ বা লেনদেন করা
          যাবে না এবং করলে তা গ্রহনযোগ্য হবে না।
        </p>
      </div>
      <h3 className="my-10 text-lg md:text-2xl font-bold text-center text-black">
      VELKI SUPER AGENT LIST

      </h3>
    </div>
  );
}
