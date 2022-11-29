import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "lib/classes";
import { QUERY_KEYS } from "lib/constants";
import { createQueryFromObj } from "lib/utils";

/**
 * @description hook that retrieves the list of words from the api
 * @param {Object} params object containing the query http params (for instance: { pageNumber: 1, pageSize: 10 })
 * @param {Object} config custom configuration object for the react query useQuery hook
 * @returns {Object} result of the useQuery hook after calling the api
 */
export const useWords = (params, config) => {
  return useQuery(
    [QUERY_KEYS.GET_WORDS, params],
    async () => {
      const apiClient = new ApiClient().getInstance();
      const response = await apiClient.get(
        `words?${createQueryFromObj(params)}`
      );
      return {
        list: response.data || [],
        total: parseInt(response.headers["x-total-count"]) || 0,
      };
    },
    {
      enabled: true,
      ...config,
    }
  );
};
