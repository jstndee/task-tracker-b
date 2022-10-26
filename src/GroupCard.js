import React from 'react';

const GroupCard = ({name, description, image_url, profile_id, joinGroup, id}) => {
    return (
        <>
            <div className="card card-compact w-96 bg-base-100 shadow-xl carousel-item relative">
                <figure><img className="" src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>{profile_id}</p>
                    <p>Member Count</p>
                    <p>Group Rating</p>
                    <div className="card-actions justify-end">
                        <button onClick={async () => {await joinGroup(id)}} className="btn btn-primary bg-purple-600">Join Group</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GroupCard;