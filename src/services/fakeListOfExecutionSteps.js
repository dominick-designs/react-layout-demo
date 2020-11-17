export const executions = [
  {
    _id: 1,
    firstName: "Dan",
    lastName: "Johnson",
    email: "d.johnson@gmail.com",
    dueDate: "2020-11-25",
    completedDate: "2020-11-23",
  },
  {
    _id: 1,

    firstName: "Mary",
    lastName: "Bath",
    email: "mary.bath@gmail.com",
    dueDate: "2020-11-28",
    completedDate: "2020-11-25",
  },
  {
    _id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "jerry.padon@gmail.com",
    dueDate: "",
    completedDate: "",
  },
];

export function getExecutions() {
  return executions;
}
