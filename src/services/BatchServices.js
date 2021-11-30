import http from "./http";

const endPoint = "/batch";

const getAll = () => {
  return http.get(`${endPoint}`);
};

const get = (id) => {
  return http.get(`${endPoint}/${id}`);
};

const create = (newBatch) => {
  return http.post(`${endPoint}`, { name: newBatch.name });
};

const update = (id, batch) => {
  return http.put(`${endPoint}/${id}`, { name: batch.name });
};

const remove = (id) => {
  return http.delete(`${endPoint}/${id}`);
};

const methods = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default methods;
