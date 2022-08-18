import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import prisma from '../../lib/prisma'
import Article from '../../types/Article'

interface Props {
  articles: Array<Article>
}

const Articles: NextPage<Props> = ({ articles }) => {
  return (
    <>
      <h1>Articles</h1>

      <ul>
        {articles.map(article => (
          <li key={String(article.id)}>
            <Link href={`/articles/${article.id}`}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const articles = await prisma.article.findMany()

  return { props: { articles } }
}

export default Articles
