
const FeedBack = ({ feedBackData }) => {
    // console.log(feedBackData);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {
                feedBackData.map(feed => (
                    <div key={feed.reviewId} className="card bg-base-100 shadow-xl border-1 border-gray-200">
                        <div className=" p-6">
                            <div className="flex justify-between items-center">
                                <img className="w-12 h-12 rounded-full" src={feed.userImg} alt="" />
                                <h2 className="card-title ml-4">{feed.name}</h2>
                                <p className="text-right">{new Date().toLocaleDateString()}</p>
                            </div>

                            <p>{feed.review}</p>
                            <div className="card-actions justify-between items-center">
                                <div className="rating">
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                    <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                </div>
                                <button className="btn btn-primary">See Details</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default FeedBack;