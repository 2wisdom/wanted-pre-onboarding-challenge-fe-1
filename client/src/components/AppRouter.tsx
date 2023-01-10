import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SignUp from "../pages/auth/SignUp";
import SignIn from "../pages/auth/SignIn";
import TodoList from "../pages/todos/TodoList";
import TodoDetail from "../pages/todos/TodoDetail";
import Index from "../pages";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/users/create" element={<SignUp />} />
        <Route path="/users/login" element={<SignIn />} />
        <Route path="/todos" element={<TodoList />} />
        <Route path="/todos/:id" element={<TodoDetail />} />
      </Routes>
    </>
  );
}
