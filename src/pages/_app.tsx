// _app.tsx (for Next.js)
import PostLayout from "../../components/PostLayout/PostLayout";
// import '../styles/global.css';

function MyApp({ Component, pageProps }) {
    return (
        <PostLayout>
            <Component {...pageProps} />
        </PostLayout>
    );
}

export default MyApp;
