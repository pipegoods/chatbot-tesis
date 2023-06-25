import Image from "next/image";
import { Chat } from "../components/Chat";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 md:p-24">
      <Chat />

      <footer className="flex flex-col items-center justify-center mt-10 gap-2">
        <div className="flex gap-2">
        <a
          href="https://www.linkedin.com/in/andres-vizcaino-salazar/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center font-bold text-blue-500"
        >
          👋 Andres Vizcaino
        </a>

        <a
          href="https://github.com/pipegoods/chatbot-tesis"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <svg
            ariaHidden="true"
            className="h-6 w-6 fill-slate-900"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        </div>

        <a
          href="https://sdk.vercel.ai/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          Vercel AI SDK{" "}
          <span className="h-4 ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </main>
  );
}
