import http from "./http";

const endPoint = "/assign";

const getAll = (mentorId) => {
  return http.get(`${endPoint}/${mentorId}`);
};

const many = (body, headers) => {
  return http.patch(
    `${endPoint}/many`,
    pick(body, ["mentorId", "studentIds "]),
    { headers }
  );
};
const one = (body, headers) => {
  return http.patch(`${endPoint}/one`, pick(body, ["mentorId", "studentId"]), {
    headers,
  });
};

const methods = {
  getAll,
  many,
  one,
};

export default methods;
