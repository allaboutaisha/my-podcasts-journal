import PodcastsListUnit from "../PodcastsListUnit/PodcastsListUnit"

export default function PodcastsList({ podcasts }) {
    const userPods = podcasts.map((podcast, i) =>
        <PodcastsListUnit
          key={i}
          podcast={podcast}
        />
      );

    return (
    <>
        <ul>
           {userPods}
        </ul>
    </>
    )
}