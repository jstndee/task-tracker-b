import React from 'react';
import {createClient} from "@supabase/supabase-js";


const NewTaskCard = ({title, description, due_date,id,created_at, completed, priority, profile_id, completeTask, deleteTask}) => {

    const supabaseUrl = process.env.REACT_APP_SUPABASE_API_ENDPOINT
    const supabaseKey = process.env.REACT_APP_SUPABASE_API_SECRET_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)




    return (

        <div className="flex justify-center">



            <div className="form-control">
                <label className="label">
                    <span className="label-text text-xl text-teal-600 font-bold mx-20">{title}</span>

                </label>
                <div className={ completed ? "border-2 w-96 h-24 mx-20 border-teal-600" : "border-2 w-96 h-24 mx-20"}>
                    <p>{description}</p>
                    <p>{due_date}</p>
                    <div className="flex justify-between">
                    <p>{created_at}</p>
                        <p>test</p>
                        <p>{priority}</p>
                    </div>
                    <p>Assigned by {profile_id}</p>
                </div>

                <button onClick={async () => {await completeTask(id)}} className="btn bg-teal-600 w-96 mx-auto mt-3">Complete Task</button>
                <button onClick={async () => {await deleteTask(id)}} className="btn modal-button mt-3 w-96 mx-auto">Delete Task</button>



            </div>
        </div>);
};

export default NewTaskCard;