import React from 'react'
// import { InferGetStaticPropsType, GetStaticProps } from 'next'
import Head from '../../components/Head'
import request from '../../utils/request'
import styles from '../../styles/me.module.scss'
import cn from 'classnames'
import dayjs from 'dayjs'

type User = {
  name: string
  memberships: Record<string, any>[]
  icons: Record<string, any>[]
  favoritesCount: number
  followingCount: number
  artworksCount: number
  createdAt: number
  bio: string
  avatar: Record<string, any>
}

const User = ({ user }: { user: any }) => {
  return (
    <>
      <Head title={user.name} />
      <div className={cn('app', styles.main)}>
        <img
          src={user.avatar.preview.url}
          alt="user-avatar"
          className={styles.avatar}
        />
        <p className={styles.name}>{user.name}</p>
        <p className={styles.bio}>{user.bio}</p>
        <p className={styles.created}>
          {dayjs.unix(user.createdAt).format('YYYY-MM-DD HH:mm:ss')}
        </p>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const tokens = [
    '6d159952bbd824e19354ddeabcffe94d',
    'e40e6a3e523be7c725d515ce0ade7347',
    '39357910365e61c38ec5f9b9590caa73'
  ]
  const paths = tokens.map(token => ({
    params: { user: token }
  }))
  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }: { params: any }) {
  const res = await request.get('/users/me', {
    headers: { authorization: `Butter ${params.user}` }
  })
  const {
    name,
    memberships = [],
    icons,
    favoritesCount,
    followingCount,
    createdAt,
    bio,
    artworksCount,
    avatar
  } = res.data
  const user: User = {
    name,
    memberships,
    icons,
    favoritesCount,
    followingCount,
    artworksCount,
    createdAt,
    bio,
    avatar
  }
  return {
    props: {
      user
    }
  }
}

export default User
