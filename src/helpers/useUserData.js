import { useQuery } from "react-query";

const fetchUserData = async ({ queryKey }) => {
  const [, userId] = queryKey;

  if (!userId) {
    return Promise.reject('userId was not provided')
  }

  const res = await fetch(`/api/users/${userId}`)
  return res.json()
}

function useUserData(userId) {
  return useQuery(["users", userId], fetchUserData)
}


export { useUserData }