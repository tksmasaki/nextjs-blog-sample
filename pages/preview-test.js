import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Head from 'next/head'

export default function PreviewTest() {
  return (
    <Layout>
      <Head>
        <title>preview test</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1>Preview test page</h1>
      </section>
    </Layout>
  )
}
