import Layout from '../components/layout'
import React from 'react'

const posts = [
  { slug: 'indoor-cameras', title: 'Indoor Cameras' },
  { slug: 'outdoor-cameras', title: 'Outdoor Cameras' }
]

export default class extends React.Component {
  static async getInitialProps ({ query, res }) {
    const post = posts.find(post => post.slug === query.slug)

    if (!post && res) {
      res.statusCode = 404
    }

    return { post }
  }

  render () {
    const { post } = this.props

    if (!post) return <Layout><h1>Post not found</h1></Layout>

    return <Layout><h1>{post.title}</h1></Layout>
  }
}
