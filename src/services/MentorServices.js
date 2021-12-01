import http from "./http";
import { pick } from "lodash";

const endPoint = "/mentors";

const mentorProps = ["name", "email", "role", "experience"];

const getALl = () => {
  return http.get(`${endPoint}`);
};

const get = (id) => {
  return http.get(`${endPoint}/${id}`);
};

const create = (mentor) => {
  return http.post(`${endPoint}`, pick(mentor, mentorProps));
};
const update = (id, mentor) => {
  return http.put(`${endPoint}/${id}`, pick(mentor, mentorProps));
};

const remove = (id) => {
  return http.delete(`${endPoint}/${id}`);
};

const methods = { getALl, get, create, update, remove };

export default methods;
