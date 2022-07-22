import Head from 'next/head'
import { DropMenu } from '../Home_Page/Drop_menu';

export default function Home() {

  return (
    <div>
            <Head>
              <title> My Quiz App</title>
              <meta name="description" content="Generated by create next app" />
            </Head>

      
            <div>
              <DropMenu/>
            </div>
      
    </div>
  )
}
