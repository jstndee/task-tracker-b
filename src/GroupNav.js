import React from 'react';

const GroupNav = () => {
    return (
        <div>
            <label htmlFor="my-modal-5" className="btn modal-button text-center btn flex justify-center">Create Group</label>
            <p className="text-center">Or Join One Below</p>
            <hr/>
            <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box mx-auto">
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
                    <form>
                        <input type="text" placeholder="Group Name"/>
                        <input type="text" placeholder="Group Description"/>
                        <input type="text" placeholder="Group Icon/Image URL"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GroupNav;