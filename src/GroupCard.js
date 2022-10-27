import React from 'react';

const GroupCard = ({name, description, image_url, profile_id, joinGroup, id}) => {
    const tempRngNum = Math.floor(Math.random() * 1001);

    return (
        <>
            <div className="card card-compact w-96 bg-base-100 shadow-xl carousel-item relative">
                <figure><img className="w-full h-64" src={image_url} alt="Group Image" /></figure>
                <div className="card-body">
                    <div className="flex justify-between">
                        <h2 className="card-title">Group Name:</h2>
                        <h2 className="card-title">{name}</h2>
                    </div>
                        <p>{description}</p>
                    <p>Created by: {profile_id}</p>
                    <p>Member Count: {tempRngNum}</p>
                    <div className="flex">
                        <p>Group Rating:</p>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={async () => {await joinGroup(id)}} className="btn btn-primary bg-purple-600">Join Group</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GroupCard;