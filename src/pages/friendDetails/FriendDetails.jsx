import React, { useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../../context/Context";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsArchive } from "react-icons/bs";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { BiMessageDots, BiPhoneCall } from "react-icons/bi";
import { IoVideocamOutline } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import CallCard from "../../components/ui/card/CallCard";

const FriendDetails = () => {
  const { FriendId } = useParams();
  const { friends, handleCall, callButtons } = useContext(Context);
  // console.log("FriendId from URL:", FriendId);
  // console.log("All friends:", friends);

  const expecteFriend = friends.find(
    (friend) => friend.id === parseInt(FriendId),
  );
  // console.log("Extracted Friend:", expecteFriend);

  const statusColors = {
    "on-track": "bg-green-800",
    "almost due": "bg-yellow-500",
    overdue: "bg-red-500",
  };

  return (
    <div className="w-[80%] mx-auto space-y-8 grid md:grid-cols-3 gap-5 mt-5 mb-10">
      <div className="text-center col-span-1 ">
        <div className="">
          <div className="shadow bg-white rounded-lg py-5 px-0.5 ">
            <div className="space-y-2 w-[80%] mx-auto">
              <img
                className="w-1/2 h-1/2 rounded-full mx-auto"
                src={expecteFriend?.picture}
                alt={expecteFriend?.name}
              />
              <h1 className="text-2xl font-bold">{expecteFriend?.name}</h1>
              <p className="text-gray-600 text-sm">
                {expecteFriend?.days_since_contact}d ago
              </p>
              <span
                className={`${statusColors[expecteFriend?.status]} text-white px-2 py-1 rounded-full text-xs`}
              >
                {expecteFriend?.status.charAt(0).toUpperCase() + expecteFriend?.status.slice(1)}
              </span>
              <div>
                {expecteFriend?.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="
                    bg-green-500 text-white px-2 py-1 rounded-full text-xs mt-2 mr-2 inline-block"
                  >
                    {tag.charAt(0).toUpperCase() + tag.slice(1)}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 italic">"{expecteFriend?.bio}"</p>
              <p className="text-gray-400">"{expecteFriend?.email}"</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-5">
            <div className="flex justify-center items-center gap-2 btn bg-white text-xl text-semibold cursor-pointer">
              <HiOutlineBellSnooze />
              <h1>Snooze 2 weeks</h1>
            </div>
            <div className="flex justify-center items-center gap-2 btn bg-white text-xl text-semibold cursor-pointer">
              <BsArchive />
              <h1>Archive</h1>
            </div>
            <div className="flex justify-center items-center gap-2 btn bg-white text-xl text-semibold cursor-pointer text-red-500">
              <RiDeleteBinLine className="" />
              <h1>Delete</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-2">
        <div className="space-y-5">
          <div className="grid md:grid-cols-3 gap-4 mx-auto">
            <div className="shadow p-5 rounded-lg bg-white text-center">
              <h1 className="font-bold text-2xl">
                {expecteFriend?.days_since_contact}
              </h1>
              <p className="text-lg text-gray-400">Days Since Contact</p>
            </div>
            <div className="shadow p-5 rounded-lg bg-white text-center">
              <h1 className="font-bold text-2xl">{expecteFriend?.goal}</h1>
              <p className="text-lg text-gray-400">Goal (Days)</p>
            </div>

            <div className="shadow p-5 rounded-lg bg-white text-center">
              <h1 className="font-bold text-2xl">
                {new Date(expecteFriend?.next_due_date).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  },
                )}
              </h1>
              <p className="text-lg text-gray-400">Next Due</p>
            </div>
          </div>
          <div className="bg-white px-5 py-7 shadow rounded-lg">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-xl text-gray-500">
                Relationship Goal
              </h1>
              <button className="btn px-5">Edit</button>
            </div>
            <h1 className="font-bold text-xl text-gray-400">
              Connect every{" "}
              <span className="text-black">{expecteFriend?.goal} days</span>
            </h1>
          </div>
          <div className="bg-white px-5 py-7 shadow rounded-lg">
            <h1 className="font-bold text-xl text-gray-500 mb-5">
              Quick Check-In
            </h1>
            <div className="grid md:grid-cols-3 gap-4 mx-auto">
              <div
                onClick={() =>
                  handleCall({
                    expecteFriend,
                    item: "Call",
                    icon: <BiPhoneCall />,
                    text: "Asked for career advice",
                  })
                }
                className="shadow p-5 rounded-lg bg-[#F8FAFC] text-center cursor-pointer"
              >
                <BiPhoneCall className="mx-auto text-4xl" />
                <p className="text-lg ">Call</p>
              </div>
              <div
                onClick={() =>
                  handleCall({
                    expecteFriend,
                    item: "Text",
                    icon: <BiMessageDots />,
                    text: "Text for career advice",
                  })
                }
                className="shadow p-5 rounded-lg bg-[#F8FAFC] text-center cursor-pointer"
              >
                <BiMessageDots className="mx-auto text-4xl" />
                <p className="text-lg ">Text</p>
              </div>
              <div
                onClick={() =>
                  handleCall({
                    expecteFriend,
                    item: "Video",
                    icon: <IoVideocamOutline />,
                    text: "Industry conference meetup",
                  })
                }
                className="shadow p-5 rounded-lg bg-[#F8FAFC] text-center cursor-pointer"
              >
                <IoVideocamOutline className="mx-auto text-4xl" />
                <p className="text-lg ">Video</p>
              </div>
            </div>
          </div>
          <div className="bg-white px-5 py-7 shadow rounded-lg">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-xl text-gray-500">
                Recent Interactions
              </h1>

              <button className="btn px-5 flex justify-center items-center gap-2">
                <FaHistory />
                Full History
              </button>
            </div>
            <div>
              {callButtons
                .filter((call) => call.expecteFriend.id === expecteFriend.id)
                .map((call) => (
                  <CallCard key={call.id} call={call} />
                ))}
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
