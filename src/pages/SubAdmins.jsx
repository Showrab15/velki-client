
import SubAdminFirstTable from "../components/SubAdmins/SubAdminFirstTable";
import { Helmet } from "react-helmet-async";


export default function SubAdmins(){


    
    return (
        <>
              {/* <h3 className="my-10 text-2xl font-semibold text-center text-black">এজেন্ট এর আইডি নাম্বার দিয়ে খুজুনঃ</h3> */}
              <Helmet prioritizeSeoTags>
        <title>
         সাব এডমিন লিস্ট || এজেন্ট এর আইডি নাম্বার দিয়ে খুজুনঃ - ভেল্কি Agents
        </title>
        <meta
          property="og:title"
          content="Our Sub Admins  || Velki Sub Admin  List - Velki Agents"
        />
        <meta
          property="og:description"
          content="ভেল্কি অটো ডিপোজিট এজেন্ট ... আপনি এখন থেকে সরাসরি ভেল্কি সাইটে এজেন্ট ছাড়াই একাউন্ট খুলতে পারবেন। এই খানে সব কিছু অটোমেটিক - অপেক্ষার কোন বালাই নাই। দিন রাত ২৪ ঘন্টা ডিপোজিট এবং উইথড্র করতে পারবেন।"
        />
        {/* <meta
          property="og:url"
          content="https://www.triogenexports.com/products"
        />
        <link rel="canonical" href="https://www.triogenexports.com/products" />
        <meta
          property="og:image"
          content="https://i.ibb.co.com/Xjw2hM1/triogenblack.png"
        /> */}
      </Helmet>

<div className="border-[1px] mx-4 md:mx-14">
<SubAdminFirstTable />
</div>

     </>
    );
}