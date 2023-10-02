import { Navbar } from "@/components/navbar"
import { WidthContainer } from "@/components/ui/width-container"

const Layout = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <WidthContainer>
        <Navbar />
        {children}
    </WidthContainer>
  )
}

export default Layout;