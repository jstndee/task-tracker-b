import React, {useEffect} from 'react';
import {useState,useRef} from "react";
import {useParams} from "react-router-dom";
import {createClient} from "@supabase/supabase-js";
import NewTaskCard from "./NewTaskCard";
import MeetingCard from "./MeetingCard";

const TaskHub = () => {

    const supabaseUrl = process.env.REACT_APP_SUPABASE_API_ENDPOINT
    const supabaseKey = process.env.REACT_APP_SUPABASE_API_SECRET_KEY

    const supabase = createClient(supabaseUrl, supabaseKey)

    const params = useParams()
    const [allTaskData, setAllTaskData] = useState([]);
    const [allMeetingData, setAllMeetingData] = useState([]);
    const [currentUser, setCurrentUser] = useState("No user found");
    const taskTitle = useRef()
    const taskDescription = useRef()
    const taskDueDate = useRef()
    const taskPriority = useRef()
    const taskAssignee = useRef()
    const meetingTitle = useRef()
    const meetingDescription = useRef()
    const meetingTime = useRef()
    const meetingDate = useRef()
    const meetingDuration = useRef()
    const [successAdd, setSuccessAdd] = useState(false)
    const user = JSON.parse(localStorage.getItem("currentUser"))
    //const userId = user.id

    let [dependancy, setDependancy] = useState(0)
    let [meetingDependancy, setMeetingDependancy] = useState(0)

    const getTaskData = async () => {

        let { data: oldtasks, error } = await supabase
            .from('oldtasks')
            .select('*');

        setAllTaskData(oldtasks)
        return oldtasks
    }
    const getMeetingData = async () => {

        let { data: meetings, error } = await supabase
            .from('meetings')
            .select('*');

        setAllMeetingData(meetings)
        return meetings
    }

    const getCompletedTasks = async () => {
        let { data: oldtasks, error } = await supabase
            .from('oldtasks')
            .select("*")
            .eq('completed', true);

        setAllTaskData(oldtasks)

    }
    const addNewTask = async (e) => {

        e.preventDefault()

        let newTaskTitle = taskTitle.current.value
        let newTaskDescription = taskDescription.current.value
        let newTaskPrio = taskPriority.current.value
        let newTaskDueDate = taskDueDate.current.value

        console.log(user.id)


        const newTask = [{title: newTaskTitle, description: newTaskDescription, priority: newTaskPrio, due_date: newTaskDueDate, profile_assignee_id: user.id,profile_id: user.id, completed:"false",}]


        const { data, error } = await supabase
            .from('oldtasks')
            .insert(newTask);

        setSuccessAdd(true)
        setDependancy(dependancy + 1)
    }
    const addNewMeeting = async (e) => {

        e.preventDefault()

        let newMeetingTitle = meetingTitle.current.value
        let newMeetingDescription = meetingDescription.current.value
        let newMeetingDate = meetingDate.current.value
        let newMeetingTime = meetingTime.current.value
        let newMeetingDuration = meetingDuration.current.value

        console.log(user.id)


        const newMeeting = [{title: newMeetingTitle, description: newMeetingDescription, date: newMeetingDate, time: newMeetingTime, duration: newMeetingDuration, profile_id: user.id}]


        const { data, error } = await supabase
            .from('meetings')
            .insert(newMeeting);

        //setSuccessAdd(true) make new success add for meetings
        setMeetingDependancy(meetingDependancy + 1)
    }
    const completeTask = async (taskId) => {


        const { data, error } = await supabase
            .from('oldtasks')
            .update({ completed: true })
            .eq('id', taskId)

        setDependancy(dependancy+1)

    }



    const deleteTask = async (taskId) => {

        const { data, error } = await supabase
            .from('oldtasks')
            .delete()
            .eq('id', taskId);

        setDependancy(dependancy+1)

    }

    useEffect( () => {
        console.log("change detected")
        const newFunc = async () => {
            const newData = await getTaskData()
            setAllTaskData(newData)
        }
        //getTaskData()
        newFunc()


    },[dependancy])

    useEffect( () => {
        console.log("change detected")
        const newFuncM = async () => {
            const newDataM = await getMeetingData()
            setAllMeetingData(newDataM)
        }
        //getTaskData()
        newFuncM()


    },[meetingDependancy])






    if(successAdd){
        setTimeout(() => {
            setSuccessAdd(false)
        },2000)
    }
    return (
        <div className="flex relative">
            {successAdd ? <p className="text-xl font-bold text-green-500">TASK ADDED SUCCESSFULLY</p> : <p></p>}
            <div className="w-60 h-screen shadow-md bg-white hidden md:flex">
                <ul className="relative">
                    <li className="relative">
                        <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                           href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 mr-3"
                                 role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                      d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
                            </svg>
                            <span>Sidenav link 1</span>
                        </a>
                    </li>
                    <li className="relative">
                        <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                           href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 mr-3"
                                 role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                <path fill="currentColor"
                                      d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
                            </svg>
                            <span>Sidenav link 2</span>
                        </a>
                    </li>
                    <li className="relative">
                        <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                           href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 mr-3"
                                 role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                      d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"></path>
                            </svg>
                            <span>Sidenav link 3</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="w-screen">
                <div className="border-2 h-1/2 w-full">
                    <div className="flex justify-between">
                        <div className="flex flex-row items-center bg-gray-300 rounded-md space-x-2">
                            <h1 className="md:text-2xl sm:text-2xs font-bold text-center">Group name tasks</h1>
                            <label htmlFor="my-modal-3" className="text-center btn btn-xs modal-button h-full">+</label>
                        </div>
                        <p className="text-center cursor-pointer">All Tasks</p>
                        <p className="text-center cursor-pointer">High Priority Tasks</p>
                        <p className="text-center cursor-pointer">Tasks Due Soon</p>
                        <p className="text-center cursor-pointer">Completed Tasks</p>
                    </div>
                    <div className="flex space-x-8">
                        <p>Title</p>
                        <p>Description</p>
                        <p>Due Date</p>
                        <p>Priority</p>
                        <p>Assigned By</p>

                    </div>
                    {allTaskData.map(task => <NewTaskCard deleteTask = {deleteTask} completeTask = {completeTask} key={task.id} {...task} />)}
                </div>
                <div className="border-2 h-1/2 w-full lg:mt-4 sm:mt-20">
                    <div className="flex justify-between">
                        <div className="flex flex-row items-center bg-gray-300 rounded-md space-x-2">
                            <h1 className="md:text-2xl sm:text-2xs font-bold text-center">Group name meetings</h1>
                            <label htmlFor="my-modal-1" className="text-center btn btn-xs modal-button h-full">+</label>
                        </div>
                        <p className="text-center cursor-pointer">All Meetings</p>
                        <p className="text-center cursor-pointer">Meetings Due Soon</p>
                        <p className="text-center cursor-pointer">Completed Meetings</p>
                    </div>
                    {allMeetingData.map(meeting => <MeetingCard deleteTask = {deleteTask} completeTask = {completeTask} key={meeting.id} {...meeting} />)}
                </div>

            </div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Create Task Below</h3>
                    <form onSubmit={addNewTask}>
                        <input type="text"className="" placeholder="Title"ref={taskTitle}/>
                        <input type="text"className="" placeholder="Description" ref={taskDescription}/>
                        <select>
                            <option value="">Assign To</option>
                            <option value="bob">Bob</option>
                        </select>
                        <select>
                            <option value="">Priority</option>
                            <option value="Low" ref={taskPriority}>Low</option>
                            <option value="Medium" ref={taskPriority}>Medium</option>
                            <option value="High" ref={taskPriority}>High</option>
                        </select>
                        <input type="date" placeholder="Due Date" ref={taskDueDate}/>
                        <input type="submit" value="Create Task"/>
                    </form>
                </div>
            </div>
            <input type="checkbox" id="my-modal-1" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Create Meeting Below</h3>
                    <form onSubmit={addNewMeeting}>
                        <input type="text"className="" placeholder="Title" ref={meetingTitle}/>
                        <input type="text"className="" placeholder="Description" ref={meetingDescription}/>
                        <input type="date" placeholder="Date" ref={meetingDate}/>
                        <input type="time" placeholder="Time" ref={meetingTime}/>
                        <select>
                            <option value="">Duration</option>
                            <option value="20 minutes" ref={meetingDuration}>20 minutes</option>
                            <option value="40 minutes" ref={meetingDuration}>40 minutes</option>
                            <option value="1 hour" ref={meetingDuration}>1 hour</option>
                        </select>
                        <input type="submit" value="Create Meeting"/>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default TaskHub;