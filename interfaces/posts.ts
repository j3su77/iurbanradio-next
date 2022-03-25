export interface IPost{
    _id: string,
    title: string,
    description: string,
    images: string[],
    tags: string[],
    slug: string,

    createAt: string,
    updatedAt: string
}
