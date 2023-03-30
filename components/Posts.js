import React from 'react';
import { getFirestore, collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '@/firebase';
import Post from './Post';

const Posts = () => {
  const [value, loading, error] = useCollection(
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
