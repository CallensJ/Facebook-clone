import React from "react";
import StoryCard from "./StoryCard";


const stories = [
    {
      name: "britt scott clark",
      src: "https://static.wikia.nocookie.net/vldl/images/8/82/Britt.jpg/revision/latest/scale-to-width-down/400?cb=20201104114524.jpg",
      profile:
        "https://static.wikia.nocookie.net/vldl/images/8/82/Britt.jpg/revision/latest/scale-to-width-down/400?cb=20201104114524.jpg",
    },
    {
      name: "lara croft",
      src: "https://images.unsplash.com/photo-1637154058489-fdd2c039809d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFyYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60.jpg",
      profile:
        "https://images.unsplash.com/photo-1637154073552-c5687cdad7f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFyYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60.jpg",
    },
    {
      name: "Raamin ka",
      src: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
      profile:
        "https://images.unsplash.com/photo-1602353195884-44ea7e76e196?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80.jpg",
    },
    {
      name: "Arwen",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80.jpg",
      profile:
        "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80.jpg",
    },
    
  ];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
