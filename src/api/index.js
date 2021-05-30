// Axios
import axios from "axios";

// Heroku
const api = axios.create({
  baseURL: 'https://studier-s.herokuapp.com',
})

// Task db
export const insertTask = task => api.post(`/api/task/task`, task)
export const getAllTasks = () => api.get(`/api/task/tasks`)
export const updateTaskById = (id, task) => api.put(`/api/task/task/${id}`, task)
export const deleteTaskById = id => api.delete(`/api/task/task/${id}`)
export const getTaskById = id => api.get(`/api/task/task/${id}`)

// Genre db
export const insertGenre = genre => api.post(`/api/genre/genre`, genre)
export const getAllGenres = () => api.get(`/api/genre/genres`)
export const updateGenreById = (id, genre) => api.put(`/api/genre/genre/${id}`, genre)
export const deleteGenreById = id => api.delete(`/api/genre/genre/${id}`)
export const getGenreById = id => api.get(`/api/genre/genre/${id}`)


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

