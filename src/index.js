import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetails from './CommentDetails';

const App = () => {
 return(
   <div className='ui container comments'>
     <CommentDetails
       author="Sam"
       time="Today at 6:00PM"
       content="Nice blog post"
       avatar={faker.image.avatar()}
     />
     <CommentDetails
       author="Jane"
       time="Yesterday at 8:36PM"
       content="I like this post very much"
       avatar={faker.image.avatar()}
     />
     <CommentDetails
       author="Max"
       time="Today at 10:00AM"
       content="Very nice post"
       avatar={faker.image.avatar()}
     />
   </div>
 );
};

ReactDOM.render(<App />, document.querySelector('#root'));