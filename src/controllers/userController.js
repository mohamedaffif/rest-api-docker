// returning standardized responses function

import { createUserService, deleteUserService, getAllUsersService, updateUserService } from "../models/userModel.js";

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const createUser = async (req, res, next) => {
  // logic to create a user
  const { name, email } = req.body;
  try {
    const newUser = await createUserService(name, email);
    handleResponse(res, 201, "User created successfully", newUser);
  } catch (err) {
    handleResponse(res, 500, "Error creating user", null);
    next(err); 
  }
};

export const getUsers = async (req, res, next) => {
  // logic to get all users
   console.log("getUsers called!")  // ← add this
  try {
    const users = await getAllUsersService();
     console.log("Users from DB:", users)  // ← add this
    console.log("Type:", typeof users)    //
    handleResponse(res, 200, "Users retrieved successfully", users);
  } catch (err) {
    handleResponse(res, 500, "Error retrieving users", null);
    next(err);
  }
};

export const getUserById = async(req, res) => {
  // logic to get a user by id
  const { id } = req.params;
  // Implement logic to get user by id
  try {
    const user =  await getUserByIdService(id);
    if (!user) return handleResponse(res, 404, "User not found", null);
    handleResponse(res, 200, "User retrieved successfully", user);
  } catch (err) {
    handleResponse(res, 500, "Error retrieving user", null);
  }
};

export const updateUser = (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;
  // logic to update a user
  try {
    const updatedUser = updateUserService(id, name, email);
    if (!updatedUser) return handleResponse(res, 404, "User not found", null);
    handleResponse(res, 200, "User updated successfully", updatedUser);
  } catch (err) {
    handleResponse(res, 500, "Error updating user", null);
  }
};

export const deleteUser = (req, res) => {
    const { id } = req.params;
    // logic to delete a user
    try {
        const deletedUser = deleteUserService(id);
        if (!deletedUser) return handleResponse(res, 404, "User not found", null);
        handleResponse(res, 200, "User deleted successfully", deletedUser);
    } catch (err) {
        handleResponse(res, 500, "Error deleting user", null);
    }
}