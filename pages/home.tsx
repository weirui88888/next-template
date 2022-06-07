import { InferGetStaticPropsType } from 'next'
import ButterHead from '../components/Head'
import styles from '../styles/home.module.scss'
type Post = {
  author: string
  book: string
}

export const getStaticProps = async () => {
  const posts: Post[] = [
    {
      author: '123',
      book: 'javascript高级程序设计'
    },
    {
      author: 'ru2342by',
      book: 'node实操记录'
    }
  ]

  return {
    props: {
      posts
    }
  }
}

function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <ButterHead title={'学习next-js'} themeColor="#fff000">
        <meta name="description" content="支持传入自定义Meta" />
      </ButterHead>
      <div>
        <ul className={styles['book-container']}>
          {posts.map(post => {
            return (
              <li key={post.author} className={styles['book-list']}>
                author:{post.author},book:{post.book}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Home
