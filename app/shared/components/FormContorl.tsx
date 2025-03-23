import { FormControl, FormHelperText } from "@mui/joy"
import { TiInfoOutline } from "react-icons/ti"

interface FormContorlProps
  extends Omit<React.ComponentProps<typeof FormControl>, "color">,
    Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  children: React.ReactNode
  errorMessage?: string
}

export function FormControlP({
  children,
  errorMessage,
  ...props
}: FormContorlProps) {
  return (
    <FormControl error={Boolean(errorMessage)} {...props}>
      {children}
      {errorMessage && (
        <FormHelperText>
          <TiInfoOutline color="red" />
          {errorMessage}
        </FormHelperText>
      )}
    </FormControl>
  )
}
