/* eslint-disable no-unused-vars */
import  { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const AddSubAdmin = () => {


    //user for get the name of user 
    const { user } = useContext(AuthContext);

    const handleAddSubAdmin = event => {
        event.preventDefault()
        const form = event.target;
        
        const agentType = form.agentType.value;
        const agentWhatsappURL = form.agentWhatsappURL.value;
        const agentID = parseFloat(form.agentID.value)
        const agentPhoneNumber = form.agentPhoneNumber.value;
        
        const addedSubAdmin = {
           
            agentType: agentType,
            agentWhatsappURL: agentWhatsappURL,
            agentID: agentID,
            agentPhoneNumber: agentPhoneNumber,
          
        }
        console.log(addedSubAdmin)
        fetch('https://velkii-server.vercel.app/add-sub-admins',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(addedSubAdmin)


            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                   alert("Sub ADMIN ADDED SUCESSFULLY DONE")
                    form.reset()
                }
            }
            )

    }

    return (
        <div>
            <div className="card-body mt-8 pb-4 rounded-lg bg-[#F3F3F3]">
                <form onSubmit={handleAddSubAdmin}>
                    <div className="p-10 grid md:grid-cols-2 grid-cols-1 gap-6  ">
                       
                      

                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-bold p-4">Agent Type : </span>
                            </label>
                            <input type="text" name='agentType' required placeholder="AGENT TYPE" className="input p-2 text-lg" />
                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="text-lg font-bold p-4">WHATSAPP URL</span>
                            </label>
                            <input name="agentWhatsappURL" type="text" placeholder="WHATSAPP URL" className="input p-2 text-lg" />
                        </div>

                        {/* <div className="form-control">

                            <label className="label">
                                <span className="label-text">AGENT Category</span>
                            </label>
                            <select className="text-input  input p-2 text-lg" name="toyCategory"  >
                                <option value="Sports Car">Sports Car</option>
                                <option value="Police Cars">Police Car</option>
                                <option value="Mini Fire Truck">Mini Fire Truck</option>
                            </select>
                        </div> */}


                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-bold p-4">SUB ADMIN ID</span>
                            </label>
                            <input type="text" name='agentID' placeholder=" SUB ADMIN ID" required className="input p-2 text-lg" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-bold p-4">PHONE NUMBER</span>
                            </label>
                            <input type="text" name='agentPhoneNumber' placeholder="PHONE NUMBER" required className="p-2 text-lg"/>

                        </div>
                       
                       
                    </div>
                    <div className="form-control mt-6">
                        <button className="rounded-md px-8 py-2 mx-auto m-10 text-lg font-semibold flex justify-center bg-[#FF3811]">Add sub admin</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddSubAdmin;