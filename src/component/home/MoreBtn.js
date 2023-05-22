import React from 'react'
import { Container} from 'react-bootstrap'

import styles from './Home.module.css'

const MoreBtn = () => {


  return (
    <Container>
       
        <div className='d-flex mx-auto'>
        <button className={styles.button}><span>Load</span></button>
        </div>
        
    </Container>
  )
}

export default MoreBtn