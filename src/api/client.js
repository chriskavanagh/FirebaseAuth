import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.56.1:9000",
});

apiClient.get("/listings").then((response) => {
  if (!response.ok) {
    response.problem;
  }
});
