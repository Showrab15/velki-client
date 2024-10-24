import HeaderForm from "../components/HeaderForm/HeaderForm";
import EightTable from "../components/MasterAgent/EightTable";
import FifthTable from "../components/MasterAgent/FifthTable";
import FirstTable from "../components/MasterAgent/FirstTable";
import FourthTable from "../components/MasterAgent/FourthTable";
import MasterAgentBanner from "../components/MasterAgent/MasterAgentBanner";
import NinthTable from "../components/MasterAgent/NithTable";
import SecondTable from "../components/MasterAgent/SecondTable";
import SeventhTable from "../components/MasterAgent/SeventhTable";
import SixthTable from "../components/MasterAgent/SixthTable";
import Tenth from "../components/MasterAgent/TenthTable";
import ThirdTable from "../components/MasterAgent/ThirdTable";
import { Helmet } from "react-helmet-async";

export default function MasterAgent(){
    return (
        <>
     <Helmet prioritizeSeoTags>
        <title>
         মাস্টার এজেন্ট লিস্ট || এজেন্ট এর আইডি নাম্বার দিয়ে খুজুনঃ - ভেল্কি Agents
        </title>
        <meta
          property="og:title"
          content="Our Master Agents List  || Velki Master Agents  List - Velki Agents"
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

              <h3 className="my-10 text-2xl font-semibold text-center text-black">এজেন্ট এর আইডি নাম্বার দিয়ে খুজুনঃ</h3>

        <HeaderForm/>
<div className="border-[1px] mx-4 md:mx-14">
<MasterAgentBanner/>
<FirstTable/>
<SecondTable/>
<ThirdTable/>
<FourthTable/>
<FifthTable/>
<SixthTable/>
<SeventhTable/>
<EightTable/>
<NinthTable/>
<Tenth/>
</div>

     </>
    );
}