import { TitleSection } from '@/components/landing-page/title-section'
import React from 'react'
import "../globals.css"

export const HomePageLayout = () => {
  return (
    <section>
        <div className = 'overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm: flex-col gap-4 md:justify-center md:items-center'></div>
        <TitleSection pill='✨ Your workspace, Perfected' title='All-In-One Collaboration and Productivity Platform' subheading='Hello'/>
        <p className='test text-4xl'>testing testing</p>
    </section>
  )
}

export default HomePageLayout;
