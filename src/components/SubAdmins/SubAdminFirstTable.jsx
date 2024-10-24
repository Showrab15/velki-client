/* eslint-disable no-unused-vars */
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
import { useState, useRef, useContext } from "react";
import HeaderForm from "../HeaderForm/HeaderForm";
import SubAdminBanner from "./SubAdminBanner";
import useAgents from "../../hooks/useAgents";
import { AuthContext } from "../../providers/AuthProvider"; // Import AuthContext

export default function SubAdminFirstTable() {
  const { user } = useContext(AuthContext); // Access user from AuthContext
  const [searchId, setSearchId] = useState("");
  const agentRefs = useRef([]);
  const [editMode, setEditMode] = useState(false); // Track edit mode
  const [agents, setAgents, loading] = useAgents(); // Get setAgents

  const SubAdmins = agents.filter((item) => item.type === "sub-admin");

  const handleSearch = (id) => {
    setSearchId(id);
    const index = SubAdmins.findIndex((agent) => agent.id.toString() === id);
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
      <h3 className="my-10 text-2xl font-semibold text-center text-black">
        এজেন্ট এর আইডি নাম্বার দিয়ে খুজুনঃ
      </h3>

      <HeaderForm onSearch={handleSearch} />
      <SubAdminBanner />
      <h3 className="mt-3 mb-2 text-lg md:text-[21px] font-bold text-center text-black">
      সাইট এডমিন Akash Malik এর অধীনে সর্বমোট সাব এডমিন আছে 13 জন
      </h3>

      {/* Conditionally render the edit button only if a user is logged in */}
      {user && (
        <>
          <button
            onClick={toggleEditMode}
            className="bg-blue-500 text-white px-4 py-2 mx-4 rounded my-4"
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
      <div className="p-4 flex flex-col justify-center items-center">
        <div className="w-full md:w-auto">
          <table className="table-fixed border-collapse border border-gray-300 w-full">
            <thead>
              <tr>
                <th className="border  border-gray-400 px-2 py-2 bg-[#fff6f3] text-xs sm:text-sm md:text-base w-[10%]">
                  ID NO
                </th>
                <th className="border border-gray-400 px-2 py-2 bg-[#fff6f3] text-xs sm:text-sm md:text-base w-[20%]">
                  AGENT
                </th>
                <th className="border border-gray-400 px-2 py-2 bg-[#fff6f3] text-xs sm:text-sm md:text-base w-[10%]">
                  APP
                </th>
                <th className="border border-gray-400 px-2 py-2 bg-[#fff6f3] text-xs sm:text-sm md:text-base w-[35%]">
                  PHONE NUMBER
                </th>
                <th className="border border-gray-400 px-2 py-2 bg-[#fff6f3] sm:text-center text-left text-xs sm:text-sm md:text-base  w-[25%]">
                  COMPLAIN
                </th>
              </tr>
            </thead>
            <tbody>
              {SubAdmins.map((agent, rowIndex) => (
                <tr
                  key={agent.id}
                  ref={(el) => (agentRefs.current[rowIndex] = el)}
                  className={`text-center ${
                    rowIndex % 2 === 0 ? "bg-[#efefef]" : "bg-[#fff6f3]"
                  } ${searchId === agent.id.toString() ? "bg-yellow-300" : ""}`}
                >
                  <td className="border border-gray-300 px-2 py-2  text-[12px] md:text-xl font-bold">
                    {agent.id}
                  </td>
                  <td className="border border-gray-300 px-2 py-2  text-[12px] md:text-xl font-bold">
                    {agent.agent}
                  </td>

                  {/* Editable APP (WhatsApp link) Field */}
                  <td className="border border-gray-300 px-2 py-2  text-[12px] md:text-xl font-bold">
                    {editMode ? (
                      <input
                        type="text"
                        value={agent.link}
                        onChange={(e) =>
                          handleInputChange(agent.id, "link", e.target.value)
                        }
                        className="w-full border border-gray-400 px-2 py-1 text-xs"
                      />
                    ) : (
                      <a
                        href={agent.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-link"
                      >
                        <FaWhatsapp className="text-[#23b466] text-xl md:text-2xl mx-auto" />
                      </a>
                    )}
                  </td>

                  {/* Editable Phone Number Field */}
                  <td className="border border-gray-300 px-2 py-2 text-[8px] sm:text-sm md:text-base">
                    {editMode ? (
                      <input
                        type="text"
                        value={agent.phone}
                        onChange={(e) =>
                          handleInputChange(agent.id, "phone", e.target.value)
                        }
                        className="w-full border border-gray-400 px-2 py-1 text-xs"
                      />
                    ) : (
                      <a href={agent.link} className="text-[#cc0000] md:text-xl font-bold text-[12px]">
                        {agent.phone}
                      </a>
                    )}
                  </td>

                  <td className="border border-gray-300 px-2 py-2 text-[#cc0000] md:text-xl font-bold text-[12px]">
                    {agent.complain}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
