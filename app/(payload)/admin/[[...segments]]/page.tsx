import type { Metadata } from 'next'
import { RootPage } from '@payloadcms/next/views'
import configPromise from '@payload-config'

type Args = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}

export const generateMetadata = async (): Promise<Metadata> => ({
  title: 'Payload Admin',
})

const Page = async (props: Args) => {
  const { params, searchParams } = props
  const config = await configPromise

  return RootPage({
    config: configPromise,
    importMap: config.admin.importMap,
    params,
    searchParams,
  })
}

export default Page
