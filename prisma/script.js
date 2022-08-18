// import { PrismaClient } from '@prisma/client'

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

async function main() {
  // const article = await prisma.article.create({
  //   data: {
  //     title: 'Hello Prisma',
  //     body: 'I am on Prisma!'
  //   }
  // })
  // console.log(article)

  // const articleOne = await prisma.article.findUnique({
  //   where: {
  //     id: 1
  //   }
  // })
  // console.log(articleOne)

  // const allArticles = await prisma.article.findMany()
  // console.log(allArticles)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })