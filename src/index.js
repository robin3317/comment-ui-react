import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';

const App = () => {
 return(
   <div className='ui container comments' style={{marginTop: "10px"}}>

     <ApprovalCard>
       <CommentDetails
         author="Sam"
         time="Today at 6:00PM"
         content="Nice blog post"
         avatar={faker.image.avatar()}
       />
     </ApprovalCard>

     <ApprovalCard>
       <CommentDetails
         author="Jane"
         time="Yesterday at 8:36PM"
         content="I like this post very much"
         avatar={faker.image.avatar()}
       />
     </ApprovalCard>

     <ApprovalCard>
       <CommentDetails
         author="Max"
         time="Today at 10:00AM"
         content="Very nice post"
         avatar={faker.image.avatar()}
       />
     </ApprovalCard>

   </div>
 );
};

ReactDOM.render(<App />, document.querySelector('#root'));