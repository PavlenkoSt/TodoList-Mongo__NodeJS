const { Todo } = require("../db/index");

module.exports = {
  async getAll() {
    const todos = await Todo.find();

    return todos;
  },
  async getOneById(id) {
    const todo = await Todo.findById(id);

    return todo;
  },
  async createTodo({ userName, task }) {
    const created = await Todo.create({ userName, task, isDone: false });

    return created.toJSON();
  },
  async deleteById(id) {
    const todo = await Todo.findByIdAndRemove(id);

    if (!todo) {
      return 404;
    }

    return 200;
  },
  async updateTodo(id, { task, isDone }) {
    const newTodo = await Todo.findByIdAndUpdate(
      id,
      { task, isDone },
      { new: true }
    );

    if (!newTodo) {
      return 404;
    }

    return newTodo;
  },
};
