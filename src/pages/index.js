import Head from 'next/head'
import { Socialbar, Hero, Attend, Card, Icon } from '../components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>BeerJS Valdivia . 29 octubre 2020 . 19 horas</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Encuentro de cerveza y código" />
        <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro|Source+Sans+Pro:400,700,900" rel="stylesheet"></link>

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
      </Head>

      <Socialbar />
      <Attend />

      <main>
        <Hero />

        <div>
          {/* Speakers */}
          <div className="mb-6 label">Charlas edición octubre</div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="md:mt-4">
              <div className="mb-2 text-lg text-primary">
                Los efectos secundarios donde corresponden con RxJS en React
              </div>
              <div>
                Cómo podemos utilizar RxJS para modelar las interacciones y efectos
                secundarios en nuestras aplicaciones de React.
              </div>
            </div>

            <div className="md:order-first">
              <Card
                avatar="https://pbs.twimg.com/profile_images/1262890943222611968/kwWq7pGO.jpg"
                name="Osman Cea"
                job="Software Architect en Cornershop"
                web="https://daslaf.dev"
                twitter="https://twitter.com/daslaf"
              />
            </div>
          </div>

          <div className="grid gap-6 mt-6 md:grid-cols-2">
            <div className="mt-4 md:text-right">
              <div className="mb-2 text-lg text-primary">
                Clojure 101 para JavaScripters
              </div>
              <div>
                Clojure es un lenguaje funcional y tremendamente flexible que ha ganado
                bastante tracción tanto para el desarrollo backend como en el frontend,
                y con grandes casos de exito como Wallmart y Attlassian. Aprenderlo
                puede ser intimidante en un principio, pero tal como su creador comenta,
                "es un lenguaje simple con alto potencial".
              </div>
            </div>

            <div>
              <Card
                avatar="https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/465403/604760ab-9769-4d8d-8641-f67ffbe2af3f.jpeg"
                name="Matías Hernández A."
                job="Senior Software Engineer en Moduscreate.com e instructor en egghead.io"
                web="https://matiashernandez.dev"
                twitter="https://twitter.com/matiasfha"
                linkedin="https://linkedin.com/in/mhernand"

              />
            </div>
          </div>
        </div>

        {/* About */}
        <div className="grid gap-6 mt-40 md:grid-cols-2">
          <div className="p-6 border-2 rounded-xl bg-background border-primary">
            <div className="label">Sobre</div>
            <div className="mt-1 mb-2 title">BeerJS Valdivia</div>
            <div>
              Desde una hermosa ciudad al sur de Chile, entre lúpulos y código nace
              BeerJS Valdivia, con la idea de crear comunidad alrededor del <span className="line-through">javascript</span> software.
              Inicialmente desde el espacio Nube Cowork en forma presencial, ahora nos reunimos a la distanca debido a la
              situación sanitaria. <br />
              <div className="mt-2 text-light">🍺 No es requerimiento alguno consumir alcohol para participar</div>
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
                <div className="label">
                  Compartir
                </div>
                <div>
                  Una buena conversación y una rica cerveza ¿por qué no?
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <div className="flex flex-row items-center justify-center w-24 h-24 gap-2 mb-4 md:mb-0 bg-secondary rounded-xl">
                  <Icon name="display" size={50} />
                </div>
              </div>
              <div className="ml-4">
                <div className="label">
                  Charlas
                </div>
                <div>
                  Presentaciones de 25 minutos cada una, sobre diferentes tematicas
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <div className="flex flex-row items-center justify-center w-24 h-24 gap-2 mb-4 md:mb-0 bg-secondary rounded-xl">
                  <Icon name="quote" size={50} />
                </div>
              </div>
              <div className="ml-4">
                <div className="label">
                  Comunidad
                </div>
                <div>
                  Todas y todos son bienvenidos, la comunidad la creamos juntos
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="mt-40 text-center">
          <div className="label text-dark">Nos apoyan cada mes</div>
          <div className="flex flex-row justify-center mt-10">
            <a href="https://devschile.cl" target="_blank" className="mx-3">
              <img src="/images/devschile.png" alt="devschile" className="h-16" />
            </a>
            <a href="https://nubecowork.biz" target="_blank" className="mx-3">
              <img src="/images/nube-cowork.png" alt="nube-cowork" className="h-16" />
            </a>
            <a href="https://www.4geeksacademy.co/es/inicio/santiago-chile" target="_blank" className="mx-3">
              <img src="/images/4geekcamp.png" alt="4geekcamp" className="h-16" />
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-40">

        {/* Info */}
        <div className="grid gap-2 p-8 mb-2 md:grid-cols-2 bg-secondary rounded-xl">
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
              <a href="https://github.com/beerjs/valdivia/issues" target="_blank">
                En nuestro repositorio mantenemos
                todas las versiones anteriores con
                el contenido de cada charla
                <Icon name="arrow-right" size={10} style={{ display: 'inline-block', marginLeft: 6 }} />
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
                <span className="text-light">Recibe actualizaciones de los siguientes eventos</span>
              </div>
            </div>
            <div className="mt-2">
              <div id="mc_embed_signup">
                <form action="https://beerjs.us17.list-manage.com/subscribe/post?u=9b46314bf820d031baa115be0&amp;id=b4e86ad395" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                  <div id="mc_embed_signup_scroll">
                    <div class="mc-field-group">
                      <div className="relative">
                        <input className="w-full h-12 p-4 pr-16 rounded-lg outline-none bg-background required email" placeholder="tu@email.com" type="email" name="EMAIL" id="mce-EMAIL" />
                        <button className="absolute top-0 right-0 flex items-center justify-center w-12 h-12 rounded-lg outline-none bg-primary">
                          <Icon name="arrow-right" color="#1A202D" />
                        </button>
                      </div>
                    </div>
                    <div id="mce-responses" class="clear">
                      <div class="response" id="mce-error-response" style={{ display: 'none' }}></div>
                      <div class="response" id="mce-success-response" style={{ display: 'none' }}></div>
                    </div>
                    <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_9b46314bf820d031baa115be0_b4e86ad395" tabindex="-1" value="" /></div>
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
              <a href="https://twitter.com/BeerJSValdivia" target="_blank" className="mx-2">
                <Icon name="twitter" />
              </a>
              <a href="https://www.instagram.com/beerjsvaldivia" target="_blank" className="mx-2">
                <Icon name="instagram" />
              </a>
              <a href="https://devschile.cl" target="_blank" className="mx-2">
                <Icon name="slack" />
              </a>
            </div>
          </div>

          <div className="mt-4 md:mt-0">
            <a href="https://es.confcodeofconduct.com/" target="_blank" className="text-xs label text-dark">Código de conducta</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
