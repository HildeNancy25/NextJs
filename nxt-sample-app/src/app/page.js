export default function Home(){
    return <>
    <div
     style={{
        paddingTop:'1rem', color:'blue', fontSize:'1.5rem'
        }}>
        <a style={{paddingRight:'1rem'}} href="/about">About</a>
        <a style={{paddingRight:'1rem'}} href="/user">Users</a>
        <a href="/blog">Blog</a>
    </div>
    <h1>Home page</h1>
    <p>am returning my first page</p>
    </>
}