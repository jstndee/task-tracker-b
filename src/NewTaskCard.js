import React from 'react';
import {createClient} from "@supabase/supabase-js";


const NewTaskCard = ({title, description, due_date,id,created_at, completed, priority, profile_id, completeTask, deleteTask}) => {

    const supabaseUrl = process.env.REACT_APP_SUPABASE_API_ENDPOINT
    const supabaseKey = process.env.REACT_APP_SUPABASE_API_SECRET_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)




    return (

        <div className="flex justify-between border-2 border-black items-center text-center mt-2 rounded-md bg-white">




                    <div>
                        <p><u>Title</u></p>
                        <h1 className="label-text text-xl text-purple-600 font-bold">{title}</h1>
                    </div>
                    <div>
                        <p><u>Description</u></p>
                        <p>{description}</p>
                    </div>
                    <div>
                        <p><u>Due Date</u></p>
                        <p>{due_date}</p>
                    </div>
                    <div>
                        <p><u>Priority</u></p>
                        <p>{priority}</p>
                    </div>
                    <div>
                        <p><u>Assigned by</u></p>
                        <p>{profile_id}</p>
                    </div>

                <div>
                    <button onClick={async () => {await completeTask(id)}} className="btn bg-purple-600 btn-xs">Complete</button>
                    <button onClick={async () => {await deleteTask(id)}} className="btn modal-button btn-xs">Delete</button>
                </div>




        </div>);
};

export default NewTaskCard;