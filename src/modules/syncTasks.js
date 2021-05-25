import api from "../api/index.js"

export const SyncTasks = async () => {
  this.setState({ isLoading: true });

  await api.getAllTasks().then((tasks) => {
    this.setState({
      data: [...tasks.data.data], //[newData],
      isLoading: false,
    });
  });
};

//module.exports(SyncTasks);