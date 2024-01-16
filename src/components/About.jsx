import blogData from "../data/blog"

function About() {
    return(
        <aside>
            <img src={blogData.image} alt="blog logo"></img>
            <p>{blogData.about}</p>
        </aside>
    )
}

export default About