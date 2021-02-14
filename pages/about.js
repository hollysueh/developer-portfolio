import Layout from '../components/MyLayout'

export default () => (
  <Layout>
    <h2><b>About Me</b></h2>
    <hr></hr>
    <h4>Intro</h4>
    <p>I'm 27 years old and based in Cape Town, South Africa.</p>
    <p>I have experience managing large-scale projects in physical security, and running the daily operations of a
      retail company.</p>
    <p>I'm currently working towards a 'Full Stack Web Development' certification, which has focused on the MERN stack.</p>
    <p>I'm procifient working in JavaScript frameworks such as Express, React, Node.js and Next.js; and using database technologies such as MongoDB and Mongoose.</p>
    <br></br>
    <h4>Education</h4>
    <p><b>Bachelor of Social Science</b> - University of Cape Town (2012 - 2014)</p>
    <p><em>Majors in Psychology and History</em></p>
    <p><b>ICAgile Certified Professional</b> - International Consortium of Agile (2018)</p>
    <p><em>Certified in agile methodologies of project management</em></p>
    <p><b>Full Stack Web Development</b> - HyperionDev (2021)</p>
    <p><em>Focusing on the MERN stack of web development</em></p>
    <br></br>
    <h4>Experience</h4>
    <p><b>Head of Operations - </b><em>Pacific Gourmet (Hong Kong)</em></p>
		<p>(Feb 2019 - Dec 2019)</p>
    <p><b>Project Manager - </b><em> Auckland District Health Board (New Zealand)</em></p>
		<p>(Aug 2017 - Dec 2018)</p>
    <p><b>Project Coordinator - </b><em> Auckland District Health Board (New Zealand)</em></p>
		<p>(Nov 2016 - Jul 2017)</p>
    
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
</Layout>
)