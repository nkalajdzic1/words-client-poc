import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "lib/classes";
import { QUERY_KEYS } from "lib/constants";
import { createQueryFromObj } from "lib/utils";

/**
 * @description
 * @param {*} params
 * @param {*} config
 * @returns
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
