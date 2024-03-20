export type ChildrenProps = {
    children: React.ReactNode
}

export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export type Theme = 'light' | 'dark'