import React from 'react';

const GroupNav = () => {
    return (
        <div>
            <h1 className="text-center btn">Create Group</h1>
            <hr/>
            <div className="grid grid-cols-4 grid-flow-row gap-2 p-3">
                <p className="bg-blue-400 rounded-md shadow-2xl">Test</p>
                <p className="bg-blue-400 rounded-md shadow-2xl">Test2</p>
                <p className="bg-blue-400 rounded-md shadow-2xl">Test3</p>
                <p className="bg-blue-400 rounded-md shadow-2xl">Test4</p>
            </div>
            <hr/>
        </div>
    );
};

export default GroupNav;