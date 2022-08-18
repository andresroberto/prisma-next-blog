import { GetServerSideProps, NextPage } from 'next'
import prisma from '../../lib/prisma'
import Article from '../../types/Article'

interface Props {
  article: Article
}

const Article: NextPage<Props> = ({ article }) => {
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = Number(context.params?.id)

  const article = await prisma.article.findUnique({ where: { id } })

  return { props: { article } }
}

export default Article
