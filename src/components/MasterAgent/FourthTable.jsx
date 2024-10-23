/* eslint-disable no-unused-vars */
// import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
// import { useState, useEffect } from "react";

// export default function FourthTable() {

//     // const agents = [
//     //     { id: 1386, agent: "মাষ্টার", app: "", phone: "+855962560174", complain: "অভিযোগ" },
//     //     { id: 1261, agent: "মাষ্টার", app: "", phone: "+855969476289", complain: "অভিযোগ" },
//     //     { id: 1258, agent: "মাষ্টার", app: "", phone: "+855969482230", complain: "অভিযোগ" },
//     //     { id: 1257, agent: "মাষ্টার", app: "", phone: "+855969482119", complain: "অভিযোগ" },
//     //     { id: 1383, agent: "মাষ্টার", app: "", phone: "+855966556710", complain: "অভিযোগ" },
//     //     { id: 1260, agent: "মাষ্টার", app: "", phone: "+855969481552", complain: "অভিযোগ" },
//     //     { id: 1638, agent: "মাষ্টার", app: "", phone: "+85586951679", complain: "অভিযোগ" },
//     //     { id: 1255, agent: "মাষ্টার", app: "", phone: "+855969482568", complain: "অভিযোগ" },
//     //     { id: 1259, agent: "মাষ্টার", app: "", phone: "+855714377696", complain: "অভিযোগ" },
//     //     { id: 1434, agent: "মাষ্টার", app: "", phone: "+855962582360", complain: "অভিযোগ" },
//     //     { id: 1387, agent: "মাষ্টার", app: "", phone: "+85593254987", complain: "অভিযোগ" },
//     //     { id: 1256, agent: "মাষ্টার", app: "", phone: "+855969483386", complain: "অভিযোগ" },
//     //     { id: 1397, agent: "মাষ্টার", app: "", phone: "+855966554107", complain: "অভিযোগ" },
//     //     { id: 1398, agent: "মাষ্টার", app: "", phone: "+855969476918", complain: "অভিযোগ" }
//     // ];
    
//     const [agents, setAgents] = useState([]);

//     useEffect(() => {
//       fetch("masteragentsfourthtable.json")
//         .then((res) => res.json())
//         .then((data) => setAgents(data));
//     }, []); // Dependency array should be empty to avoid infinite re-renders

    

//   return (
//     <div>
//       <h3 className="mt-4 mb-2 text-md md:text-2xl font-bold text-center text-black">
//       সাব এডমিন 1 এর অধীনে সুপার এজেন্ট 165 এর অধীনে সর্বমোট মাস্টার এজেন্ট আছে 14 জন
//       </h3>
//       <div className="overflow-x-auto p-4">
//       <table className="w-full table-auto border-collapse border border-gray-300">
//         <thead>
//           <tr>
//             {/* Only applying border to <th> */}
//             <th className="border border-gray-400 px-4 py-2 bg-gray-300">ID NO</th>
//             <th className="border border-gray-400 px-4 py-2 bg-gray-300">AGENT</th>
//             <th className="border border-gray-400 px-4 py-2 bg-gray-300">APP</th>
//             <th className="border border-gray-400 px-4 py-2 bg-gray-300">PHONE NUMBER</th>
//             <th className="border border-gray-400 px-4 py-2 bg-gray-300">COMPLAIN</th>
//           </tr>
//         </thead>
//         <tbody>
//           {agents.map((agent, rowIndex) => (
//             <tr
//               key={agent.id}
//               className={rowIndex % 2 === 0 ? "bg-[#f2f2f2] text-center" : "bg-[#e5e5e5]  text-center"}
//             >
//               {/* Row background alternates as per the screenshot */}
//               <td className="border border-gray-300 px-4 py-2">{agent.id}</td>
//               <td className="border border-gray-300 px-4 py-2">{agent.agent}</td>
//               <td className="border border-gray-300 px-4 py-2">
//                 <a
//                   href={agent.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className=" text-center whatsapp-link"
//                 >
//                   <FaWhatsapp className="text-[#23b466] text-3xl  mx-auto" />
//                 </a>
//               </td>
//               <td className="border border-gray-300 px-4 py-2 text-red-500">{agent.phone}</td>
//               <td className="border border-gray-300 px-4 py-2 text-red-500">{agent.complain}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </div>
//   );
// }





