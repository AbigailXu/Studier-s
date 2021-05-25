import axios from "axios";

const api = axios.create({
  baseURL: 'https://studier-s.herokuapp.com',
})

export const insertTask = task => api.post(`/task/task`, task)
export const getAllTasks = () => api.get(`/task/tasks`)
export const updateTaskById = (id, task) => api.put(`/task/task/${id}`, task)
export const deleteTaskById = id => api.delete(`/task/task/${id}`)
export const getTaskById = id => api.get(`/task/task/${id}`)

export const insertGenre = genre => api.post(`/genre/genre`, genre)
export const getAllGenres = () => api.get(`/genre/genres`)
export const updateGenreById = (id, genre) => api.put(`/genre/genre/${id}`, genre)
export const deleteGenreById = id => api.delete(`/genre/genre/${id}`)
export const getGenreById = id => api.get(`/genre/genre/${id}`)

export const apiTask = {
    insertTask,
    getAllTasks,
    updateTaskById,
    deleteTaskById,
    getTaskById,
}

export const apiGenre = {
  insertGenre,
  getAllGenres,
  updateGenreById,
  deleteGenreById,
  getGenreById,
}