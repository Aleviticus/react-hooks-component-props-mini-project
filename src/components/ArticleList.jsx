import Article from "./Article"

function ArticleList({posts}) {
    return (
    posts.map((post) => {
        return (
            <main>
                <Article 
                key={post.id} 
                title={post.title}
                date={post.date}
                preview={post.preview}
                minutes={post.minutes}/>
            </main>
        )
    }))
}

export default ArticleList

// import Article from "./Article"

// function ArticleList({posts}) {
//     return (
//         <main>
//             {posts.map((post) => (
//                 <Article 
//                     key={post.id} 
//                     title={post.title}
//                     date={post.date}
//                     preview={post.preview}
//                     minutes={post.minutes}
//                 />
//             ))}
//         </main>
//     )
// }

// export default ArticleList