import type { PageServerLoad } from './$types'


export const load = (async () => {
  return new Promise (resolve => {
    setTimeout(() => {
      resolve({})
    }, 3000)
  })
}) satisfies PageServerLoad
