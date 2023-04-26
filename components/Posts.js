import React from 'react';
import { getFirestore, collection, doc } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '@/firebase';
import Post from './Post';

const Posts = () => {
  const [value] = useCollection(
    collection(db, 'messages'),

  );
  return (
    <div>
    <p>
      
      {value && (
        <span>
         
          {value.docs.map((doc) => (
            <Post
              key={doc.id}
              name={doc.data().name}
              email={doc.data().email}
              image={doc.data().image}
              postImage={doc.data().postImage}
              message={doc.data().message}
              createdAt={doc.data().createdAt}
            />
          ))}
        </span>
      )}
    </p>
  </div>
  )
}

export default Posts
