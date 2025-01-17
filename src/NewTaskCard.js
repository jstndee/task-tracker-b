import React, {useEffect, useState} from 'react';
import {createClient} from "@supabase/supabase-js";


const NewTaskCard = ({title, description, due_date,id,created_at, completed, priority, profile_id, profile_assignee_id, completeTask, deleteTask}) => {

    const supabaseUrl = process.env.REACT_APP_SUPABASE_API_ENDPOINT
    const supabaseKey = process.env.REACT_APP_SUPABASE_API_SECRET_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)

    const [assignorName, setAssignorName] = useState()
    const [assigneeName, setAssigneeName] = useState()
    const convertAssignorIdToName = async () => {
        let {data:name} = await supabase
            .from("profiles")
            .select("username")
            .eq("id", profile_id)
        setAssignorName(name[0].username)
        console.log(assignorName)
    }
    const convertAssigneeIdToName = async () => {
        let {data:name} = await supabase
            .from("profiles")
            .select("username")
            .eq("id", profile_assignee_id)

        setAssigneeName(name[0].username)
        //console.log(assigneeName)
    }


    useEffect(() => {
        const setNames = async () => {
            await convertAssigneeIdToName()
            await convertAssignorIdToName()
        }
        setNames()
    },[0])

    return (

        <div className={completed ? "flex justify-between border-2 border-gray-100 items-center text-center mt-2 rounded-md bg-white shadow-lg": "flex justify-between border-2 border-black items-center text-center mt-2 rounded-md bg-white shadow-lg"}>




                    <div>
                        <p><u className={completed ? "text-gray-400": "text-black"}>Title</u></p>
                        <h1 className={completed ? "label-text text-gray-400 font-bold" : "label-text text-purple-600 font-bold"}>{title}</h1>
                    </div>
                    <div>
                        <p><u className={completed ? "text-gray-400": "text-black"}>Description</u></p>
                        <p className={completed ? "text-sm text-gray-400": "text-sm"}>{description}</p>
                    </div>
                    <div>
                        <p><u className={completed ? "text-gray-400": "text-black"}>Due Date</u></p>
                        <p className={completed ? "text-sm text-gray-400": "text-sm"}>{due_date}</p>
                    </div>
                    <div>
                        <p><u className={completed ? "text-gray-400": "text-black"}>Priority</u></p>
                        <p className={completed ? "text-sm text-gray-400": "text-sm"}>{priority}</p>
                    </div>
                    <div>
                        <p><u className={completed ? "text-gray-400": "text-black"}>Assigned by</u></p>
                        <p className={completed ? "text-sm text-gray-400": "text-sm"}>{assignorName} to {assigneeName}</p>
                    </div>

                <div>
                    <button onClick={async () => {await completeTask(id)}} className={completed ?"btn bg-gray-200 btn-xs":"btn bg-purple-600 btn-xs"}>Complete</button>
                    <button onClick={async () => {await deleteTask(id)}} className="btn modal-button btn-xs">Delete</button>
                </div>




        </div>);
};

export default NewTaskCard;