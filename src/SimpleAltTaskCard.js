import React, {useEffect, useState} from 'react';
import {createClient} from "@supabase/supabase-js";

const SimpleAltTaskCard = ({title, description, due_date,id,created_at, completed, priority, profile_id, profile_assignee_id, completeTask, deleteTask}) => {

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
        <div className="w-80">

            <div className="flex w-full items-center flex justify-center items-center py-12 px-6">
                <div>
                    <div
                        className="max-w-xs h-72 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border-2 border-black mb-6 py-5 px-4 shadow-2xl">
                        <div>
                            <h4 tabIndex="0"
                                className="focus:outline-none text-purple-600 font-bold mb-3">{title}
                                </h4>
                            <p tabIndex="0"
                               className="focus:outline-none text-gray-800 dark:text-gray-100 text-sm">{description}
                                </p>
                        </div>
                        <div>
                            <div className="flex justify-center space-x-1 mt-2 text-sm text-center">
                                <p className="w-full border-2">Task for {assigneeName}</p>
                                <p className="w-full border-2">Assigned by {assignorName}</p>
                            </div>
                            <div className="flex justify-center space-x-1 text-sm text-center">
                                <p className="border-2 w-full">Priority:</p>
                                <p className="border-2 w-full">{priority}</p>
                            </div>
                            <div className="flex  justify-center text-gray-800 space-x-1 text-center">
                                <p tabIndex="0" className="focus:outline-none text-sm dark:text-gray-100 w-full border-2">Due Date:
                                    </p>
                                <p className="w-full border-2">{due_date}</p>


                            </div>
                            <div className="flex justify-center text-center space-x-1">
                                <p onClick={async () => {await completeTask(id)}} className="bg-purple-600 rounded-md text-white font-bold border-2 border-black py-1 px-1 w-full cursor-pointer">Complete</p>
                                <p onClick={async () => {await deleteTask(id)}} className="bg-black rounded-md text-white font-bold border-2 border-black py-1 px-1 w-full cursor-pointer">Delete</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SimpleAltTaskCard;