import api from "../../store/api";

const puppyDetailsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPuppy: builder.query({
      query: (id) => ({
        url: `/players/${id}`,
        method: "GET",
      }),
      providesTags: ["Puppy"],
    }),
    deletePuppy: builder.mutation({
      query: (id) => ({
        url: `/players/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Puppy"],
    }),
  }),
});

export const { useGetPuppyQuery, useDeletePuppyMutation } = puppyDetailsApi;
