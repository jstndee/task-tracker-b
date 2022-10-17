import React, {useState, useEffect} from 'react';
import TaskCardB from "./TaskCardB";
import NewTaskCard from "./NewTaskCard";
import ModalComponent from "./ModalComponent";
import {createClient} from "@supabase/supabase-js";



const MainTaskPageB = () => {


    const supabaseUrl = process.env["REACT_APP_SUPABASE_API_ENDPOINT"]
    const supabaseKey = process.env["REACT_APP_SUPABASE_API_SECRET_KEY"]
    const supabase = createClient(supabaseUrl, supabaseKey)


    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [privacy, setPrivacy] = useState('public');

    const [created_date, setDate] = useState(new Date());
    const [important, setImportant] = useState("false")
    const dateNow = Date()
    let [dependancy, setDependancy] = useState(0)


    const handleDescription = (event) => {
        setDescription(event.target.value)
    }
    const handleTitle = (event) => {
        setTitle(event.target.value)
    }
    const handlePrivacy = (event) => {
        if (event.target.value === "on") {
            setPrivacy("private")
        }

        if (privacy === "private"){
            setPrivacy("public")
        }


        //setPrivacy(event.target.value)
        //console.log(privacy)
    }
    const handleImportant = (event) => {
        if (event.target.value === "on") {
            setImportant("true")
        }

        //if (important === "false"){
            //setImportant("false")
        //}



    }

    const addNewTask = async () => {

        const newTask = [{title: title, description: description, privacy:privacy, important:important, created_at: "10/6/2022", completed:"false",}]


        const { data, error } = await supabase
            .from('oldtasks')
            .insert(newTask);

        setDependancy(dependancy + 1)
    }
    //Start of filtering logic



    const currentDate = Date()
    const [allTaskData, setAllTaskData] = useState([])


    const getTaskData = async () => {

        let { data: oldtasks, error } = await supabase
            .from('oldtasks')
            .select('*');

        setAllTaskData(oldtasks)
        return oldtasks



    }
    const getCompletedTasks = async () => {
        let { data: oldtasks, error } = await supabase
            .from('oldtasks')
            .select("*")
            .eq('completed', true);

        setAllTaskData(oldtasks)

    }
    const getImportantTasks = async () => {
        let { data: oldtasks, error } = await supabase
            .from('oldtasks')
            .select("*")
            .eq('important', true);

        setAllTaskData(oldtasks)

        console.log(oldtasks)




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




    return (
        <div className="relative">
            <div className="flex flex-row text-orange-400 font-bold justify-center text-center">
                <p onClick={async () => {await getImportantTasks()}} className="mx-2">Important</p>
                <p onClick={async () => {await getCompletedTasks()}} className="mx-2">Completed Tasks</p>
                <p onClick={async () => {await getTaskData()}} className="mx-2">All Tasks</p>

            </div>

            <div className="flex flex-col space-y-4 w-1/2 mx-auto border-4 border-teal-600 rounded-md mt-5 p-3">
                <input className="border-2 border-gray-500 text-center" onChange={handleTitle} type="text"placeholder="Title"/>
                <input className="h-32 border-2 text-center" onChange={handleDescription} type="text"placeholder="Description"/>
                <div className="flex justify-center space-x-2">
                    <p className="text-teal-600 text-lg">Private</p>
                    <input onClick={handlePrivacy} type="checkbox"/>
                </div>
                <div className="flex justify-center space-x-2 ">
                    <p className="text-teal-600 text-lg">Important</p>
                    <input onClick={handleImportant} type="checkbox"/>
                </div>

                <button className="font-bold text-white bg-teal-600 py-2 px-4 rounded-md hover:bg-teal-700" onClick={async () => {await addNewTask()}}>CREATE TASK</button>
            </div>

            {allTaskData.map(task => <NewTaskCard deleteTask = {deleteTask} completeTask = {completeTask} key={task.id} {...task} />)}
            <form className="sticky bottom-0 right-0 ml-32">
                <button className="rounded-md bg-teal-600 text-white p-3">Refresh</button>
            </form>
        </div>
    );
};

export default MainTaskPageB;