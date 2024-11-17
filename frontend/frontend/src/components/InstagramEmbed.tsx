import React, { useEffect } from "react";

// Define the type for the props
interface InstagramEmbedProps {
  postUrl: string;
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ postUrl }) => {
  useEffect(() => {
    // Load the Instagram embed script
    const script = document.createElement("script");
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    document.body.appendChild(script);

    // Clean up the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-captioned
      data-instgrm-permalink={postUrl}
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: "0",
        borderRadius: "3px",
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
        margin: "1px",
        maxWidth: "540px",
        minWidth: "326px",
        padding: "0",
        width: "99.375%",
      }}
    >
      <div style={{ padding: "16px" }}></div>
    </blockquote>
  );
};

export default InstagramEmbed;
