import React from 'react';

const MemberCard = ({name}) => {
    return (
        <>
         <p className="font-bold cursor-pointer">{name}</p>
        </>
    );
};

export default MemberCard;