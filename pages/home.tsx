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
      author: 'jack',
      book: 'javascript高级程序设计'
    },
    {
      author: 'ruby',
      book: 'node实操记录'
    }
  ]

  return {
    props: {
      posts
    }
  }
}

function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <ButterHead title={'学习next-js'} themeColor="#fff000" />
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

export default Blog
