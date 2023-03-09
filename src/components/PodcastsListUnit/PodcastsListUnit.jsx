export default function PodcastsListUnit({i, podcast}) {
    return(
    <>
        <li>
            {i}
            {podcast.name} 
            {podcast.host}
        </li>
    </>
    )
}