import type { Metadata } from 'next'
import { NotFoundPage } from '@payloadcms/next/views'
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
  title: 'Not Found',
})

const NotFound = async (props: Args) => {
  const { params, searchParams } = props
  const config = await configPromise

  return NotFoundPage({
    config: configPromise,
    importMap: config.admin.importMap,
    params,
    searchParams,
  })
}

export default NotFound
