export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-19'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  'skTRHz0pLnpDDfQe78a9ver2wSjTsJ8sjZtBJXOMvMPjbBpm7heytJXKnwqYjgfwVGN6jdOhvMDtR43hxtxaWSd1Mbc370mOlwxl1cKrJ3QfuGQq6GQhLbFtosz620nmUInlpRy1JyEVMvF827hiNr7D5lPZCyhcLkry2ToYFRQsStdRrvPr',
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
