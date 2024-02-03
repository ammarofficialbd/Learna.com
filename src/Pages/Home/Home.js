import React from 'react'
import Hero from '../../Components/Hero/Hero'
import HotTopics from '../../Components/Hotsec/HotTopics'
import Editor from '../../Components/Editor/Editor'
import RecentPost from '../../Components/RecentPost/RecentPost'

function Home() {
  return (
    <main>
        <Hero/>
        <HotTopics/>
        <Editor/>
        <RecentPost/>
    </main>
  )
}

export default Home