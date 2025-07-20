"use client";

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const COLORS = ["#22c55e", "#ef4444"]; // green, red

const TaskAnalysis = () => {
  const router = useRouter();
  const [completedCount, setCompletedCount] = useState(0);
  const [deletedCount, setDeletedCount] = useState(0);

  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem("completed") || "[]");
    const deleted = JSON.parse(localStorage.getItem("deleted") || "[]");
    setCompletedCount(completed.length);
    setDeletedCount(deleted.length);
  }, []);

  const data = [
    { name: "Completed Tasks", value: completedCount },
    { name: "Deleted Tasks", value: deletedCount },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-10">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-indigo-600">📊 Task Progress Analysis</h1>
        <button
          onClick={() => router.push("/")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
        >
          🔙 Back to Tasks
        </button>
      </header>

      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Task Completion vs Removal Summary
        </h2>

        {completedCount + deletedCount === 0 ? (
          <p className="text-center text-gray-400 text-lg">No data to analyze yet.</p>
        ) : (
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={100}
                  dataKey="value"
                >
                  {data.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </section>
    </div>
  );
};

export default TaskAnalysis;
