import React from "react";
import StoryCard from "./StoryCard";


const stories = [
    {
      name: "Mama Mia",
      src: "https://thumbs.dreamstime.com/b/belle-for%C3%AAt-tropicale-%C3%A0-l-itin%C3%A9raire-am%C3%A9nag%C3%A9-pour-amateurs-de-la-nature-de-ka-d-ang-36703721.jpg",
      profile:
        "https://static.wikia.nocookie.net/vldl/images/8/82/Britt.jpg/revision/latest/scale-to-width-down/400?cb=20201104114524.jpg",
    },
    {
      name: "lara croft",
      src: "https://images.unsplash.com/photo-1678260748426-f0901434d81c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80.jpg",
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
      src: "https://images.unsplash.com/photo-1678219716027-1352ee0ded50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      profile:
        "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzNzYzNn0?utm_source=dictionnaire&utm_medium=referral",
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