// import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
// import { useState, useEffect } from "react";

// export default function ThirdTable() {

//     // const agents = [
//     //     { id: 1463, agent: "মাষ্টার", app: "", phone: "+60176515840", complain: "অভিযোগ" },
//     //     { id: 1692, agent: "মাষ্টার", app: "", phone: "+85587465065", complain: "অভিযোগ" },
//     //     { id: 1464, agent: "মাষ্টার", app: "", phone: "+855967040224", complain: "অভিযোগ" },
//     //     { id: 1472, agent: "মাষ্টার", app: "", phone: "+601124372295", complain: "অভিযোগ" },
//     //     { id: 1589, agent: "মাষ্টার", app: "", phone: "+85586952291", complain: "অভিযোগ" },
//     //     { id: 1695, agent: "মাষ্টার", app: "", phone: "+85587465017", complain: "অভিযোগ" },
//     //     { id: 2024, agent: "মাষ্টার", app: "", phone: "+85581749121", complain: "অভিযোগ" },
//     //     { id: 1462, agent: "মাষ্টার", app: "", phone: "+85581997158", complain: "অভিযোগ" },
//     //     { id: 1496, agent: "মাষ্টার", app: "", phone: "+855969481453", complain: "অভিযোগ" },
//     //     { id: 1593, agent: "মাষ্টার", app: "", phone: "+85586953089", complain: "অভিযোগ" },
//     //     { id: 2029, agent: "মাষ্টার", app: "", phone: "+85581749547", complain: "অভিযোগ" },
//     //     { id: 1684, agent: "মাষ্টার", app: "", phone: "+85569883142", complain: "অভিযোগ" },
//     //     { id: 1693, agent: "মাষ্টার", app: "", phone: "+85587452847", complain: "অভিযোগ" },
//     //     { id: 1465, agent: "মাষ্টার", app: "", phone: "+855969476939", complain: "অভিযোগ" },
//     //     { id: 1679, agent: "মাষ্টার", app: "", phone: "+85587453102", complain: "অভিযোগ" },
//     //     { id: 2028, agent: "মাষ্টার", app: "", phone: "+85581749551", complain: "অভিযোগ" },
//     //     { id: 1918, agent: "মাষ্টার", app: "", phone: "+85515921825", complain: "অভিযোগ" },
//     //     { id: 1914, agent: "মাষ্টার", app: "", phone: "+85515921887", complain: "অভিযোগ" },
//     //     { id: 1915, agent: "মাষ্টার", app: "", phone: "+85515921223", complain: "অভিযোগ" },
//     //     { id: 167, agent: "মাষ্টার", app: "", phone: "+85587452853", complain: "অভিযোগ" },
//     //     { id: 1498, agent: "মাষ্টার", app: "", phone: "+855967042882", complain: "অভিযোগ" },
//     //     { id: 1697, agent: "মাষ্টার", app: "", phone: "+85587452884", complain: "অভিযোগ" },
//     //     { id: 2025, agent: "মাষ্টার", app: "", phone: "+85581749127", complain: "অভিযোগ" },
//     //     { id: 1495, agent: "মাষ্টার", app: "", phone: "+855967046367", complain: "অভিযোগ" },
//     //     { id: 1468, agent: "মাষ্টার", app: "", phone: "+855963751862", complain: "অভিযোগ" },
//     //     { id: 1459, agent: "মাষ্টার", app: "", phone: "+60172762756", complain: "অভিযোগ" },
//     //     { id: 1499, agent: "মাষ্টার", app: "", phone: "+85516653845", complain: "অভিযোগ" },
//     //     { id: 2095, agent: "মাষ্টার", app: "", phone: "+85581998193", complain: "অভিযোগ" },
//     //     { id: 1585, agent: "মাষ্টার", app: "", phone: "+85510525904", complain: "অভিযোগ" },
//     //     { id: 1586, agent: "মাষ্টার", app: "", phone: "+85517903126", complain: "অভিযোগ" },
//     //     { id: 1696, agent: "মাষ্টার", app: "", phone: "+85587453219", complain: "অভিযোগ" },
//     //     { id: 2027, agent: "মাষ্টার", app: "", phone: "+85581749525", complain: "অভিযোগ" },
//     //     { id: 1579, agent: "মাষ্টার", app: "", phone: "+85586953067", complain: "অভিযোগ" },
//     //     { id: 1467, agent: "মাষ্টার", app: "", phone: "+855966113420", complain: "অভিযোগ" },
//     //     { id: 1916, agent: "মাষ্টার", app: "", phone: "+855963019402", complain: "অভিযোগ" },
//     //     { id: 2094, agent: "মাষ্টার", app: "", phone: "+60147369255", complain: "অভিযোগ" },
//     //     { id: 2096, agent: "মাষ্টার", app: "", phone: "+85581998172", complain: "অভিযোগ" },
//     //     { id: 1591, agent: "মাষ্টার", app: "", phone: "+85517517963", complain: "অভিযোগ" },
//     //     { id: 1917, agent: "মাষ্টার", app: "", phone: "+85515921830", complain: "অভিযোগ" },
//     //     { id: 1683, agent: "মাষ্টার", app: "", phone: "+85569883129", complain: "অভিযোগ" },
//     //     { id: 1470, agent: "মাষ্টার", app: "", phone: "+855969478547", complain: "অভিযোগ" },
//     //     { id: 1466, agent: "মাষ্টার", app: "", phone: "+855969478704", complain: "অভিযোগ" },
//     //     { id: 1469, agent: "মাষ্টার", app: "", phone: "+855966131378", complain: "অভিযোগ" },
//     //     { id: 1461, agent: "মাষ্টার", app: "", phone: "+60176342825", complain: "অভিযোগ" },
//     //     { id: 1458, agent: "মাষ্টার", app: "", phone: "+601123057431", complain: "অভিযোগ" },
//     //     { id: 1583, agent: "মাষ্টার", app: "", phone: "+85586953076", complain: "অভিযোগ" },
//     //     { id: 1694, agent: "মাষ্টার", app: "", phone: "+85587453091", complain: "অভিযোগ" },
//     //     { id: 1680, agent: "মাষ্টার", app: "", phone: "+85587452967", complain: "অভিযোগ" },
//     //     { id: 1497, agent: "মাষ্টার", app: "", phone: "+855967046351", complain: "অভিযোগ" },
//     //     { id: 1580, agent: "মাষ্টার", app: "", phone: "+85517750286", complain: "অভিযোগ" },
//     //     { id: 1863, agent: "মাষ্টার", app: "", phone: "+85515827365", complain: "অভিযোগ" },
//     //     { id: 1681, agent: "মাষ্টার", app: "", phone: "+85586951394", complain: "অভিযোগ" },
//     //     { id: 1588, agent: "মাষ্টার", app: "", phone: "+85586952302", complain: "অভিযোগ" },
//     //     { id: 1460, agent: "মাষ্টার", app: "", phone: "+601172390907", complain: "অভিযোগ" },
//     //     { id: 1698, agent: "মাষ্টার", app: "", phone: "+85587465064", complain: "অভিযোগ" },
//     //     { id: 1494, agent: "মাষ্টার", app: "", phone: "+855967046357", complain: "অভিযোগ" }
//     //   ];
      
