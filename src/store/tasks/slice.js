import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    loading: false,
  },
  reducers: {
    handleTask: (state, action) => {
      let tempTasks = state.tasks
      tempTasks.unshift(action.payload.form)
      state.tasks = [...tempTasks]
      localStorage.setItem('tasks', JSON.stringify(tempTasks))
    },
    handleDelete: (state, action) => {
      let tempTasks = state.tasks
      tempTasks.splice(action.payload.index, 1)
      state.tasks = [...tempTasks]
      localStorage.setItem('tasks', JSON.stringify(tempTasks))
    },
    handleFinished: (state, action) => {
      let { index } = action.payload
      let tempTasks = state.tasks
      tempTasks[index].finished = !tempTasks[index].finished
      state.tasks = [...tempTasks]
    },
    selectAllTasks: (state) => {
      state.tasks = (state.tasks.map((x) => {
        return {
          ...x,
          finished: true
        }
      }))
    },
    getTasks: (state) => {
      let tempTasks = JSON.parse(localStorage.getItem('tasks'))
      if (tempTasks) {
        state.tasks = [...tempTasks]
      }
    },
  }
});

export const { handleTask, getTasks, handleDelete, handleFinished, selectAllTasks } = slice.actions;

export default slice.reducer;


