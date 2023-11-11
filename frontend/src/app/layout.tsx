import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Providers} from "./providers";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cooking for Friends',
  description: '',
}

// TODO: Add SDKs for Firebase products being used
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyDws3fzbx3D_LFnDE_GO7mYjnzlkA8S8ec",
  authDomain: "cf-frontend.firebaseapp.com",
  projectId: "cf-frontend",
  storageBucket: "cf-frontend.appspot.com",
  messagingSenderId: "343536677651",
  appId: "1:343536677651:web:73efcc18893fc5a596a0e6",
  measurementId: "G-8CTRN50YTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app).isSupported() ? getAnalytics(app) : undefined;

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='light'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
