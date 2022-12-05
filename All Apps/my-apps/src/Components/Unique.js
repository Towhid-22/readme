import React from "react";
import { v4 as uuidv4 } from 'uuid';

const todos = [
     {
          id : uuidv4(),
          title : "todo1",
          desc : "todo1 description 1"
     },
     {
          id : uuidv4(),
          title : "todo2",
          desc : "todo1 description 2"
     },
     {
          id : uuidv4(),
          title : "todo3",
          desc : "todo1 description 3"
     },
     {
          id : uuidv4(),
          title : "todo4",
          desc : "todo1 description 4"
     },
     {
          id : uuidv4(),
          title : "todo5",
          desc : "todo1 description 5"
     }
];

const Unique = () => {
     return <div>
          {todos.map((todo) => {
               return <div key={uuidv4()}>
                    <h3>{todo.title}</h3>
                    <p>{todo.desc}</p>
               </div>
          })}
     </div>;
}

export default Unique;