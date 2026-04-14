import { QueryClientProvider } from "@tanstack/react-query"
import { useRouteContext } from "@tanstack/react-router"

type Props = {
    children: React.ReactNode
}

export  function MountQuery({children}: Props) {

    const {queryClient} = useRouteContext({from: "__root__"})

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}