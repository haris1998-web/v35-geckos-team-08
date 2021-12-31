import Head from 'next/head';
import Hero from '../components/hero';
import AudioPlayer from '../components/AudioPlayer';
import About from '../components/about';
import Contact from '../components/contact';
import Footer from '../components/footer';

export default function Home() {

	return (
		<div>
			<Head>
				<title>Protest Tunes | General Strike</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero />
			<AudioPlayer />		
			<About />
			<Contact />
			<Footer />
		</div>
	);
}
