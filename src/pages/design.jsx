import React from 'react'
import Head from 'next/head'

import { Layout, Ribbon, Icon, Card, Input } from '../components'

const speaker = {
  avatar: '/images/franco.jpg',
  name: 'Franco Moya',
  position: 'UX Designer',
  company: 'Company',
  rrss: {
    web: 'https://valdivia.beerjs.cl',
    twitter: 'BeerJSValdivia',
    github: 'beerjs',
    linkedin: 'beerjs',
    instagram: 'beerjsvaldivia'
  }
}

export default function DesignSytem () {
  return (
    <Layout>
      <Head>
        <title>BeerJS Valdivia - Design system</title>
        <link
          href='https://fonts.googleapis.com/css?family=Source+Code+Pro|Source+Sans+Pro:400,700,900'
          rel='stylesheet'
        />
      </Head>

      <main className='py-10'>
        <div className='mb-2 label'>Colors</div>
        <div className='flex flex-row ml-10'>
          <div className='pb-4 mr-4 text-center'>
            <small>primary</small>
            <div className='w-20 h-20 p-2 rounded-lg bg-primary' />
          </div>
          <div className='pb-4 mr-4 text-center'>
            <small>secondary</small>
            <div className='w-20 h-20 p-2 rounded-lg bg-secondary' />
          </div>
          <div className='pb-4 mr-4 text-center'>
            <small>background</small>
            <div className='w-20 h-20 p-2 rounded-lg bg-background' />
          </div>
          <div className='pb-4 mr-4 text-center'>
            <small>dark</small>
            <div className='w-20 h-20 p-2 rounded-lg bg-dark' />
          </div>
          <div className='pb-4 mr-4 text-center'>
            <small>light</small>
            <div className='w-20 h-20 p-2 rounded-lg bg-light' />
          </div>
        </div>

        <div className='mt-6 mb-2 label'>Texts</div>

        <div className='ml-10'>
          <div className='pb-4'>
            Heading
            <div className='heading'>BeerJS - Encuentro de cerveza y código</div>
          </div>

          <div className='pb-4'>
            Title
            <div className='title'>BeerJS - Encuentro de cerveza y código</div>
          </div>

          <div className='pb-4'>
            Label
            <div className='label'>BeerJS - Encuentro de cerveza y código</div>
          </div>

          <div className='pb-4'>
            Body
            <p>
              El diseño no se trata de talento, el diseño es una habilidad, y como cualquier otra
              habilidad, se puede aprender.
            </p>
          </div>
        </div>

        <div className='mt-6 mb-2 label'>Ribbon</div>
        <div className='ml-10'>
          <Ribbon month='Agosto' />
        </div>

        <div className='mt-6 mb-2 label'>Icons</div>
        <div className='flex flex-row gap-2 ml-10'>
          <Icon name='heart' />
          <Icon name='twitter' />
          <Icon name='linkedin' />
          <Icon name='beer' />
          <Icon name='display' />
          <Icon name='quote' />
        </div>

        <div className='mt-6 mb-2 label'>Icons + wrapper</div>
        <div className='flex flex-row items-center justify-center w-24 h-24 gap-2 mb-2 ml-10 bg-secondary rounded-xl'>
          <Icon name='beer' size={60} />
        </div>
        <div className='flex flex-row items-center justify-center w-24 h-24 gap-2 mb-2 ml-10 bg-secondary rounded-xl'>
          <Icon name='display' size={50} />
        </div>
        <div className='flex flex-row items-center justify-center w-24 h-24 gap-2 mb-2 ml-10 bg-secondary rounded-xl'>
          <Icon name='quote' size={50} />
        </div>

        <div className='mt-6 mb-2 label'>Box content</div>

        <div className='w-2/3 ml-10'>
          <div className='px-6 py-8 mb-6 rounded-xl bg-secondary border-primary'>
            <div className='label'>Sobre</div>
            <div className='mt-1 mb-2 title'>BeerJS Valdivia</div>
            <p>
              El diseño no se trata de talento, el diseño es una habilidad, y como cualquier otra
              habilidad, se puede aprender.
            </p>
            <p className='mt-4'>
              <div className='button'>Ver más</div>
            </p>
          </div>

          <div className='px-6 py-8 border-2 rounded-xl bg-background border-primary'>
            <div className='label'>Sobre</div>
            <div className='mt-1 mb-2 title'>BeerJS Valdivia</div>
            <p>
              El diseño no se trata de talento, el diseño es una habilidad, y como cualquier otra
              habilidad, se puede aprender.
            </p>
          </div>
        </div>

        <div className='mt-6 mb-2 label'>Card</div>

        <div className='w-2/3 ml-10'>
          <Card
            avatar={speaker.avatar}
            name={speaker.name}
            position={speaker.position}
            company={speaker.company}
            web={speaker.rrss.web}
            twitter={speaker.rrss.twitter}
            github={speaker.rrss.github}
            linkedin={speaker.rrss.linkedin}
            instagram={speaker.rrss.instagram}
          />
        </div>

        <div className='mt-6 mb-2 label'>Input</div>

        <div className='w-2/3 ml-10'>
          <div className='p-4 rounded-lg bg-secondary'>
            <Input placeholder='tu@email.com' />
          </div>
        </div>
      </main>
    </Layout>
  )
}
