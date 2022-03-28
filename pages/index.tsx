import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import useStore from '../store/tempStore';
import styles from '../styles/Home.module.css';

import Layout from '../components/layout';

const Home: NextPage = () => {
	return <Layout />;
};

export default Home;
