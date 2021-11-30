import http from "./http";
import { pick } from "lodash";

const endPoint = "/students";

const mentorProps = ["name", "email", "course", "level"];

const getALl = (headers) => {
  return http.get(`${endPoint}`, { headers });
};

const get = (id, headers) => {
  return http.get(`${endPoint}/${id}`, { headers });
};

const create = (mentor, headers) => {
  return http.post(`${endPoint}`, pick(mentor, mentorProps), { headers });
};
const update = (mentor, headers) => {
  return http.put(`${endPoint}`, pick(mentor, mentorProps), { headers });
};

const remove = (id, headers) => {
  return http.delete(`${endPoint}/${id}`, { headers });
};

const methods = { getALl, get, create, update, remove };

export default methods;
