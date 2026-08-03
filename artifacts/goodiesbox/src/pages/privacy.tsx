import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';

export default function Privacy() {
  return (
    <Layout>
      <SEO title="Privacy Policy" description="Read the GoodiesBox Privacy Policy. We collect minimal data necessary to operate the platform and never sell your personal information." />
      <div className="pt-16 pb-24">
        <div className="container mx-auto px-4 max-w-3xl prose prose-invert prose-p:text-muted-foreground prose-a:text-[#FF3CAC]">
          <h1 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">Last Updated: January 15, 2026</p>

          <div className="mt-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Data Collection</h2>
              <p>
                GoodiesBox collects minimal personal information necessary to operate the Platform. This may include:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                <li>Public wallet addresses (when you connect a wallet)</li>
                <li>Email addresses and usernames (if you create an account)</li>
                <li>Usage data and interaction logs within the Platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Blockchain Transparency</h2>
              <p>
                Please be aware that any transactions made on a blockchain (even testnets) are public and immutable. Your public wallet address and its transaction history are visible to anyone. GoodiesBox cannot delete or alter data stored on the blockchain.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Use of Information</h2>
              <p>
                We use the collected data to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                <li>Provide and maintain the Platform</li>
                <li>Track and display testnet contest leaderboards</li>
                <li>Improve user experience and fix bugs</li>
                <li>Communicate critical updates regarding the Beta</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Cookies and Local Storage</h2>
              <p>
                The Platform uses local storage and session cookies to maintain your connection state, remember your theme preferences, and keep you logged in. We do not use third-party tracking cookies for advertising purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Third Parties</h2>
              <p>
                We may share non-personally identifiable information with analytics providers to understand how the Platform is used. We do not sell your personal data to third parties. Our Platform integrates with RPC providers (Solana Devnet endpoints, Infura) which may collect IP addresses as per their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Security</h2>
              <p>
                We implement reasonable security measures to protect the information we collect. However, no internet transmission or electronic storage method is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights</h2>
              <p>
                You may request deletion of your off-chain account data at any time by contacting us. Note that we cannot delete on-chain transaction history.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
