import React from 'react'
import styles from '../styles/demo.module.scss'
import cn from 'classnames'
function Home() {
  return (
    <div className={styles.div}>
      <span className={styles.span}>hello</span>
      <p
        className={cn({
          [styles['p-red']]: true,
          btn: true
        })}
      >
        你好
      </p>
    </div>
  )
}

export default Home
