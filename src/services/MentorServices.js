import http from "./http";
import { pick } from "lodash";

const endPoint = "/mentors";

const mentorProps = ["name", "email", "role", "experience"];

const getALl = (headers) => {
  return http.get(`${endPoint}`, { headers });
};

const get = (id, headers) => {
  return http.get(`${endPoint}/${id}`, { headers });
};

const create = (mentor, headers) => {
  return http.post(`${endPoint}`, pick(mentor, mentorProps), { headers });
};
const update = (id, mentor, headers) => {
  return http.put(`${endPoint}/${id}`, pick(mentor, mentorProps), { headers });
};

const remove = (id, headers) => {
  return http.delete(`${endPoint}/${id}`, { headers });
};

const methods = { getALl, get, create, update, remove };

export default methods;
