import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Online chat</h1>

      <pre>
        function Home() {
          React.createElement('main', {},
            React.createElement('h1', {}, 'Online chat')
            )
        }
      </pre>
    </main>
  );
}
