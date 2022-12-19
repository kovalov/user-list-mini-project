import { useState } from "react";

export const useFetch = (url) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const getAllItems = async () => {
    try {
      setIsLoaded(false);
      const response = await fetch(url);

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();
      setIsLoaded(true);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getItem = async (id) => {
    try {
      setIsLoaded(false);
      const response = await fetch(`${url}/${id}`);

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();
      setIsLoaded(true);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const paginate = async (page = 1, limit = 0) => {
    try {
      setIsLoaded(false);
      const response = await fetch(`${url}?_page=${page}&_limit=${limit}`);

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();
      setIsLoaded(true);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const addItem = async (item) => {
    const requestParams = {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    try {
      setIsLoaded(false);
      const response = await fetch(url, requestParams);

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();
      setIsLoaded(true);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateItem = async (id, item) => {
    const requestParams = {
      method: "PUT",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    try {
      setIsLoaded(false);
      const response = await fetch(`${url}/${id}`, requestParams);

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();
      setIsLoaded(true);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = async (id) => {
    const requestParams = {
      method: "DELETE",
    };

    try {
      setIsLoaded(false);
      const response = await fetch(`${url}/${id}`, requestParams);

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      const json = await response.json();
      setIsLoaded(true);
      return json;
    } catch (error) {
      console.log(error);
    }

    const data = await response.json();
    setIsLoaded(true);
    return data;
  };

  return { isLoaded, getAllItems, addItem, deleteItem, updateItem };
};