//       const [agents, setAgents] = useState([]);

//       useEffect(() => {
//         fetch("masteragentsthirdtable.json")
//           .then((res) => res.json())
//           .then((data) => setAgents(data));
//       }, []); // Dependency array should be empty to avoid infinite re-renders


//   return (
//     <div>
//       <h3 className="mt-4 mb-2 text-md md:text-2xl font-bold text-center text-black">
//       সাব এডমিন 8 এর অধীনে সুপার এজেন্ট 243 এর অধীনে সর্বমোট মাস্টার এজেন্ট আছে 56 জন
//       </h3>
//       <div className="overflow-x-auto p-4">
//       <table className="w-full table-auto border-collapse border border-gray-300">
//         <thead>
//           <tr>
//             {/* Only applying border to <th> */}
//             <th className="border border-gray-400 px-4 py-2 bg-gray-300">ID NO</th>
//             <th className="border border-gray-400 px-4 py-2 bg-gray-300">AGENT</th>
//             <th className="border border-gray-400 px-4 py-2 bg-gray-300">APP</th>
//             <th className="border border-gray-400 px-4 py-2 bg-gray-300">PHONE NUMBER</th>
//             <th className="border border-gray-400 px-4 py-2 bg-gray-300">COMPLAIN</th>
//           </tr>
//         </thead>
//         <tbody>
//           {agents.map((agent, rowIndex) => (
//             <tr
//               key={agent.id}
//               className={rowIndex % 2 === 0 ? "bg-[#f2f2f2] text-center" : "bg-[#e5e5e5]  text-center"}
//             >
//               {/* Row background alternates as per the screenshot */}
//               <td className="border border-gray-300 px-4 py-2">{agent.id}</td>
//               <td className="border border-gray-300 px-4 py-2">{agent.agent}</td>
//               <td className="border border-gray-300 px-4 py-2">
//                 <a
//                   href={agent.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className=" text-center whatsapp-link"
//                 >
//                   <FaWhatsapp className="text-[#23b466] text-3xl  mx-auto" />
//                 </a>
//               </td>
//               <td className="border border-gray-300 px-4 py-2 text-red-500">{agent.phone}</td>
//               <td className="border border-gray-300 px-4 py-2 text-red-500">{agent.complain}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </div>
//   );
// }





