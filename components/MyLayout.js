import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'

const layoutStyle = {
    margin: 20,
    padding: 40,
		'background-color': 'linen',
		'font-family': 'Didot',
		border: '30px solid rgb(230, 221, 213)',
		'text-align': 'center',
		color: 'darkslategrey'
}

/* Notice in the example below that we pass children and title as props to the Layout components.
If you remove {children}, the Layout cannot render the content we put inside the Layout element. 
Have a look at ./pages/index.js to see where we pass props through to this Layout Component. */
const Layout = (props) => (
   <div>
	<Head>
	   <link
  			rel="stylesheet"
  			href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  			integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  			crossorigin="anonymous"
		/>
	</Head>
  	<div style={layoutStyle}>
    	<Header />
    	{props.children}
  	</div>
  </div>
)

export default Layout
