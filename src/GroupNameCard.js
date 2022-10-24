import React from 'react';

const GroupNameCard = ({name, groupSelector}) => {



    return (
        <>
         <p onClick={groupSelector}>{name}</p>
        </>
    );
};

export default GroupNameCard;