import Layout from '../components/MyLayout'

export default () => (
	<Layout>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-0LTH6TCY0E"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date());

      gtag('config', 'G-0LTH6TCY0E');
    </script>
    
    <br></br>
	    <img src="/static/images/me1.jpg/" alt="my image" />
			<h1>Hi, My Name's Holly</h1>
			<h4>and this is my developer portfolio.</h4>
			<h5>Feel free to look around.</h5>
      <h6>Make yourself at home.</h6>
      <style jsx>{`
        img {
          margin: none;
          display: block;
          width: 100%;
          opacity: 0.7;
          border: 20px solid linen;
        }
        h1 {
          padding: 5px;
          color: rgb(139, 103, 103);
        }
        h4, h5, h6 {
          padding: 5px;
        }
      `}</style>
  </Layout>
)