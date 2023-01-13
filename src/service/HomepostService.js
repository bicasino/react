export class HomepostService {
    getHomeposts() {
      return fetch("data/homePost.json")
        .then((res) => res.json())
        .then((d) => d.new_data)
    }
  }