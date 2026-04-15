import React, { useContext } from "react";
import { Context } from "../../context/Context";
import FriendCard from "../../components/ui/card/FriendCard";

const Home = () => {
  const { friends, loading } = useContext(Context);

  const handleFriendClick = (friend) => {
    // Handle friend card click, e.g., navigate to friend details page
    console.log("Friend clicked:", friend);
  };

  return (
    <div className="w-[90%] mx-auto space-y-8 mb-10">
      <div className="text-center p-10 space-y-3">
        <h1 className="text-4xl font-bold">
          Friends to keep close in your life
        </h1>
        <p className="text-sm">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-white mt-4 ">
          + Add a Friend
        </button>
      </div>
      <div className="grid md:grid-cols-4 gap-4 w-[80%] mx-auto">
        <div className="shadow p-5 rounded-lg bg-white text-center">
          <h1 className="font-bold text-lg">{friends.length}</h1>
          <p className="text-sm">Total Friends</p>
        </div>
        <div className="shadow p-5 rounded-lg bg-white text-center">
          <h1 className="font-bold text-lg">
            {friends.filter((f) => f.status === "on-track").length}
          </h1>
          <p className="text-sm">On Track</p>
        </div>

        <div className="shadow p-5 rounded-lg bg-white text-center">
          <h1 className="font-bold text-lg">
            {
              friends.filter((f) => new Date(f.next_due_date) > new Date())
                .length
            }
          </h1>
          <p className="text-sm">Need Attention</p>
        </div>
        <div className="shadow p-5 rounded-lg bg-white text-center">
          <h1 className="font-bold text-lg">
            {friends.filter((f) => f.days_since_contact > 30).length}
          </h1>
          <p className="text-sm">Interactions This Month</p>
        </div>
      </div>
      <div className="w-[80%] mx-auto">
        <h1 className="text-2xl font-bold mb-3">Your Friends</h1>

        {loading ? (
          <div className="flex justify-center items-center">
            <div className="loading"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {friends.map((friend) => (
              <div key={friend.id} onClick={() => handleFriendClick(friend)}>
                <FriendCard friend={friend} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
