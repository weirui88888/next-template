import React from 'react'
import { InferGetStaticPropsType } from 'next'
import Head from '../components/Head'
import request from '../utils/request'
import styles from '../styles/me.module.scss'
import cn from 'classnames'
import dayjs from 'dayjs'

const Me = ({ user }: InferGetStaticPropsType<typeof getStaticProps>) => {
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

export async function getStaticProps() {
  const res = await request.get('/users/me')
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

export default Me
