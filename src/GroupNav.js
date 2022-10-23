import React, {useEffect, useState} from 'react';
import {useRef} from "react";
import {createClient} from "@supabase/supabase-js";
import NewTaskCard from "./NewTaskCard";
import GroupCard from "./GroupCard";

const GroupNav = () => {


    const supabaseUrl = process.env.REACT_APP_SUPABASE_API_ENDPOINT
    const supabaseKey = process.env.REACT_APP_SUPABASE_API_SECRET_KEY

    const supabase = createClient(supabaseUrl, supabaseKey)

    const groupName = useRef()
    const groupDescription = useRef()
    const groupImgUrl = useRef()
    const [groupDependancy, setGroupDependancy] = useState(0)
    const [allGroupData, setAllGroupData] = useState([])

    const user = JSON.parse(localStorage.getItem("currentUser"))


    const getGroupData = async () => {

        let { data: groups, error } = await supabase
            .from('groups')
            .select('*');

        setAllGroupData(groups)
        return groups
    }

    const addNewGroup = async (e) => {

        e.preventDefault()

        let newGroupName = groupName.current.value
        let newGroupDescription = groupDescription.current.value
        let newGroupImgUrl = groupImgUrl.current.value


        //console.log(user.id)


        const newGroup = [{name: newGroupName, description: newGroupDescription, image_url:newGroupImgUrl, profile_id: user.id}]


        const { data, error } = await supabase
            .from('groups')
            .insert(newGroup);

        //setSuccessAdd(true)
        setGroupDependancy(groupDependancy + 1)
    }
    useEffect( () => {
        console.log("change detected")
        const newFunc = async () => {
            const newData = await getGroupData()
            setAllGroupData(newData)
        }
        //getTaskData()
        newFunc()


    },[groupDependancy])



    return (
        <div>
            <label htmlFor="my-modal-5" className="btn modal-button text-center btn flex justify-center">Create Group</label>
            <p className="text-center">Or Join One Below</p>
            <hr/>
            <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box mx-auto">
                {allGroupData.map(group => <GroupCard key={group.id} {...group} />)}
                <div className="card card-compact w-96 bg-base-100 shadow-xl carousel-item relative">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Group Name</h2>
                        <p>Group Description</p>
                        <p>Group Creator</p>
                        <p>Member Count</p>
                        <p>Group Rating</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Join Group</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl carousel-item relative">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Group Name</h2>
                        <p>Group Description</p>
                        <p>Group Creator</p>
                        <p>Member Count</p>
                        <p>Group Rating</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Join Group</button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
                </div>
            </div>
            <hr/>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Create Group Below</h3>
                    <form onSubmit={addNewGroup}>
                        <input type="text" placeholder="Group Name" ref={groupName}/>
                        <input type="text" placeholder="Group Description" ref={groupDescription}/>
                        <input type="text" placeholder="Group Icon/Image URL" ref={groupImgUrl}/>
                        <input type="submit" value="Create Group"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GroupNav;