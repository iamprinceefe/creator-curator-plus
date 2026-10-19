export function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <iframe
      className="aspect-video w-full"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}
