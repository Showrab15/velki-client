/* eslint-disable no-unused-vars */
// import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
// import { useState, useEffect } from "react";

// export default function SuperAgentFirstTable() {

//     const [agents, setAgents] = useState([]);

//     useEffect(() => {
//       fetch("superagentsfirsttable.json")
//         .then((res) => res.json())
//         .then((data) => setAgents(data));
//     }, []); // Dependency array should be empty to avoid infinite re-renders

//   return (
//     <div>
//     <h3 className="mt-4 mb-2 text-md md:text-2xl font-bold text-center text-black">
//     সাব এডমিন 9 এর অধীনে সর্বমোট সুপার এজেন্ট আছে 3 জন    </h3>
//     <div className="overflow-x-auto p-4">
//     <table className="w-full table-auto border-collapse border border-gray-300">
//       <thead>
//         <tr>
//           {/* Only applying border to <th> */}
//           <th className="border border-gray-400 px-4 py-2 bg-gray-300">ID NO</th>
//           <th className="border border-gray-400 px-4 py-2 bg-gray-300">AGENT</th>
//           <th className="border border-gray-400 px-4 py-2 bg-gray-300">APP</th>
//           <th className="border border-gray-400 px-4 py-2 bg-gray-300">PHONE NUMBER</th>
//           <th className="border border-gray-400 px-4 py-2 bg-gray-300">COMPLAIN</th>
//         </tr>
//       </thead>
//       <tbody>
//         {agents.map((agent, rowIndex) => (
//           <tr
//             key={agent.id}
//             className={rowIndex % 2 === 0 ? "bg-[#f2f2f2] text-center" : "bg-[#e5e5e5]  text-center"}
//           >
//             {/* Row background alternates as per the screenshot */}
//             <td className="border border-gray-300 px-4 py-2">{agent.id}</td>
//             <td className="border border-gray-300 px-4 py-2">{agent.agent}</td>
//             <td className="border border-gray-300 px-4 py-2">
//               <a
//                 href={agent.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className=" text-center whatsapp-link"
//               >
//                 <FaWhatsapp className="text-[#23b466] text-3xl  mx-auto" />
//               </a>
//             </td>
//             <td className="border border-gray-300 px-4 py-2 text-red-500">{agent.phone}</td>
//             <td className="border border-gray-300 px-4 py-2 text-red-500">{agent.complain}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
//   </div>
//   )
// }

import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
import { useContext, useRef, useState } from "react";
import useAgents from "../../hooks/useAgents";
import { AuthContext } from "../../providers/AuthProvider"; // Import AuthContext

export default function SuperAgentSeventhTable() {
  const { user } = useContext(AuthContext); // Access user from AuthContext
  const [searchId, setSearchId] = useState("");
  const agentRefs = useRef([]);
  const [editMode, setEditMode] = useState(false); // Track edit mode
  const [agents, setAgents, loading] = useAgents(); // Get setAgents

  const SuperAgent = agents.filter((item) => item.type === "super-agent");

  const handleSearch = (id) => {
    setSearchId(id);
    const index = SuperAgent.findIndex((agent) => agent.id.toString() === id);
    if (index !== -1 && agentRefs.current[index]) {
      agentRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const toggleEditMode = () => {
    setEditMode(!editMode); // Toggle edit mode
  };

  const handleInputChange = (id, field, value) => {
    const updatedAgents = agents.map((agent) =>
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

        const response = await fetch(
          `https://velkii-server.vercel.app/agents/${agent.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(agentWithoutId), // Send updated agent data without _id
          }
        );

        if (!response.ok) {
          console.error(`Failed to update agent ${agent.id}`);
        }
        return response.json();
      });

      await Promise.all(updatedAgents);

      const response = await fetch("https://velkii-server.vercel.app/agents");
      const newAgents = await response.json();
      setAgents(newAgents); // Update state with new data

      console.log("Updated agent data successfully:", newAgents);
    } catch (error) {
      console.error("Error updating agents:", error);
    }
  };

  return (
    <div>
      <h3 className="mt-4 mb-2 text-lg md:text-[21px] font-bold text-center text-black">
      সাব এডমিন 12 এর অধীনে সর্বমোট সুপার এজেন্ট আছে 9 জন{" "}
      </h3>

      {/* Conditionally render the edit button only if a user is logged in */}
      {user && (
        <>
          <button
            onClick={toggleEditMode}
            className="bg-blue-500 text-white px-4 py-2 rounded my-4"
          >
            {editMode ? "Cancel Edit" : "Edit Links"}
          </button>
          {editMode && (
            <button
              onClick={saveChanges}
              className="bg-green-500 text-white px-4 py-2 rounded my-4 ml-2"
            >
              Save Changes
            </button>
          )}
        </>
      )}

        
<div className="p-4">
  <table className="w-full table-auto border-collapse border border-gray-300">
    <thead>
      <tr>
        <th className="border border-gray-400 px-2 py-2 bg-[#fff6f3] text-sm sm:text-base">ID NO</th>
        <th className="border border-gray-400 px-2 py-2 bg-[#fff6f3] text-sm sm:text-base">AGENT</th>
        <th className="border border-gray-400 px-2 py-2 bg-[#fff6f3] text-sm sm:text-base">APP</th>
        <th className="border border-gray-400 px-2 py-2 bg-[#fff6f3] text-sm sm:text-base">PHONE NUMBER</th>
        <th className="border border-gray-400 px-2 py-2 bg-[#fff6f3] text-sm sm:text-base">COMPLAIN</th>
      </tr>
    </thead>
    <tbody>
      {SuperAgent.slice(90,98).map((agent, rowIndex) => (
        <tr
          key={agent.id}
          ref={el => agentRefs.current[rowIndex] = el}
          className={`text-center ${rowIndex % 2 === 0 ? " bg-[#efefef] " : "bg-[#fff6f3]"} ${searchId === agent.id.toString() ? "bg-yellow-300" : ""}`}
        >
          <td className="border border-gray-300 px-2 py-2 text-sm sm:text-base">{agent.id}</td>
          <td className="border border-gray-300 px-2 py-2 text-sm sm:text-base">{agent.agent}</td>

          {/* Editable APP (WhatsApp link) Field */}
          <td className="border border-gray-300 px-2 py-2 text-sm sm:text-base">
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
                <FaWhatsapp className="text-[#23b466] text-2xl mx-auto" />
              </a>
            )}
          </td>

          {/* Editable Phone Number Field */}
          <td className="border border-gray-300 px-2 py-2 text-sm sm:text-base">
            {editMode ? (
              <input
                type="text"
                value={agent.phone}
                onChange={(e) => handleInputChange(agent.id, "phone", e.target.value)}
                className="w-full border border-gray-400 px-2 py-1"
              />
            ) : (
              <a href={`tel:${agent.link}`} className="text-[#cc0000]">
                {agent.phone}
              </a>
            )}
          </td>

          <td className="border border-gray-300 px-2 py-2 text-[#cc0000] text-sm sm:text-base">
            {agent.complain}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </div>
  );
}