// import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
// import { useState, useEffect } from "react";

// export default function SecondTable() {

  
//     const [agents, setAgents] = useState([]);

//     useEffect(() => {
//       fetch("masteragentssecondtable.json")
//         .then((res) => res.json())
//         .then((data) => setAgents(data));
//     }, []); // Dependency array should be empty to avoid infinite re-renders

//   return (
//     <div>
//       <h3 className="mt-4 mb-2 text-md md:text-2xl font-bold text-center text-black">
//       সাব এডমিন 12 এর অধীনে সুপার এজেন্ট 2 এর অধীনে সর্বমোট মাস্টার এজেন্ট আছে 28 জন
//       </h3>
//       <div className="overflow-x-auto p-4">
//       <table className="w-full table-auto border-collapse border border-gray-300">
//         <thead>
//           <tr>
//             {/* Only applying border to <th> */}
//             <th className="border border-gray-400 px-4 py-2 bg-gray-300">ID NO</th>
//             <th className="border border-gray-400 px-4 py-2 bg-gray-300">AGENT</th>
//             <th className="border border-gray-400 px-4 py-2 bg-gray-300">APP</th>
//             <th className="border border-gray-400 px-4 py-2 bg-gray-300">PHONE NUMBER</th>
//             <th className="border border-gray-400 px-4 py-2 bg-gray-300">COMPLAIN</th>
//           </tr>
//         </thead>
//         <tbody>
//           {agents.map((agent, rowIndex) => (
//             <tr
//               key={agent.id}
//               className={rowIndex % 2 === 0 ? "bg-[#f2f2f2] text-center" : "bg-[#e5e5e5]  text-center"}
//             >
//               {/* Row background alternates as per the screenshot */}
//               <td className="border border-gray-300 px-4 py-2">{agent.id}</td>
//               <td className="border border-gray-300 px-4 py-2">{agent.agent}</td>
//               <td className="border border-gray-300 px-4 py-2">
//                 <a
//                   href={agent.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className=" text-center whatsapp-link"
//                 >
//                   <FaWhatsapp className="text-[#23b466] text-3xl  mx-auto" />
//                 </a>
//               </td>
//               <td className="border border-gray-300 px-4 py-2 text-red-500">{agent.phone}</td>
//               <td className="border border-gray-300 px-4 py-2 text-red-500">{agent.complain}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </div>
//   );
// }






import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
import { useState, useRef, useContext } from "react";
import useAgents from "../../hooks/useAgents";
import { AuthContext } from '../../providers/AuthProvider'; // Import AuthContext


