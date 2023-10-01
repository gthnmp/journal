import * as React from 'react'
import Link from 'next/link'

import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'

import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './styles.module.css'

export const HeaderImpl: React.FC = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const onToggleDarkMode = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
          <Link href="/" className={styles.copyright}>Home</Link>

          <div className={styles.settings}>
            {hasMounted && (
              <a
                className={styles.toggleDarkMode}
                href='#'
                role='button'
                onClick={onToggleDarkMode}
                title='Toggle dark mode'
              >
                {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
              </a>
            )}
        </div>
      </header>
    </div>
  )
}

export const Header = React.memo(HeaderImpl)
