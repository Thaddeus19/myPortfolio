"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      category: "Audits & testing",
      skills: [
        "Manual code review",
        "Invariant testing (Foundry/Echidna)",
        "Property-based fuzzing",
        "Static analysis (Slither, MythX)",
        "Threat modeling",
      ],
    },
    {
      category: "Contract stacks",
      skills: [
        "Solidity & Yul",
        "ERC-20/721/1155",
        "Chainlink / Aave",
        "Hardhat & Foundry",
        "Tenderly / Viem",
      ],
    },
    {
      category: "Infrastructure",
      skills: ["Polygon", "Ethereum", "Layer 2s", "IPFS/NFT.Storage", "Bitcoin Taproot"],
    },
    {
      category: "Human skills",
      skills: ["Technical writing", "ThaddeusCrypto workshops", "Web3 mentorship", "Intermediate English", "Native Spanish"],
    },
  ]

  return (
    <section id="habilidades" className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Tools and practices I rely on to ship secure, production-grade Web3 products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.category} className="p-6 bg-card">
              <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
