export const Screen = {
    Home: "home",
    About: "about",
    iOS: "ios",
    Android: "android",
    React: "react",
} as const

export type Screen = typeof Screen[keyof typeof Screen]
