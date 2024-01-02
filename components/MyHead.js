import Head from 'next/head'

export default function MyHead({ title, description, image, url }) {
    return (
        <Head>
            <title>Bham SEO and Web Design Co</title>
            <meta name="description" content="Bham SEO and Design Co offers expert SEO and web design services to elevate your online presence. Discover innovative strategies tailored for your success." />
            <meta property="og:title" content={title} key="title" />
            <meta property="og:description" content={description} key="description" />
            <meta property="og:image" content={image} key="image" />
            <meta property="og:url" content="https://bhamseoanddesignco.com/" key="url" />
            <link rel="icon" href="/images/computerfavicon/favicon.ico" /> 

            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    );
}
