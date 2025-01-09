import React from 'react';
import { Target, Zap } from 'lucide-react';

const Vision = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
            Vision & Mission
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            INDO X was created with a vision to democratize finance and bridge the gap between traditional and decentralized finance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 rounded-xl border border-purple-500/20">
            <Target className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Our Vision</h3>
            <p className="text-gray-400">
            The vision of INDO X is to create an innovative and decentralized ecosystem within the blockchain and cryptocurrency space. It aims to empower users by leveraging blockchain technology to give them greater control over their digital assets and financial transactions, eliminating intermediaries and reducing associated costs. A key aspect of this vision is fostering a community-centric approach, where active user participation shapes the project’s development, decision-making, and governance, especially in driving token-related activities such as the ICO and IEO.
<br />
<br />
INDO X is focused on introducing a forward-thinking token economy, aiming to raise up to $1 billion while ensuring long-term sustainability and liquidity. The project’s strategic release of 10 billion tokens is designed to balance market demand and liquidity effectively. Beyond its financial ambitions, INDO X envisions applying blockchain technology across various industries, including finance, engineering, and IT, to bring about transparency, security, and efficiency.
<br / >
<br />
On a broader scale, INDO X aspires to become a global leader in the blockchain space, providing a platform that serves a wide audience—from businesses and developers to everyday users—looking to harness the power of blockchain for diverse applications. This vision reflects the project’s commitment to driving technological progress, decentralization, and community empowerment in the evolving blockchain landscape.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 rounded-xl border border-purple-500/20">
            <Zap className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Our Mission</h3>
            <p className="text-gray-400">
            The mission of INDO X is to revolutionize the way individuals and businesses interact with digital assets and blockchain technology. It aims to create a secure, transparent, and user-centric ecosystem that empowers people to manage their financial transactions and assets independently, without relying on traditional intermediaries. INDO X is committed to fostering innovation in the blockchain space by developing cutting-edge solutions that can be applied across various industries, driving adoption and efficiency.
<br />
<br />
At the core of its mission is building a strong, engaged community that actively contributes to the platform’s growth and governance. INDO X seeks to enable users to take control of their financial futures by providing them with access to decentralized tools and technologies. Through its tokenomics strategy and community-driven approach, the project strives to ensure long-term sustainability, transparency, and inclusivity.
<br />
<br />
INDO X is dedicated to expanding the global reach of blockchain technology, offering a platform that encourages widespread use and adoption while maintaining a strong focus on innovation, security, and user empowerment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;