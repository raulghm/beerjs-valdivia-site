import React from 'react'
import Head from 'next/head'

const quotes = [
  "Dont't worry if it doesn't work right.If everything did, you'd be out of a job.",
  "Don't comment bad code - rewrite it. - Brian Kernighan",
  "A programming language is for thinking about programs, not for expressing programs you've already thought of. It should be a pencil, not a pen. - Paul Graham",
  "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code. - Dan Salomon",
  'It´s better to wait for a productive programmer to become available than it is to wait for the first available programmer to become productive. - Steve McConnell',
  'One of my most productive days was throwing away 1000 lines of code. Ken Thompson',
  'Without requirements or design, programming is the art of adding bugs to an empty text file.',
  "One main'scrappy software is another man's full time job.",
  'Walking on water and developing software from a specification are easy if both are frozen.',
  'Debugging is twice as hard as writing the code in the first place.Therfore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it. - Rajanand',
  'System programmers are the high priests of a low cult. - Robert S. Barton',
  'I don\'t care if it works on your machine! We are not shipping your machine!" - Vidiu Platon',
  'Software undergoes beta testing shortly before iy\' released. Beta is latin for "still doesn\'t work"',
  'Measuring programming progree by lines of code is like measuring aircraft building progree by weight. - Bill Gates',
  'If debudding is the process of removing software bugs, then programming must be the process of putting them in. - Edsger W. Dijkstra',
  'The computer was born to solve problems that did not exist before. - Bill Gates',
  "Real programmers don't comment their code. If it was hard to write, it should be hard to understand.",
  'Always code as if the guy who ends up maintaning your code will be a violent psychopath who knows where you live. - Rick Osborne',
  "People don't care about what you say, they care about what you build. - Mark Zuckerberg",
  'We have to stop optimizing for programmers and start optimizing for users. — Jeff Atwood',
  'If the code and the comments do not match, possibly both are incorrect. — Norm Schryer',
  'Bad programmers worry about the code. Good programmers worry about data structures and their relationships. - Linus Torvalds',
  'If you optimize everything, you will always be unhappy. - Donald Knuth',
  "Your mind is programmable - if you're not programming your mind, else will program it for you. - Jeremy Hammond",
  "The trouble with programmers is that you can never tell what a programmer is doing until it's too late. - Seymour Cray",
  'Debugging becomes significantly easier if you first admit that you are the problem. - William Laeder',
  'Talk is cheap. Show me the code. - Linus Torvalds',
  'Everybody in this country should learn to program a computer because it teaches you how to think. - Steve Jobs',
  'Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program. - Rajanand',
  'Any fool can write code that a computer can understand.Good programmers write code that humans can understand.',
  'First, solve the problem.Then write the code. - John Johnson',
  'The function of a good software is to make the complex appear to be simple. - Grady Booch',
  'Your most unhappy customers are your greatest source of learning. — Bill Gates',
  'Small minds are concerned with the extraordinary, great minds with the ordinary. - Blaise Pascal',
  'Everyday life is like programming, I guess.If you love something you can put beauty on it. - Donald Knuth',
  'You are not responsible for the programming you picked up in childhood.However, as an adult, you are the one hundred percent responsible for fixing it.',
  'Developer is an organism that turns coffee into code.',
  'The purpose of software engineering is to control complexity, not to create it.',
  'As a programmer, it is your job to put yourself out of business. What you do today can be automated tomorrow. - Doug McIlroy',
  'A good programmer is someone who always looks both ways before crossing a one-way street. - Doug Linder',
  'Testing can only prove the presence of bugs, not their absence. – Edsger W. Dijkstra'
]

const randomQuote = () => {
  const n = Math.floor(Math.random() * quotes.length + 0)
  return quotes[n]
}

export default function Custom404 () {
  return (
    <div>
      <Head>
        <title>BeerJS Valdivia . el 404</title>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Encuentro de cerveza y código' />
        <link
          href='https://fonts.googleapis.com/css?family=Source+Code+Pro|Source+Sans+Pro:400,700,900'
          rel='stylesheet'
        />

        <meta property='og:title' content='BeerJS Valdivia, Chile' />
        <meta property='og:description' content='Encuentro de cerveza y código' />
        <meta property='og:image' content='/images/img-beerjs-valdivia.jpg' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='BeerJSValdivia' />
        <meta name='twitter:title' content='BeerJS Valdivia, Chile' />
        <meta name='twitter:description' content='Encuentro de cerveza y código' />
        <meta name='twitter:image' content='/images/img-beerjs-valdivia.jpg' />
        <meta name='twitter:image:alt' content='BeerJS Valdivia, Chile' />

        <meta name='theme-color' content='#1a202d' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <link rel='icon' type='image/png' sizes='196x196' href='/images/icons/favicon-196.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/images/icons/apple-icon-180.png' />
        <link rel='apple-touch-icon' sizes='167x167' href='/images/icons/apple-icon-167.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/images/icons/apple-icon-152.png' />
        <link rel='apple-touch-icon' sizes='120x120' href='/images/icons/apple-icon-120.png' />
      </Head>

      <main className='flex items-center min-h-screen'>
        <div className='p-8 rounded-xl bg-secondary'>
          <h1 className='title'>404</h1>
          <div className='mt-4'>{randomQuote()}</div>
          <a className='inline-block mt-4 text-primary' href='/'>
            Volver 👈
          </a>
        </div>
      </main>
    </div>
  )
}
