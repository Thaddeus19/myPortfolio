import { ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type ProjectItem = {
  name: string
  detail: string
  link: string
  badges: string[]
}

type ProjectGroup = {
  title: string
  description: string
  items: ProjectItem[]
}

const projectGroups: ProjectGroup[] = [
  {
    title: "Open-source references",
    description: "Public PoCs, audits, and tooling I maintain for the community.",
    items: [
      {
        name: "My StableCoin Project",
        detail: "Over-collateralized stablecoin using Chainlink oracles and panic-liquidation protections.",
        link: "https://github.com/Thaddeus19/My-StableCoin-Project",
        badges: ["Solidity", "Chainlink", "Foundry"],
      },
      {
        name: "My Blockchain Project",
        detail: "Blockchain developed in Go.",
        link: "https://github.com/Thaddeus19/MyBlockchain",
        badges: ["Go Lang", "Javascript", "HTML"],
      },
      {
        name: "NFTContracts with Foundry",
        detail: "Optimized ERC-721 contracts with roles, reveal flows, and reusable launch tooling.",
        link: "https://github.com/Thaddeus19/NFTContracts_with_Foundry",
        badges: ["NFT", "ERC-721", "Foundry"],
      },
      {
        name: "Updraft Security Reports",
        detail: "Curated public findings, methodologies, and checklists for Web3 teams.",
        link: "https://github.com/Thaddeus19/updraft-Security-Reports",
        badges: ["Audit", "Docs"],
      },
      {
        name: "Arbitrage with AAVE Flashloan",
        detail: "Atomic arbitrage strategy on Aave v3 with slippage guards and tenderly-backed simulations.",
        link: "https://github.com/Thaddeus19/Arbitrage-with-AAVE-Flashloan",
        badges: ["Aave", "MEV", "Polygon"],
      },
    ],
  },
  {
    title: "RWA custody",
    description: "Contracts that tokenize invoices and safeguard real-world assets on Polygon.",
    items: [
      {
        name: "RWA Custody Vault",
        detail: "On-chain registry with multi-sig guardians and automated asset freezes.",
        link: "https://polygonscan.com/address/0x82b05068b7B9336DEcA91f7b35aaAABF473C1aE7#code",
        badges: ["Polygon", "RWA"],
      },
    ],
  },
  {
    title: "Marketplace suite (Polygon)",
    description: "Managed NFT launch infrastructure running fully on Polygon.",
      items: [
        {
          name: "WhiteListToken",
          detail: "Allowlist management for pre-sale phases.",
          link: "https://polygonscan.com/address/0x2ecCB0A282F3323822D6476D5B6C7Eb8cb648A1E",
          badges: ["Polygon", "Access control"],
        },
        {
          name: "MarketControl",
          detail: "Orchestrates roles and global marketplace parameters.",
          link: "https://polygonscan.com/address/0x1144a0ECBa6D4718277e44490B71819384f123de",
          badges: ["Governance", "Polygon"],
        },
        {
          name: "VaultNFT",
          detail: "Custodies NFTs and collection-based rewards.",
          link: "https://polygonscan.com/address/0x6A8510fD0d4ebcC9CE4638A5135090A4282d70b3",
          badges: ["Polygon", "Vault"],
        },
        {
          name: "NFTMarket",
          detail: "Buy/sell engine with batch listing.",
          link: "https://polygonscan.com/address/0x332BB4CDCDcc7EdBE458e38dE8a4D46A937c68c0",
          badges: ["Marketplace", "Polygon"],
        },
        {
          name: "batchmarket",
          detail: "Bulk execution of creator orders.",
          link: "https://polygonscan.com/address/0xbf554Edef9358f9bf6b93127aDf2C4BA76157b63",
          badges: ["Batch ops", "Polygon"],
        },
        {
          name: "ManageTransferToken",
          detail: "Controls limits and transfers for utility tokens.",
          link: "https://polygonscan.com/address/0xFE3739227e62011d18e1A654A3c60C31eb626E8b",
          badges: ["Compliance", "Polygon"],
        },
        {
          name: "Collection",
          detail: "Main ERC-721 contract powering the marketplace.",
          link: "https://polygonscan.com/address/0xF74039078fd772495012598568f38E62C56c1df2",
          badges: ["ERC-721", "Polygon"],
        },
    ],
  },
  {
    title: "Bets Game protocol",
    description: "Gaming suite with segregated vaults and dynamic room creation.",
    items: [
      {
        name: "Whitelist",
        detail: "Access control for verified players.",
        link: "https://polygonscan.com/address/0x1D0fa4ba693c85ce2609Ab8c21AD2fcf4C67c216",
        badges: ["Polygon", "Whitelist"],
      },
      {
        name: "Vault",
        detail: "Safekeeps player funds with multisig controls.",
        link: "https://polygonscan.com/address/0xEaB2e314CE5138070Cf83327c9Dd73D256F36916",
        badges: ["Vault", "Polygon"],
      },
      {
        name: "Pay Vault",
        detail: "Handles payments and withdrawals through segmented flows.",
        link: "https://polygonscan.com/address/0xa7324831da3dEb902F0fF78A018fB8c2af333D1F",
        badges: ["Payments", "Polygon"],
      },
      {
        name: "reloadFactory",
        detail: "Factory to spin up new, audited matches.",
        link: "https://polygonscan.com/address/0x8f7D7a95658867c7F069bb814ce5449893F42138",
        badges: ["Factory", "Polygon"],
      },
      {
        name: "Game core",
        detail: "Scalable PvP / PvE core logic.",
        link: "https://polygonscan.com/address/0xa35427BF871c1e77014058a330eBa04b3630f036",
        badges: ["Gameplay", "Polygon"],
      },
    ],
  },
  {
    title: "Staking program (BSC)",
    description: "Staking architecture with split rewards for validators and holders.",
    items: [
      {
        name: "vaultRewardsStaking",
        detail: "Distributes incentives to active stakers.",
        link: "https://bscscan.com/address/0xA5733b3A8e62A8faF43b0376d5fAF46E89B3033E",
        badges: ["BSC", "Rewards"],
      },
      {
        name: "vaultRewardsHolders",
        detail: "Routes rewards to long-term holders.",
        link: "https://bscscan.com/address/0x3f9b502d302f46Da6750dA9b6cd11a77A4068239",
        badges: ["BSC", "Rewards"],
      },
      {
        name: "VaultStaking",
        detail: "Manages deposits and withdrawals with dynamic limits.",
        link: "https://bscscan.com/address/0x35744966a894350467df066e32DBcff5c43EF78a",
        badges: ["BSC", "Vault"],
      },
      {
        name: "StakingControl",
        detail: "Coordinates governance and global risk settings.",
        link: "https://bscscan.com/address/0xaC273477519b2223fa0b7ba402f2EC1607C8Ac8f",
        badges: ["Governance", "BSC"],
      },
      {
        name: "Staking",
        detail: "Primary contract where users interact with the staking flow.",
        link: "https://bscscan.com/address/0x9571e42731724cf90b734A5C0a0cB1f7cc1AE162",
        badges: ["BSC", "Core"],
      },
      {
        name: "RewardsContract",
        detail: "Schedules emissions and unlock curves.",
        link: "https://bscscan.com/address/0x83c28D7E5cBc5b4a3c343d3c23849A837E4bB5d2",
        badges: ["BSC", "Tokenomics"],
      },
    ],
  },
  {
    title: "Token sale with KYC (Ethereum)",
    description: "Full token sale stack with KYC lists and programmable vaults.",
    items: [
      {
        name: "Whitelist",
        detail: "KYC registry plus phase-based quotas.",
        link: "https://etherscan.io/address/0xa7691dDedf37798C94F88e8614C8E4fa84287E3c",
        badges: ["Ethereum", "KYC"],
      },
      {
        name: "Rechain Token",
        detail: "ERC-20 token powering the program.",
        link: "https://etherscan.io/address/0x3f0D4E966840f453E70A67D27175F78410B873cF",
        badges: ["ERC-20", "Ethereum"],
      },
      {
        name: "supplyVault",
        detail: "Safekeeps raised funds and releases per milestone.",
        link: "https://etherscan.io/address/0xaBA90E541978832Cfb4bA7Fa0AfF58dCce8f1cb8",
        badges: ["Vault", "Ethereum"],
      },
      {
        name: "p2pVault",
        detail: "Channels P2P / OTC agreements.",
        link: "https://etherscan.io/address/0x741AE27dC176e5135F8d064ff6EAcAd08b8819dE",
        badges: ["OTC", "Ethereum"],
      },
      {
        name: "sellTokenControl",
        detail: "Applies global sell limits.",
        link: "https://etherscan.io/address/0x267F097605232526e2334f863C9E4199Ca2e0Acc",
        badges: ["Compliance", "Ethereum"],
      },
      {
        name: "manageToken",
        detail: "Handles administrative and emergency operations.",
        link: "https://etherscan.io/address/0x9853b7E750d7bA8aEBe2f3f5eDca5a3f609A3660",
        badges: ["Admin", "Ethereum"],
      },
    ],
  },
]

export function Projects() {
  return (
    <section id="proyectos" className="py-20 md:py-32 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Deploys & Audits</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            A curated list of public repos and deployed contracts that showcase my focus on security, governance, and real
            Web3 products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectGroups.map((group) => (
            <Card key={group.title} className="bg-card hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{group.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{group.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {group.items.map((item) => (
                  <div key={item.link} className="space-y-2 rounded-lg border border-border/50 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold leading-tight">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.detail}</p>
                      </div>
                      <Button variant="ghost" size="icon" asChild>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${item.name}`}>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.badges.map((badge) => (
                        <Badge key={`${item.name}-${badge}`} variant="outline" className="text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
