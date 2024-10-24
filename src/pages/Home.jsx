import BannerLayout from "../Layout/BannerLayout";
import RandomMasterAgent from "../components/RandomMasterAgent/RandomMasterAgent";
import FAQ from "../components/FAQ/FAQ";
import FAQList from "../components/FAQ/FAQList";
import AgentsList from "../components/AgentsList/AgentsList";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div className="overflow-hidden">
 <Helmet prioritizeSeoTags>
        <title>
         Velki এজেন্ট লিস্ট || এজেন্ট এর আইডি নাম্বার দিয়ে খুজুনঃ - ভেল্কি Agents
        </title>
        <meta
          property="og:title"
          content="Our  Agents List  || Velki  Agents  List - Velki Agents"
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

        <BannerLayout/>
          <RandomMasterAgent/>
          <FAQ/>
          <FAQList/>
          <AgentsList/>
    </div>
  )
}
