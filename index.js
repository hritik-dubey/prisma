const { PrismaClient } = require('@prisma/client')

// const prisma = new PrismaClient({ log, LogDefinition })
const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'], // Replace with the desired log levels
});

async function main() {
    await prisma.user.create({
        data: {
            name: 'Rich',
            email: 'hello@prisma.com',
            posts: {
                create: {
                    title: 'My first post',
                    body: 'Lots of really interesting stuff',
                    slug: 'my-first-post',
                },
            },
        },
    })

    const allUsers = await prisma.user.findMany({
        include: {
            posts: true,
        },
    })
    console.dir(allUsers, { depth: null })
}
async function getUser() {
    let user = await prisma.user.findMany();
    console.log({"user is":user});
}

main()
getUser()