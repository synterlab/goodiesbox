import { Layout } from '@/components/Layout';

export default function Terms() {
  return (
    <Layout>
      <div className="pt-16 pb-24">
        <div className="container mx-auto px-4 max-w-3xl prose prose-invert prose-p:text-muted-foreground prose-a:text-[#00E5FF]">
          <h1 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tight">Terms of Service</h1>
          <p className="text-sm text-muted-foreground">Last Updated: January 15, 2026</p>

          <div className="mt-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using GoodiesBox (the "Platform"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Platform. The Platform is currently in a Beta Testnet phase and all activity uses testnet tokens with no real-world value.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Beta Service Disclaimer</h2>
              <p>
                The Platform is provided "as is" and "as available." GoodiesBox is currently operating on testnets (Solana Devnet, Ethereum Sepolia). All tokens, cards, and assets within the Platform have ZERO real-world monetary value. We reserve the right to wipe databases, reset collections, or terminate the testnet at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Wallet Connection and Security</h2>
              <p>
                To use the Platform, you must connect a supported third-party wallet (Phantom or MetaMask). You are solely responsible for maintaining the security of your wallet and private keys. GoodiesBox never takes custody of your assets and cannot recover lost private keys.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Assumption of Risk</h2>
              <p>
                You acknowledge the inherent risks associated with blockchain technology, smart contracts, and cryptographic tokens. The Platform may experience bugs, exploits, or downtime. You agree that GoodiesBox shall not be liable for any losses or damages resulting from these risks.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
              <p>
                All design, code, artwork, and copy on the Platform are the intellectual property of GoodiesBox, except where open-source licenses apply. Users are granted a limited license to display digital cards they own on the Platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, GoodiesBox and its creators shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation loss of profits, data, or goodwill, arising from your use of the Platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the company is registered, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact Information</h2>
              <p>
                For questions about these Terms, please visit our <a href="https://github.com/synterlab/goodiesbox" target="_blank" rel="noreferrer">GitHub repository</a> or reach out via the links in the footer.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
