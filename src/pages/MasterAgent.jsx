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

export default function MasterAgent(){
    return (
        <>
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