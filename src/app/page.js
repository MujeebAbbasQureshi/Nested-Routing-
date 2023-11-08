'use client'
import Link from 'next/link'
import styles from './page.module.css'
import { useState } from 'react'

export default function Home() {
  return (
<>
<h1>Hello World</h1>
<br/>
<Link href="/login">Go to Login page</Link>
<br/>
<br/>
<Link href="/login/logincollege">Go to Logincollege page</Link>
<br/>
<br/>
<Link href="/loginstudent">Go to LoginStudent page</Link>
<br/>
<br/>
<Link href="/about">Go to About page</Link>
<br/>
<br/>
<Link href="/about/aboutcollege">Go to AboutCollege page</Link>
<br/>
<br/>
<Link href="/aboutstudent">Go to AboutStudent page</Link>
<br/>
<br/>
</>
  )
}
  
  

