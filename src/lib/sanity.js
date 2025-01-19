import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'hvr7tmal', // replace with your Sanity project ID
  dataset: 'production', // or the dataset you are using
  useCdn: true // true for faster queries, false if you need real-time data
})

export default client
