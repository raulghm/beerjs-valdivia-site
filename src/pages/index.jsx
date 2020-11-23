import React, { useEffect } from 'react'
import Head from 'next/head'

import { Socialbar, Hero, Attend, Card, Icon } from '../components'
import data from '../../data.json'

export default function Home() {
  useEffect(() => {
    const slide = {
      distance: '30px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'top',
      interval: 40,
      delay: 1300,
    }
    const ScrollReveal = require('scrollreveal').default
    ScrollReveal().reveal('.main', { ...slide })

    const nodeList = document.querySelectorAll('.reveal')
    ScrollReveal().reveal(nodeList, { ...slide, delay: 300 })
  }, [])

  return (
    <div>
      <Head>
        <title>
          BeerJS Valdivia . {data.day} {data.edition} {data.year} . {data.hour} hrs.
        </title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Encuentro de cerveza y código" />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Code+Pro|Source+Sans+Pro:400,700,900"
          rel="stylesheet"
        />

        <meta property="og:title" content="BeerJS Valdivia, Chile" />
        <meta property="og:description" content="Encuentro de cerveza y código" />
        <meta property="og:image" content="/images/img-beerjs-valdivia.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="BeerJSValdivia" />
        <meta name="twitter:title" content="BeerJS Valdivia, Chile" />
        <meta name="twitter:description" content="Encuentro de cerveza y código" />
        <meta name="twitter:image" content="/images/img-beerjs-valdivia.jpg" />
        <meta name="twitter:image:alt" content="BeerJS Valdivia, Chile" />

        <meta name="theme-color" content="#1a202d" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="icon" type="image/png" sizes="196x196" href="/images/icons/favicon-196.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-icon-180.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/images/icons/apple-icon-167.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/icons/apple-icon-152.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/images/icons/apple-icon-120.png" />

        <style
          dangerouslySetInnerHTML={{
            __html:
              'html.init body { visibility: visible; } html.init-1 body { opacity: 1; } body { -webkit-transition: opacity 0.4s ease; transition: opacity 0.4s ease; visibility: hidden; opacity: 0; }',
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "var elRoot = document.querySelector('html').classList; setTimeout(function() { elRoot.add('init') }, 0); setTimeout(function() { elRoot.add('init-1')}, 1000);",
          }}
        />
      </Head>

      <Socialbar />
      <Attend />
      <Hero />

      <main className="main">
        <div>
          {/* Speakers */}
          <div className="mb-6 label">Charlas edición {data.edition}</div>

          {data.speakers[0] && (
            <div className="grid gap-6 sm:grid-cols-2 reveal">
              <div className="md:mt-4">
                <div className="mb-2 text-lg text-primary">{data.speakers[0].talk}</div>
                <div className="break-words">{data.speakers[0]['talk-details']}</div>
              </div>

              <div className="sm:order-first">
                <Card
                  avatar={data.speakers[0].avatar}
                  name={data.speakers[0].name}
                  position={data.speakers[0].position}
                  company={data.speakers[0].company}
                  web={data.speakers[0].rrss.web}
                  twitter={data.speakers[0].rrss.twitter}
                  github={data.speakers[0].rrss.github}
                  linkedin={data.speakers[0].rrss.linkedin}
                  instagram={data.speakers[0].rrss.instagram}
                />
              </div>
            </div>
          )}

          {data.speakers[1] && (
            <div className="grid gap-6 mt-6 sm:grid-cols-2 reveal">
              <div className="mt-4 md:text-right">
                <div className="mb-2 text-lg text-primary">{data.speakers[1].talk}</div>
                <div className="break-words">{data.speakers[1]['talk-details']}</div>
              </div>

              <div>
                <Card
                  avatar={data.speakers[1].avatar}
                  name={data.speakers[1].name}
                  position={data.speakers[1].position}
                  company={data.speakers[1].company}
                  web={data.speakers[1].rrss.web}
                  twitter={data.speakers[1].rrss.twitter}
                  github={data.speakers[1].rrss.github}
                  linkedin={data.speakers[1].rrss.linkedin}
                  instagram={data.speakers[1].rrss.instagram}
                />
              </div>
            </div>
          )}
        </div>

        {/* CFP */}
        <div className="grid gap-6 mt-40 reveal">
          <div className="p-8 rounded-xl bg-secondary">
            <div className="label">CFP: Postula una charla</div>
            <div className="mt-1 mb-2 title">🙊 Sé el próximo speaker</div>
            <div>
              ¿Quieres compartir algún conocimiento o experiencia trabajando en algún desarrollo
              nuevo o alguna habilidad no esencialmente técnica? <br />
              Siempre tenemos espacio para recibir nuevas charlas. <br />
              <a
                className="inline-block mt-1 text-primary"
                target="_blank"
                href="https://github.com/beerjs/valdivia/issues"
                rel="noreferrer">
                👉 Ingresa tu propuesta
              </a>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="grid gap-6 mt-40 md:grid-cols-2 reveal">
          <div className="p-6 border-2 lg:p-8 rounded-xl bg-background border-primary">
            <div className="label">Sobre</div>
            <div className="mt-1 mb-2 title">BeerJS Valdivia</div>
            <div>
              Desde una hermosa ciudad al sur de Chile, entre lúpulos y código nace BeerJS Valdivia,
              con la idea de crear comunidad alrededor del{' '}
              <span className="line-through">javascript</span> software. Inicialmente desde el
              espacio Nube Cowork en forma presencial, ahora nos reunimos a la distancia debido a la
              situación sanitaria. <br />
              <div className="mt-2 text-light">
                🍺 No es requerimiento alguno consumir alcohol para participar.
              </div>
            </div>
          </div>

          <div className="grid content-between">
            <div className="flex items-center">
              <div>
                <div className="flex flex-row items-center justify-center w-24 h-24 gap-2 mb-4 md:mb-0 bg-secondary rounded-xl">
                  <Icon name="beer" size={60} />
                </div>
              </div>
              <div className="ml-4">
                <div className="label">Compartir</div>
                <div>Una buena conversación y una rica cerveza ¿por qué no?</div>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <div className="flex flex-row items-center justify-center w-24 h-24 gap-2 mb-4 md:mb-0 bg-secondary rounded-xl">
                  <Icon name="display" size={50} />
                </div>
              </div>
              <div className="ml-4">
                <div className="label">Charlas</div>
                <div>Presentaciones de 25 minutos cada una, sobre diferentes temáticas</div>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <div className="flex flex-row items-center justify-center w-24 h-24 gap-2 mb-4 md:mb-0 bg-secondary rounded-xl">
                  <Icon name="quote" size={50} />
                </div>
              </div>
              <div className="ml-4">
                <div className="label">Comunidad</div>
                <div>Todas y todos son bienvenidos, la comunidad la creamos juntos</div>
              </div>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="mt-40 text-center reveal">
          <div className="label text-dark">Nos apoyan cada mes</div>
          <div className="flex flex-row justify-center mt-10">
            <a
              href="https://devschile.cl"
              target="_blank"
              rel="noreferrer"
              className="mx-2 lg:mx-4">
              <img src="/images/devschile.png" alt="devschile" className="h-16" />
            </a>
            <a
              href="https://nubecowork.biz"
              target="_blank"
              rel="noreferrer"
              className="mx-2 lg:mx-4">
              <img src="/images/nube-cowork.png" alt="nube-cowork" className="h-16" />
            </a>
            <a
              href="https://4geeksacademy.co/us/location/santiago-chile"
              target="_blank"
              rel="noreferrer"
              className="mx-2 lg:mx-4">
              <img src="/images/4geekcamp.png" alt="4geekcamp" className="h-16" />
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-40 reveal">
        {/* Info */}
        <div className="grid gap-2 p-6 mb-2 lg:p-8 md:grid-cols-2 bg-secondary rounded-xl">
          <div>
            <div className="flex">
              <div className="hidden md:block">
                <Icon name="github" size={36} />
              </div>
              <div className="md:ml-3">
                <div className="label">Contenido</div>
                <span className="text-light">Revisa las charlas anteriores</span>
              </div>
            </div>
            <div className="mt-2">
              <a
                href="https://github.com/beerjs/valdivia/issues"
                target="_blank"
                className="hover:text-light"
                rel="noreferrer">
                En nuestro repositorio mantenemos todas las versiones anteriores con el contenido de
                cada charla.
              </a>
            </div>
          </div>

          <div className="mt-4 md:mt-0">
            <div className="flex">
              <div className="hidden md:block">
                <Icon name="plane" size={36} />
              </div>
              <div className="md:ml-3">
                <div className="label">Suscríbete</div>
                <span className="text-light">
                  Recibe actualizaciones de los siguientes eventos.
                </span>
              </div>
            </div>
            <div className="mt-2">
              <div id="mc_embed_signup">
                <form
                  action="https://beerjs.us17.list-manage.com/subscribe/post?u=9b46314bf820d031baa115be0&amp;id=b4e86ad395"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                  target="_blank"
                  rel="noreferrer"
                  noValidate>
                  <div id="mc_embed_signup_scroll">
                    <div className="mc-field-group">
                      <div className="relative">
                        <label for="mce-EMAIL" style={{ position: 'absolute', left: '-5000px' }}>
                          Email
                        </label>
                        <input
                          className="w-full h-12 p-4 pr-16 rounded-lg outline-none bg-background required email"
                          placeholder="tu@email.com"
                          type="email"
                          name="EMAIL"
                          id="mce-EMAIL"
                        />
                        <button className="absolute top-0 right-0 flex items-center justify-center w-12 h-12 rounded-lg outline-none bg-primary">
                          <Icon name="arrow-right" color="#1A202D" />
                        </button>
                      </div>
                    </div>
                    <div id="mce-responses" className="clear">
                      <div
                        className="response"
                        id="mce-error-response"
                        style={{ display: 'none' }}
                      />
                      <div
                        className="response"
                        id="mce-success-response"
                        style={{ display: 'none' }}
                      />
                    </div>
                    <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                      <input
                        type="text"
                        name="b_9b46314bf820d031baa115be0_b4e86ad395"
                        tabIndex="-1"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="justify-between mt-6 mb-10 text-center md:flex">
          <div className="flex items-center content-center justify-center">
            <div className="text-xs label text-dark">Síguenos</div>
            <div className="flex items-center">
              <a
                href="https://twitter.com/BeerJSValdivia"
                target="_blank"
                rel="noreferrer"
                className="mx-2 opacity-75 hover:opacity-100"
                aria-label="Enlace a Twitter BeerJS Valdivia">
                <Icon name="twitter" />
              </a>
              <a
                href="https://www.instagram.com/beerjsvaldivia"
                target="_blank"
                rel="noreferrer"
                className="mx-2 opacity-75 hover:opacity-100"
                aria-label="Enlace a Instagram BeerJS Valdivia">
                <Icon name="instagram" />
              </a>
              <a
                href="https://devschile.cl"
                target="_blank"
                rel="noreferrer"
                className="mx-2 opacity-75 hover:opacity-100"
                aria-label="Enlace a Slack DevsChile">
                <Icon name="slack" />
              </a>
            </div>
            <div className="mx-2">|</div>
            <a
              href="https://es.confcodeofconduct.com/"
              target="_blank"
              rel="noreferrer"
              className="text-xs label text-dark">
              Código de conducta
            </a>
          </div>

          <div className="mt-4 opacity-75 md:mt-0">
            <a
              href="https://github.com/raulghm/beerjs-valdivia-site"
              target="_blank"
              rel="noreferrer"
              className="text-xs label text-dark">
              code with 💛 by @raulgm
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
