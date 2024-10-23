/* eslint-disable no-unused-vars */
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
import { FaTelegram } from "@react-icons/all-files/fa/FaTelegram";
import { useState, useRef, useContext } from "react";
import HeaderForm from '../HeaderForm/HeaderForm';
import useAgents from "../../hooks/useAgents";
import { AuthContext } from '../../providers/AuthProvider'; // Import AuthContext
import useSiteAdmins from "../../hooks/useSiteAdmins";

export default function SiteAdminFirstTable() {
  const { user } = useContext(AuthContext); // Access user from AuthContext
  const [searchId, setSearchId] = useState(""); 
  const agentRefs = useRef([]); 
  const [editMode, setEditMode] = useState(false); // Track edit mode
  const [siteAdmins, setSiteAdmins, loading] = useSiteAdmins(); // Get setSiteAdmins
console.log(siteAdmins)
//   const SiteAdmins = siteAdmins.filter(item => item.type === "site-admins");

//   const handleSearch = (id) => {
//     setSearchId(id); 
//     const index = SubAdmins.findIndex(agent => agent.id.toString() === id);
//     if (index !== -1 && agentRefs.current[index]) {
//       agentRefs.current[index].scrollIntoView({ behavior: "smooth", block: "center" });
//     }
//   };

  const toggleEditMode = () => {
    setEditMode(!editMode); // Toggle edit mode
  };

  const handleInputChange = (id, field, value) => {
    const updatedSiteAdmins = siteAdmins.map(siteAdmin => 
      siteAdmin.id === id ? { ...siteAdmin, [field]: value } : siteAdmin
    );
    setSiteAdmins(updatedSiteAdmins); // Update state for siteAdmins
  };

  const saveChanges = async () => {
    setEditMode(false); // Exit edit mode
  
    try {
      // Loop through siteAdmins and send update requests for each modified agent
      const updatedSiteAdmins = siteAdmins.map(async (siteAdmin) => {
        const { _id, ...siteAdminWithoutId } = siteAdmin;
  
        const response = await fetch(`https://velkii-server.vercel.app/site-admins/${siteAdmin.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(siteAdminWithoutId), // Send updated agent data without _id
        });
  
        if (!response.ok) {
          console.error(`Failed to update agent ${siteAdmin.id}`);
        }
        return response.json();
      });
  
      await Promise.all(updatedSiteAdmins);
  
      const response = await fetch("https://velkii-server.vercel.app/site-admins");
      const newSiteAdmins = await response.json();
      setSiteAdmins(newSiteAdmins); // Update state with new data
  
      console.log('Updated agent data successfully:', newSiteAdmins);
    } catch (error) {
      console.error('Error updating agents:', error);
    }
  };
  
  return (
    <div>

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
              <th className="border border-gray-400 px-4 py-2 bg-gray-300">Name {siteAdmins.length}</th>
              <th className="border border-gray-400 px-4 py-2 bg-gray-300">TELG</th>
              <th className="border border-gray-400 px-4 py-2 bg-gray-300">WHTS</th>
              <th className="border border-gray-400 px-4 py-2 bg-gray-300">PHONE NUMBER</th>
            </tr>
          </thead>
          <tbody>
            {siteAdmins.map((siteAdmin, rowIndex) => (
              <tr
                key={siteAdmin.id}
                ref={el => agentRefs.current[rowIndex] = el}
                className={`text-center ${rowIndex % 2 === 0 ? "bg-[#f2f2f2]" : "bg-[#e5e5e5]"} ${searchId === siteAdmin.id.toString() ? "bg-yellow-300" : ""}`}
              >
                <td className="border border-gray-300 px-4 py-2">{siteAdmin.id}</td>
                <td className="border border-gray-300 px-4 py-2">{siteAdmin.name}</td>

                {/* Editable APP (WhatsApp link) Field */}
                <td className="border border-gray-300 px-4 py-2">
                  {editMode ? (
                    <input
                      type="text"
                      value={siteAdmin.telegram}
                      onChange={(e) => handleInputChange(siteAdmin.id, "link", e.target.value)}
                      className="w-full border border-gray-400 px-2 py-1"
                    />
                  ) : (
                    <a
                      href={siteAdmin.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center whatsapp-link"
                    >
                      <FaTelegram  className="text-blue-500 text-3xl mx-auto" />
                    </a>
                  )}
                </td>
                 {/* Editable APP (WhatsApp link) Field */}
                 <td className="border border-gray-300 px-4 py-2">
                  {editMode ? (
                    <input
                      type="text"
                      value={siteAdmin.whatsapp}
                      onChange={(e) => handleInputChange(siteAdmin.id, "link", e.target.value)}
                      className="w-full border border-gray-400 px-2 py-1"
                    />
                  ) : (
                    <a
                      href={siteAdmin.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center whatsapp-link"
                    >
                      <FaWhatsapp className="text-[#23b466] text-3xl mx-auto" />
                    </a>
                  )}
                </td>

                {/* Editable Phone Number Field */}
                <td className="border border-gray-300 px-4 py-2">
                  {editMode ? (
                    <input
                      type="text"
                      value={siteAdmin.phone}
                      onChange={(e) => handleInputChange(siteAdmin.id, "phone", e.target.value)}
                      className="w-full border border-gray-400 px-2 py-1"
                    />
                  ) : (
                    <a href={`tel:${siteAdmin.whatsapp}`} className="text-[#cc0000]">
                      {siteAdmin.phone}
                    </a>
                  )}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
