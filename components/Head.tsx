import React, { useEffect } from 'react'
import Head from 'next/head'

interface IButterHeadProps {
  title?: string
  themeColor?: string
  children?: React.ReactNode
}

const ButterHead: React.FC<IButterHeadProps> = ({
  title,
  themeColor,
  children
}) => {
  useEffect(() => {
    // @ts-ignore
    import('amfe-flexible')
  }, [])
  return (
    <Head>
      <title>{title}</title>
      <meta name="theme-color" content={themeColor}></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
      ></meta>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      {children}
    </Head>
  )
}

ButterHead.defaultProps = {
  title: '新页面',
  themeColor: '#fffff'
}

export default ButterHead
