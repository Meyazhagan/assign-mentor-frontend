import React, { createContext, useEffect, useState } from "react";
import batchServices from "../services/BatchServices";
import { Toastify } from "../services/ToastServices";

export const BatchContext = createContext();

function BatchProvider({ children }) {
  const [currentBatch, setCurrentBatch] = useState({});
  const [batch, setBatch] = useState([]);

  const getIndex = (id) => batch.findIndex((b) => b._id === id);

  const fetchAll = async () => {
    try {
      const { data: batch } = await batchServices.getAll();
      setBatch(batch);
    } catch (ex) {
      console.log(ex);
    }
  };
  const get = (id) => {
    const index = batch.findIndex((b) => b._id === id);
    return batch[index];
  };
  const create = async (newBatch) => {
    const prevBatch = batch;
    Toastify(batchServices.create(newBatch), {
      pending: "Creating the New Batch",
      onSuccess: ({ data }) => {
        setBatch([...batch, data]);
        return "Created The New Batch";
      },
      onError: ({ data }) => {
        setBatch(prevBatch);
        return data?.response?.data?.message || "An Unexpected Error";
      },
    });
  };
  const update = async (id, updatedBatch) => {
    const prevBatch = batch;
    const index = getIndex(id);
    const newBatch = [...batch];
    newBatch[index] = { ...newBatch[index], ...updatedBatch };
    setBatch(newBatch);
    Toastify(batchServices.update(id, updatedBatch), {
      pending: "Updating the Batch",
      onSuccess: () => {
        return "Updated the Batch";
      },
      onError: ({ data }) => {
        setBatch(prevBatch);
        return data?.response?.data?.message || "An Unexpected Error";
      },
    });
  };
  const remove = async (id) => {
    const prevBatch = batch;
    const index = getIndex(id);
    const newBatch = [...batch];
    newBatch.splice(index, 1);
    setBatch(newBatch);
    // toast message - promise
    Toastify(batchServices.remove(id), {
      pending: "Deleting the Batch",
      onSuccess: () => {
        return "Deleted the Batch";
      },
      onError: ({ data }) => {
        setBatch(prevBatch);
        return data?.response?.data?.message || "An Unexpected Error";
      },
    });
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <BatchContext.Provider
      value={{
        batch,
        get,
        fetchAll,
        create,
        update,
        remove,
        currentBatch,
        setCurrentBatch,
      }}
    >
      {children}
    </BatchContext.Provider>
  );
}

export default BatchProvider;
