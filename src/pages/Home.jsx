import BannerLayout from "../Layout/BannerLayout";
import RandomMasterAgent from "../components/RandomMasterAgent/RandomMasterAgent";
import FAQ from "../components/FAQ/FAQ";
import FAQList from "../components/FAQ/FAQList";
import AgentsList from "../components/AgentsList/AgentsList";
export default function Home() {
  return (
    <div className="overflow-hidden">
        <BannerLayout/>
          <RandomMasterAgent/>
          <FAQ/>
          <FAQList/>
          <AgentsList/>
    </div>
  )
}
