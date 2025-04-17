import { Box } from "@kuma-ui/core"
import mardownContent from "../../README.md?raw"

export const MarkdownView = () => {
  return <Box className="markdown-view">
  {mardownContent}
  </Box>
}
