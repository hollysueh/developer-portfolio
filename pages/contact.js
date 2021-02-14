import Layout from '../components/MyLayout'
import Link from 'next/link'

export default () => (
  <Layout>
    <h2><b>My Contact Details</b></h2>
    <hr></hr>
		<h5>Email:</h5>
    <p><Link href="mailto:hollyhenaghan@gmail.com"><a>hollyhenaghan@gmail.com</a></Link></p>
		<br></br>
		<h5>Mobile:</h5>
    <p>(+27) 664 929 318</p>
		<br></br>
		<h5>LinkedIn:</h5>
    <p><Link href="https://www.linkedin.com/in/holly-henaghan-b3495212a/">
      <a>https://www.linkedin.com/in/holly-henaghan</a>
		</Link></p>
    <style jsx>{`
        h2 {
          margin-top: 35px;
          padding: 5px;
          color: rgb(139, 103, 103);
        }
        h5 {
          padding: 5px;
          color: rgb(139, 103, 103);
        }
      `}</style>
	</Layout>
)
