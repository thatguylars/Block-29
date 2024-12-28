import api from "../../store/api";

const puppyFormApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addPuppy: builder.mutation({
      query: (payload) => ({
        url: "/players",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Puppy"],
    }),
  }),
});

export const { useAddPuppyMutation } = puppyFormApi;
