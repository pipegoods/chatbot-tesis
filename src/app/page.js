import Image from 'next/image'
import {Chat} from '../components/Chat'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 md:p-24">
      <Chat />

      <footer className="flex flex-col items-center justify-center mt-10 gap-2">
        <a
          href="https://www.linkedin.com/in/andres-vizcaino-salazar/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center font-bold text-blue-500"
        >
          👋 Andres Vizcaino
        </a>

        <a
          href="https://sdk.vercel.ai/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          Vercel AI SDK{' '}
          <span className="h-4 ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </main>
  )
}
