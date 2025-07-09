// "use client"

// import React, { useState } from 'react'

// const page = () => {

//   const [title ,setTitle ]=useState("")
//   const [desc ,setDesc ]=useState("")
//   const [mainTask ,setMainTask]= useState([])
// const submitHandler=(e)=>{
// e.preventDefault()
// setMainTask([...mainTask, {title,desc}]);

// setTitle("")
// setDesc("")
// console.log(mainTask)

// }

// const deleteHandler=(i)=>{
// let copytask = [...mainTask]
// copytask.splice(i,1)
// setMainTask(copytask)
// }

// let renderTask=<h2>No Task Available</h2>

//  if(mainTask.length>0){
//   renderTask = mainTask.map((t,i)=>{

// return(
// <li key={i} className='flex items-center justify-between mb-8'>
//   <div className='flex items-center justify-between  w-2/3'>
// <h5 className='text-2xl font-semibold'>{t.title}</h5>
// <h6 className='text-lg font-medium'>{t.desc}</h6>
// </div>
// <button onClick={()=>{
//   deleteHandler(i)
// }} className='bg-red-500 text-white px-4 py-2 rounded font-bold'>Delete</button>
// </li>
// );

// });

//  }

//   return (
//     <  >

//       <h1 className='bg-black  text-white p-5 text-5xl font-bold text-center bg-linear-to-t from-sky-500 to-indigo-500'>TO DO LIST </h1>
//       <form onSubmit={submitHandler}>
//         <input type="text" className='text-2xl border-blue-600 border-4 rounded m-8 px-4 py-2 ' placeholder='Enter Task here' value={title} onChange={(e)=>{
//           setTitle(e.target.value)
//         }}/>
//                 <input type="text" className='text-2xl border-blue-600 border-4 rounded m-8 px-4 py-2 ' placeholder='Enter Description here' value={desc} onChange={(e)=>{
//                   setDesc(e.target.value)
//                 }}/>
//           <button className='bg-linear-to-t from-sky-500 to-indigo-500 text-white px-4 py-2 text-2xl rounded font-bold m-5'>Add Task</button>
//       </form>
//       <hr/>
//       <div className='p-8 bg-linear-to-t from-sky-500 to-indigo-500 '>
//        <ul>
//         {renderTask}
//        </ul>
//       </div>
//     </>
//   )
// }

// export default page













// "use client";

// import React, { useState } from "react";

// const Page = () => {
//   const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");
//   const [mainTask, setMainTask] = useState([]);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (!title.trim() || !desc.trim()) return;
//     setMainTask([...mainTask, { title, desc }]);
//     setTitle("");
//     setDesc("");
//   };

//   const deleteHandler = (i) => {
//     const updatedTasks = [...mainTask];
//     updatedTasks.splice(i, 1);
//     setMainTask(updatedTasks);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-10 font-sans">
//       {/* Header */}
//       <header className="mb-10">
//         <h1 className="text-4xl sm:text-5xl font-bold text-center text-indigo-600">
//           📝 Modern To-Do List
//         </h1>
//         <p className="text-center text-gray-500 mt-2">
//           Manage your tasks with style and simplicity.
//         </p>
//       </header>

//       {/* Form */}
//       <form
//         onSubmit={submitHandler}
//         className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
//       >
//         <input
//           type="text"
//           placeholder="Task Title"
//           className="w-full sm:w-1/4 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Task Description"
//           className="w-full sm:w-1/3 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           value={desc}
//           onChange={(e) => setDesc(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all"
//         >
//           ➕ Add Task
//         </button>
//       </form>

//       {/* Task List */}
//       <section className="max-w-4xl mx-auto space-y-4">
//         {mainTask.length === 0 ? (
//           <p className="text-center text-gray-400 text-lg">
//             No tasks added yet. Start by adding one!
//           </p>
//         ) : (
//           mainTask.map((task, i) => (
//             <div
//               key={i}
//               className="flex items-center justify-between bg-white border border-gray-200 rounded-lg shadow-md px-6 py-4 transition hover:shadow-lg"
//             >
//               <div className="flex flex-col">
//                 <h3 className="text-xl font-bold text-indigo-700">
//                   {task.title}
//                 </h3>
//                 <p className="text-gray-600">{task.desc}</p>
//               </div>
//               <button
//                 onClick={() => deleteHandler(i)}
//                 className="text-sm bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
//               >
//                 Delete
//               </button>
//             </div>
//           ))
//         )}
//       </section>
//     </div>
//   );
// };

// export default Page;













"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !desc.trim()) return;
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (i) => {
    const updatedTasks = [...mainTask];
    updatedTasks.splice(i, 1);
    setMainTask(updatedTasks);
  };

  const completeHandler = (i) => {
    const task = mainTask[i];
    const remaining = [...mainTask];
    remaining.splice(i, 1);
    setMainTask(remaining);

    // Save to localStorage
    const existingCompleted = JSON.parse(localStorage.getItem("completed") || "[]");
    localStorage.setItem("completed", JSON.stringify([...existingCompleted, task]));
    alert("Task marked as completed!");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-10 font-sans">
      <header className="mb-10 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-indigo-600">📝 To-Do List</h1>
          <p className="text-gray-500">Track your tasks efficiently.</p>
        </div>
        <button
          onClick={() => router.push("/CompleteTask")}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold"
        >
          ✅ View Completed
        </button>
      </header>

      <form
        onSubmit={submitHandler}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
      >
        <input
          type="text"
          placeholder="Task Title"
          className="w-full sm:w-1/4 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          className="w-full sm:w-1/3 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all"
        >
          ➕ Add
        </button>
      </form>

      <section className="max-w-4xl mx-auto space-y-4">
        {mainTask.length === 0 ? (
          <p className="text-center text-gray-400 text-lg">
            No tasks yet. Add one!
          </p>
        ) : (
          mainTask.map((task, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-white border rounded-lg shadow-md px-6 py-4"
            >
              <div>
                <h3 className="text-xl font-bold text-indigo-700">{task.title}</h3>
                <p className="text-gray-600">{task.desc}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => completeHandler(i)}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                >
                  Complete
                </button>
                <button
                  onClick={() => deleteHandler(i)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Page;
