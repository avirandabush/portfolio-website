
export function downloadCv(): boolean {
  try {
    const link = document.createElement("a")
    link.href = "cv.pdf"
    link.download = "Aviran_Dabush_iOS_Developer_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    return true
  } catch (error) {
    console.error("Failed to download CV:", error)
    return false
  }
}
