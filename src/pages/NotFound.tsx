import { Link } from 'react-router-dom'
import { PageWrapper } from '@/components/PageWrapper'
import { Heart } from 'lucide-react'

export default function NotFound() {
  return (
    <PageWrapper className="flex flex-col items-center justify-center">
      <Heart className="w-20 h-20 text-primary mb-6" />
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-2xl text-muted-foreground mb-8">Page not found</p>
      <Link to="/" className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold">
        Back to Home
      </Link>
    </PageWrapper>
  )
}
