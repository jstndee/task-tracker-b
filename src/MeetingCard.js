import React from 'react';
import {createClient} from "@supabase/supabase-js";


const MeetingCard = ({title, description, time,duration, profile_id,date, deleteMeeting, completeMeeting}) => {

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
                <p><u>Date</u></p>
                <p>{date}</p>
            </div>
            <div>
                <p><u>Duration</u></p>
                <p>{duration}</p>
            </div>
            <div>
                <p><u>Time</u></p>
                <p>{time}</p>
            </div>
            <div>
                <p><u>Created by</u></p>
                <p>{profile_id}</p>
            </div>

            {/*
            <button onClick={async () => {await completeTask(id)}} className="btn bg-teal-600 btn-xs">Complete</button>
            <button onClick={async () => {await deleteTask(id)}} className="btn modal-button btn-xs">Delete</button>

            */}


        </div>);
};

export default MeetingCard;