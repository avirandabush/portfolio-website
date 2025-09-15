import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { db } from "../utils/firebase"
import type { Project } from "../types/Project"

export const fetchProjects = async (collectionName: string): Promise<Project[]> => {
    try {
        const projectsRef = collection(db, collectionName)
        const q = query(projectsRef, orderBy("createdAt", "desc"))
        const snapshot = await getDocs(q)

        return snapshot.docs.map((doc) => {
            const data = doc.data()

            return {
                id: doc.id,
                ...data,
                createdAt: data.createdAt?.toDate?.() ?? new Date(),
                tags: Array.isArray(data.tags)
                    ? data.tags
                    : typeof data.tags === "string"
                        ? data.tags.split(",").map((t: string) => t.trim())
                        : [],
            } as Project
        })
    } catch (err) {
        console.error(`Error fetching projects from "${collectionName}":`, err)
        return []
    }
}
