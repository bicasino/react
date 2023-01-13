export class PostService {
  // getPosts() {
  //   return fetch("data/posts.json")
  //     .then((res) => res.json())
  //     .then((d) => d.data);
  // }

  getAll(pageIndex) {
    return fetch(`https://it.vnpost.vn/api/v1/News?menuId=3&skip=${pageIndex}&take=8`)
  }

  getById(pageID) {
    return fetch(`https://it.vnpost.vn/api/v1/News?menuId=3&skip=${pageID}&take=4`)
  }
}
 