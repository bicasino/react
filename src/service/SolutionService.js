export class SolutionService {
    getSolutions() {
      return fetch("data/solution.json")
        .then((res) => res.json())
        .then((d) => d.data)
    }
  }