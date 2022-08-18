import { GetServerSideProps, NextPage } from 'next'
import prisma from '../../lib/prisma'

interface Props {
  articles: Array<{
    id: Number
    title: String
    body: String
  }>
}

const Articles: NextPage<Props> = (props) => {
  return (
    <>
      <h1>Articles</h1>

      <ul>
        {props.articles.map(article => {
          return (
            <li key={String(article.id)}>
              {article.title}
            </li>
          );
        })}
      </ul>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const articles = await prisma.article.findMany()

  return { props: { articles } }
}

export default Articles
