

export interface IPost{
    _id?: string,
    title: string,
    description: string,
    images: string[],
    tags: string[],
    slug: string,
    author: string,
    cover: string

    createdAt: string,
    updatedAt: string
}
