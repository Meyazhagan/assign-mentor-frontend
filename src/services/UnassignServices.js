import http from "./http";

const endPoint = "/unassign";

const getAll = () => {
  return http.get(`${endPoint}/students`);
};

const many = (body, headers) => {
  return http.patch(`${endPoint}/many`, pick(body, ["studentIds "]), {
    headers,
  });
};
const one = (body, headers) => {
  return http.patch(`${endPoint}/one`, pick(body, ["studentId"]), {
    headers,
  });
};

const methods = {
  getAll,
  many,
  one,
};

export default methods;
