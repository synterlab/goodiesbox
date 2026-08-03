import { useEffect } from 'react';

const DEFAULT_TITLE = 'GoodiesBox — Open Packs, Collect Prediction Cards, Win Prizes';
const DEFAULT_DESCRIPTION =
  'GoodiesBox is a Web3 prediction card platform. Open mystery packs on Solana Devnet and EVM testnets, collect outcome cards for real-world events, and win prizes when your predictions come true.';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

export function SEO({ title, description, canonical }: SEOProps) {
  useEffect(() => {
    const fullTitle = title ? `${title} | GoodiesBox` : DEFAULT_TITLE;
    const fullDescription = description || DEFAULT_DESCRIPTION;

    document.title = fullTitle;

    const setMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute('content', content);
    };

    setMeta('meta[name="description"]', fullDescription);
    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', fullDescription);
    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', fullDescription);

    if (canonical) {
      const link = document.querySelector('link[rel="canonical"]');
      if (link) link.setAttribute('href', canonical);
    }

    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title, description, canonical]);

  return null;
}
