import * as React from "react"
import Card from "@mui/joy/Card"
import CardContent from "@mui/joy/CardContent"
import Skeleton from "@mui/joy/Skeleton"

export default function TableSkeleton() {
  return (
    <Card
      variant="outlined"
      sx={{ width: "max(400px, 60%)", borderRadius: 0, "--Card-radius": 0 }}
    >
      <Skeleton variant="rectangular" height={200} />
      <CardContent sx={{ gap: 0.5, mt: 1 }}>
        <Skeleton level="body-xs" variant="text" width="99%" />
        <Skeleton level="body-xs" variant="text" width="99%" />
        <Skeleton level="body-xs" variant="text" width="99%" />
        <Skeleton level="body-xs" variant="text" width="99%" />
        <Skeleton level="body-xs" variant="text" width="99%" />
        <Skeleton level="body-xs" variant="text" width="99%" />
        <Skeleton level="body-xs" variant="text" width="99%" />
        <Skeleton level="body-xs" variant="text" width="99%" />
        <Skeleton level="body-xs" variant="text" width="99%" />
        <Skeleton level="body-xs" variant="text" width="99%" />
        <Skeleton level="body-xs" variant="text" width="99%" />
      </CardContent>
    </Card>
  )
}
