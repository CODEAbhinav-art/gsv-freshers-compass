import { useEffect } from "react";


export const ZapierChatbot = () => {
  useEffect(() => {
    const SRC =
      "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js";
    if (document.querySelector(`script[src="${SRC}"]`)) return;

    const script = document.createElement("script");
    script.type = "module";
    script.src = SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <zapier-interfaces-chatbot-embed
      is-popup="true"
      chatbot-id="d85263"
    ></zapier-interfaces-chatbot-embed>
  );
};

export default ZapierChatbot;
