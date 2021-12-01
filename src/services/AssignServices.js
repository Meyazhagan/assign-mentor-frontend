import http from "./http";
import { pick } from "lodash";
const endPoint = "/assign";

const getAll = (mentorId) => {
  return http.get(`${endPoint}/${mentorId}`);
};

const many = (body) => {
  return http.patch(`${endPoint}/many`, pick(body, ["mentorId", "studentIds"]));
};
const one = (body) => {
  return http.patch(`${endPoint}/one`, pick(body, ["mentorId", "studentId"]));
};

const methods = {
  getAll,
  many,
  one,
};

export default methods;
