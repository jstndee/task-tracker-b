import React from 'react';

const GroupNameCard = ({name, groupSelector, getSpecificGroupTasks}) => {



    return (
        <>
            <div className="flex space-x-3">
                <p onMouseEnter={groupSelector} onClick={getSpecificGroupTasks}className="cursor-pointer">{name}</p>

            </div>
        </>
    );
};

export default GroupNameCard;