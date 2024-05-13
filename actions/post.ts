import { getDBConnection } from "@/database/connection";
import { getSession } from "./session";
import { User } from "@/models/User";
import { Post } from "@/models/Post";

export async function getPosts(page = 1, pageSize = 10): Promise<{ posts: Post[], total: number, totalPage: number, pageSize: number, page: number } | undefined> {
    const session = await getSession();
    const posts: Post[] = []
    let total = 0;
    if (session.userId) {
        const connection = await getDBConnection();
        const data = await connection.getRepository(User).findOne({ where: { id: session.userId } });
        if (data) {
            const [result, count] = await connection.getRepository(Post).findAndCount({
                where: { author: data }, skip: (page - 1) * pageSize, take: pageSize, order: {
                    createdAt: "DESC"
                }
            });
            if (result) {
                posts.push(...result);
                total = count;
            }
        }
        return JSON.parse(JSON.stringify({
            posts,
            total,
            totalPage: Math.ceil(total / pageSize),
            pageSize,
            page,
        }));
    }
}

export async function getPost(id: number) {
    const session = await getSession();
    const connection = await getDBConnection();
    const post = await connection.getRepository(Post).findOne({ where: { id } });
    if (post) {
        return JSON.parse(JSON.stringify(post));
    }
}

export async function postPost(post: Post) {
    const session = await getSession();
    const connection = await getDBConnection();
    const user = await connection.getRepository(User).findOne({ where: { id: session.userId } });
    if (user) {
        post.author = user;
        const result = await connection.getRepository(Post).save(post);
        return JSON.parse(JSON.stringify(result));
    }
}