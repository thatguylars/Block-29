import api from "../../store/api";

const puppyListApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPuppies: builder.query({
      query: () => ({
        url: "/players",
        method: "GET",
      }),
      providesTags: ["Puppy"],
    }),
  }),
});

export const { useGetPuppiesQuery } = puppyListApi;
