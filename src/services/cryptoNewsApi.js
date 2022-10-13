import {createApi , fetchBaseQuery}  from '@reduxjs/toolkit/query/react' ; 

const cryptoNewsHeaders={
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '320f779421msha23296e8c8abf70p1a0249jsnafe260c972e0'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) =>({url, headers:cryptoNewsHeaders});

export const cryptoNewsApi = createApi({
    reducerPath:"cryptoNewsApi" ,
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder) =>({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});


export const { useGetCryptoNewsQuery } = cryptoNewsApi;