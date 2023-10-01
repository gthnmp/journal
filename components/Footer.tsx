import * as React from 'react'

import * as config from '@/lib/config'
import styles from './styles.module.css'

export const FooterImpl: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.contacts}`}>
        <a rel="noopener noreferrer" target="_blank" href={`https://www.linkedin.com/in/${config.linkedin}`}> LinkedIn </a>
        <a rel="noopener noreferrer" target="_blank" href={`https://www.github.com/${config.github}`}> Github </a>
        <a rel="noopener noreferrer" target="_blank" href={`https://www.twitter.com/${config.twitter}`}> Twitter </a>
      </div>
      <div className={styles.copyright}>Copyright 2023 <span>{config.author}</span></div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
