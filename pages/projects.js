import Layout from '../components/MyLayout'
import Link from 'next/link'

export default () => (
  <Layout>
    <h2><b>My Projects</b></h2>
    <hr></hr>
    <h4>Memory Book</h4>
    <p>A full stack web application created using the MERN stack - MongoDB, React, Express, Node.js and Cloudinary.</p>
    <p>Memory Book is an app which allows users to create a customizable virtual photo album.
      After creating an account, users can upload images to their album, edit page content,
      add/delete pages, and share a link to their album with friends and family.</p>
    <p>Find my app on Heroku here: 
      <Link href="https://my-memory-book.herokuapp.com/"><a>https://my-memory-book.herokuapp.com/</a></Link></p>
    <br></br>
    <h4>iFaves</h4>
    <p>A simple full stack web application created using React and Express.</p>
    <p>This app will search the iTunes store and Apple Books store based on the user's input, and return any matching results.
      Users are then able to 'favourite' any results, view their list of favourites, and delete items from their favourited list.</p>
    <p>Find my app on Heroku here: 
      <Link href="https://ifaves.herokuapp.com/"><a>https://ifaves.herokuapp.com/</a></Link></p>
    <br></br>
    <h4>Minesweeper</h4>
    <p>A simple minesweeper game created using React.</p>
    <p>Users are able to click on each cell in the grid to expose it's value.
      The objective is to expose all the open cells on the board without clicking on any hidden "mines".</p>
    <p>A help button is located at the top of the page to provide game instructions and tips.</p>
    <p>Find my app on Heroku here: 
      <Link href="https://shielded-atoll-78839.herokuapp.com/"><a>https://shielded-atoll-78839.herokuapp.com/</a></Link></p>
    <br></br>
    <h4>GitHub</h4>
		<p>Check out some of my other projects on GitHub here:
      <Link href="https://github.com/hollysueh/"><a>https://github.com/hollysueh/</a></Link></p>
      <style jsx>{`
        h2 {
          margin-top: 35px;
          padding: 5px;
          color: rgb(139, 103, 103);
        }
        h4 {
          padding: 5px;
          color: rgb(139, 103, 103);
        }
      `}</style>

    <script async src="https://www.googletagmanager.com/gtag/js?id=G-0LTH6TCY0E"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-0LTH6TCY0E');
    </script>
</Layout>
)