export default function SecondTable() {



  const { user } = useContext(AuthContext); // Access user from AuthContext
  const [searchId, setSearchId] = useState(""); 
  const agentRefs = useRef([]); 
  const [editMode, setEditMode] = useState(false); // Track edit mode
  const [agents, setAgents, loading] = useAgents(); // Get setAgents

  const MasterAgent = agents.filter(item => item.type === "master-agent");

  const handleSearch = (id) => {
    setSearchId(id); 
    const index = MasterAgent.findIndex(agent => agent.id.toString() === id);
    if (index !== -1 && agentRefs.current[index]) {
      agentRefs.current[index].scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const toggleEditMode = () => {
    setEditMode(!editMode); // Toggle edit mode
  };

  const handleInputChange = (id, field, value) => {
    const updatedAgents = agents.map(agent => 
      agent.id === id ? { ...agent, [field]: value } : agent
    );
    setAgents(updatedAgents); // Update state for agents
  };

  const saveChanges = async () => {
    setEditMode(false); // Exit edit mode
  
    try {
      // Loop through agents and send update requests for each modified agent
      const updatedAgents = agents.map(async (agent) => {
        const { _id, ...agentWithoutId } = agent;
  
        const response = await fetch(`https://velkii-server.vercel.app/agents/${agent.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(agentWithoutId), // Send updated agent data without _id
        });
  
        if (!response.ok) {
          console.error(`Failed to update agent ${agent.id}`);
        }
        return response.json();
      });
  
      await Promise.all(updatedAgents);
  
      const response = await fetch("https://velkii-server.vercel.app/agents");
      const newAgents = await response.json();
      setAgents(newAgents); // Update state with new data
  
      console.log('Updated agent data successfully:', newAgents);
    } catch (error) {
      console.error('Error updating agents:', error);
    }
  };
  


    

  return (
    <div>

<h3 className="mt-4 mb-2 text-lg md:text-[21px] font-bold text-center text-black">
       সাব এডমিন 1 এর অধীনে সুপার এজেন্ট 165 এর অধীনে সর্বমোট মাস্টার এজেন্ট আছে 14 জন
       </h3>

      {/* Conditionally render the edit button only if a user is logged in */}
      {user && (
        <>
          <button onClick={toggleEditMode} className="bg-blue-500 text-white px-4 py-2 rounded my-4">
            {editMode ? "Cancel Edit" : "Edit Links"}
          </button>
          {editMode && (
            <button onClick={saveChanges} className="bg-green-500 text-white px-4 py-2 rounded my-4 ml-2">
              Save Changes
            </button>
          )}
        </>
      )}

      <div className="overflow-x-auto p-4">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2 bg-gray-300">ID NO</th>
              <th className="border border-gray-400 px-4 py-2 bg-gray-300">AGENT</th>
              <th className="border border-gray-400 px-4 py-2 bg-gray-300">APP</th>
              <th className="border border-gray-400 px-4 py-2 bg-gray-300">PHONE NUMBER</th>
              <th className="border border-gray-400 px-4 py-2 bg-gray-300">COMPLAIN</th>
            </tr>
          </thead>
          <tbody>
  {MasterAgent.slice(45, 59).map((agent, rowIndex) => (
    <tr
      key={agent.id}
      ref={el => agentRefs.current[rowIndex] = el}
      className={`text-center ${rowIndex % 2 === 0 ? "bg-[#f2f2f2]" : "bg-[#e5e5e5]"} ${searchId === agent.id.toString() ? "bg-yellow-300" : ""}`}
    >
      <td className="border border-gray-300 px-4 py-2">{agent.id}</td>
      <td className="border border-gray-300 px-4 py-2">{agent.agent}</td>
      <td className="border border-gray-300 px-4 py-2">
        {editMode ? (
          <input
            type="text"
            value={agent.link}
            onChange={(e) => handleInputChange(agent.id, "link", e.target.value)}
            className="w-full border border-gray-400 px-2 py-1"
          />
        ) : (
          <a
            href={agent.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center whatsapp-link"
          >
            <FaWhatsapp className="text-[#23b466] text-3xl mx-auto" />
          </a>
        )}
      </td>
      <td className="border border-gray-300 px-4 py-2">
        {editMode ? (
          <input
            type="text"
            value={agent.phone}
            onChange={(e) => handleInputChange(agent.id, "phone", e.target.value)}
            className="w-full border border-gray-400 px-2 py-1"
          />
        ) : (
          <a href={`tel:${agent.phone}`} className="text-[#cc0000]">
            {agent.phone}
          </a>
        )}
      </td>
      <td className="border border-gray-300 px-4 py-2 text-[#cc0000]">{agent.complain}</td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
    </div>
  );
}
