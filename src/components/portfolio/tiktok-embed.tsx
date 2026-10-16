// TikTok's embed.js installs a MutationObserver on first load, so every
// blockquote.tiktok-embed added to the DOM afterwards (including ones from
// later renders) gets picked up and hydrated into a player automatically.
function ensureTikTokScript() {
  if (document.getElementById("tiktok-embed-script")) return;
  const script = document.createElement("script");
  script.id = "tiktok-embed-script";
  script.src = "https://www.tiktok.com/embed.js";
  script.async = true;
  document.body.appendChild(script);
}

export function TikTokEmbed({ url }: { url: string }) {
  if (typeof document !== "undefined") ensureTikTokScript();

  return (
    <div className="mx-auto flex max-h-[80vh] w-full justify-center overflow-y-auto">
      <blockquote
        key={url}
        className="tiktok-embed"
        cite={url}
        data-video-id={url.split("/video/")[1]}
        style={{ maxWidth: 605, minWidth: 325 }}
      >
        <section>
          <a target="_blank" rel="noreferrer" href={url}>
            Watch on TikTok
          </a>
        </section>
      </blockquote>
    </div>
  );
}
