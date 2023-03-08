import React from "react";
import StoryCard from "./StoryCard";


const stories = [
    {
      name: "britt scott clark",
      src: "https://static.wikia.nocookie.net/vldl/images/8/82/Britt.jpg/revision/latest/scale-to-width-down/400?cb=20201104114524.jpg",
      profile:
        "https://static.wikia.nocookie.net/vldl/images/8/82/Britt.jpg/revision/latest/scale-to-width-down/400?cb=20201104114524.jpg",
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
