import { posts, projects } from "./data"
// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// async function main() {
//     // Create a new user
//     const user = await prisma.user.create({
//         data: {
//             email: 'alice@example.com',
//             name: 'Alice',
//         },
//     })
//     console.log(user)

//     // Get all users
//     const allUsers = await prisma.user.findMany()
//     console.log(allUsers)
// }

// main()
//     .catch((e) => {
//         throw e
//     })
//     .finally(async () => {
//         await prisma.$disconnect()
//     })


export async function fetchRecentPosts() {
    return posts.slice(0, 2);
}

export async function fetchRecentProjects() {
    return projects.slice(0, 3);
}
