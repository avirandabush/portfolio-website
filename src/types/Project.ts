export type systemType = "ios" | "android" | "desktop"

export interface Project {
    id: string
    name: string
    description: string
    videoUrl: string
    codeUrl: string
    liveUrl?: string
    createdAt: Date
    tags: string[]
    type: systemType
}
