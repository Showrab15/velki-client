// import { useState, useEffect } from "react";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
import useAgents from "../../hooks/useAgents";

export default function AgentsList() {
  // const [agents, setAgents] = useState([]);

  // useEffect(() => {
  //   fetch("agents.json")
  //     .then((res) => res.json())
  //     .then((data) => setAgents(data));
  // }, []); // Dependency array should be empty to avoid infinite re-renders


const [agents]= useAgents();

console.log(agents)

  return (
    <>
      <h1 className="md:text-4xl text-3xl text-center text-red-500 my-10 font-semibold">
        ভেল্কি অটো ডিপোজিট এজেন্ট
      </h1>

      <div className="flex justify-center items-center">
        <div className="overflow-x-auto w-full max-w-4xl">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  App
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Agent
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Phone Number
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {agents.map((agent) => (
                <tr key={agent.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {agent.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <a
                      href={agent.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-link"
                    >
                      <FaWhatsapp className="text-[#23b466] text-3xl" />
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {agent.agent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {agent.phone}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
