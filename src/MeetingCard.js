import React from 'react';
import {createClient} from "@supabase/supabase-js";


const MeetingCard = ({title, description, time,duration, profile_id,date, deleteMeeting, completeMeeting}) => {

    const supabaseUrl = process.env.REACT_APP_SUPABASE_API_ENDPOINT
    const supabaseKey = process.env.REACT_APP_SUPABASE_API_SECRET_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)




    return (

        <div className="flex justify-between border-2 border-black items-center text-center">





            <h1 className="label-text text-xl text-teal-600 font-bold">{title}</h1>
            <p>{description}</p>
            <p>{date}</p>
            <p>{duration}</p>
            <p>test</p>
            <p>{time}</p>
            <p>Assigned by {profile_id}</p>

            {/*
            <button onClick={async () => {await completeTask(id)}} className="btn bg-teal-600 btn-xs">Complete</button>
            <button onClick={async () => {await deleteTask(id)}} className="btn modal-button btn-xs">Delete</button>

            */}


        </div>);
};

export default MeetingCard;