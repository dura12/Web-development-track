'use client'
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface Product{
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  requiremets: string;
  idealCandidate: string;
  categories: string[];
  opType: string;
  startDate: string;
  endDate: string;
  deadline: string;
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string[];
  orgID: string;
  status: string;
  applicantsCount: number;
  viewsCount: number;
  orgName: string;
  logoUrl: string;
  isBookmarked: boolean;
  isRolling: boolean;
  questions: string;
  perksAndBenefits: string;
  createdAt: string;
  updatedAt: string;
  orgPrimaryPhone: string;
  average_rating: number;
  total_views: number;

}

export const productsApi = createApi({
    reducerPath: "opportunities",
    baseQuery: fetchBaseQuery({baseUrl:"https://akil-backend.onrender.com/opportunities"}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "/search",
        }),
        getProduct: builder.query({
            query: (id) => `/${id}`,
        })
    })
})
export const { useGetProductsQuery,useGetProductQuery } = productsApi;