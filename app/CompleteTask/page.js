"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CompletedPage = () => {
  const [completedTasks, setCompletedTasks] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("completed") || "[]");
    setCompletedTasks(stored);
  }, []);

  const clearCompleted = () => {
    localStorage.removeItem("completed");
    setCompletedTasks([]);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 font-sans">
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-green-600">✅ Completed Tasks</h1>
        <div className="flex gap-2">
          <button
            onClick={() => router.push("/")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
          >
            🔙 Back
          </button>
          <button
            onClick={clearCompleted}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            🗑️ Clear All
          </button>
        </div>
      </header>

      <section className="space-y-4 max-w-4xl mx-auto">
        {completedTasks.length === 0 ? (
          <p className="text-gray-400 text-center">No completed tasks found.</p>
        ) : (
          completedTasks.map((task, i) => (
            <div
              key={i}
              className="bg-gray-100 border rounded-lg shadow-sm px-6 py-4"
            >
              <h3 className="text-lg font-semibold text-green-700">{task.title}</h3>
              <p className="text-gray-600">{task.desc}</p>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default CompletedPage;
