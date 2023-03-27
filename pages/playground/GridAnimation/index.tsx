import styles from './index.module.css'
import { clsx } from 'clsx'
import { useState } from 'react'

export const GridDemo = () => {
  const [open, setOpen] = useState(true)
  return (
    <div className="flex">
      <button
        onClick={() => {
          setOpen(!open)
        }}
        className={styles.btn}
      >
        Open me
      </button>
      <div
        className={clsx({
          [styles.grid]: true,
          [styles.open]: open
        })}
      >
        <div className={styles['grid-child']}>
          <div>the first row</div>
          <div>the second row</div>
          <div>the third row</div>
        </div>
      </div>
    </div>
  )
}
