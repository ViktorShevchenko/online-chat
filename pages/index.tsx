import Demo from '@/components/views/Demo/Demo';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >

      <Demo>Hello Component | Our first component has been rendered</Demo>

      {/* <h1>Online chat</h1> */}

      {/* <pre>
        function Home() {
          React.createElement('main', {},
            React.createElement('h1', {}, 'Online chat')
            )
        }
      </pre> */}
    </main>
  );
}
