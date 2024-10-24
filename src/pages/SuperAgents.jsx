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

export default function SuperAgents(){
    return (
        <>
              <h3 className="my-10 text-2xl font-semibold text-center text-black">এজেন্ট এর আইডি নাম্বার দিয়ে খুজুনঃ</h3>

        <HeaderForm/>
<div className="border-2 mx-4 md:mx-14">
<SuperAgentBanner/>
<SuperAgentFirstTable/>
<SuperAgentSecondTable/>
<SuperAgentThirdTable/>
<SuperAgentFourthTable/>
<SuperAgentFifthTable/>
<SuperAgentSixthTable/>
<SuperAgentSeventhTable/>
<SuperAgentEightTable/>
{/* <SuperAgentNinthTable/> */}
{/* <SuperAgentTenthTable/> */}
</div>

     </>
    );
}