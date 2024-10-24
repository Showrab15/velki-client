import HeaderForm from "../components/HeaderForm/HeaderForm";
import SuperAgentBanner from "../components/SuperAgents/SuperAgentBanner";
import SuperAgentEightTable from "../components/SuperAgents/SuperAgentEightTable";
import SuperAgentFifthTable from "../components/SuperAgents/SuperAgentFifthTable";
import SuperAgentFirstTable from "../components/SuperAgents/SuperAgentFirstTable";
import SuperAgentFourthTable from "../components/SuperAgents/SuperAgentFourthTable";
import SuperAgentNinthTable from "../components/SuperAgents/SuperAgentNinthTable";
import SuperAgentSecondTable from "../components/SuperAgents/SuperAgentSecondTable";
import SuperAgentSeventhTable from "../components/SuperAgents/SuperAgentSeventhTable";
import SuperAgentSixthTable from "../components/SuperAgents/SuperAgentSixthTable";
import SuperAgentTenthTable from "../components/SuperAgents/SuperAgentTenthTable";
import SuperAgentThirdTable from "../components/SuperAgents/SuperAgentThirdTable";
import { Helmet } from "react-helmet-async";

export default function SuperAgents() {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>
          সুপার এজেন্ট || এজেন্ট এর আইডি নাম্বার দিয়ে খুজুনঃ - ভেল্কি
        </title>
        <meta
          property="og:title"
          content="Our super agents || Velki Super Agent List - Velki"
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

      <h3 className="my-10 text-2xl font-semibold text-center text-black">
        এজেন্ট এর আইডি নাম্বার দিয়ে খুজুনঃ
      </h3>

      <HeaderForm />
      <div className="border-2 mx-4 md:mx-14">
        <SuperAgentBanner />
        <SuperAgentFirstTable />
        <SuperAgentSecondTable />
        <SuperAgentThirdTable />
        <SuperAgentFourthTable />
        <SuperAgentFifthTable />
        <SuperAgentSixthTable />
        <SuperAgentSeventhTable />
        <SuperAgentEightTable />
        {/* <SuperAgentNinthTable/> */}
        {/* <SuperAgentTenthTable/> */}
      </div>
    </>
  );
}
