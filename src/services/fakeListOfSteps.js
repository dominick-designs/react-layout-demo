export const steps = [
  {
    _id: 1,
    date: "2020-11-23",
    image: "image",
    task: "Research",
  },
  { _id: 2, date: "2020-11-25", image: "image here", task: "Writing" },
  { _id: 3, date: "2020-11-30", image: "image here", task: "Enhancement" },
  { _id: 4, date: "2020-11-30", image: "image here", task: "Approval" },
  { _id: 4, date: " ", image: " ", task: "Confirmation" },
];

export function getSteps() {
  return steps;
}
