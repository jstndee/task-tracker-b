import React from 'react';
import {createClient} from "@supabase/supabase-js";


const NewTaskCard = ({title, description, due_date,id,created_at, completed, priority, profile_id, completeTask, deleteTask}) => {

    const supabaseUrl = process.env.REACT_APP_SUPABASE_API_ENDPOINT
    const supabaseKey = process.env.REACT_APP_SUPABASE_API_SECRET_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)




    return (

        <div className="flex justify-between border-2 border-black items-center text-center">





                    <h1 className="label-text text-xl text-teal-600 font-bold">{title}</h1>
                    <p>{description}</p>
                    <p>{due_date}</p>
                    <p>{created_at}</p>
                    <p>test</p>
                    <p>{priority}</p>
                    <p>Assigned by {profile_id}</p>


                <button onClick={async () => {await completeTask(id)}} className="btn bg-teal-600 btn-xs">Complete</button>
                <button onClick={async () => {await deleteTask(id)}} className="btn modal-button btn-xs">Delete</button>




        </div>);
};

export default NewTaskCard;