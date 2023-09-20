export const configEndpointsApi = {
    endpoints: {
      users: {
        read: "http://localhost:5262/api/persons",
        edit:"http://localhost:5262/api/persons/"
      },
      rooms:{
        read: "http://localhost:5262/api/rooms",
        edit: "http://localhost:5262/api/rooms/"
      }
    }
}
  