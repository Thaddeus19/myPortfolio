import { Card } from "@/components/ui/card"
import { Binary, BookOpenCheck, CircuitBoard, Users } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Binary,
      title: "Technical auditing",
      description:
        "Manual reviews plus Foundry, Echidna, and Slither fuzzing to uncover overflows, privilege abuse, and MEV vectors.",
    },
    {
      icon: CircuitBoard,
      title: "DeFi / RWA architecture",
      description:
        "I design stablecoin controllers, NFT markets, and multi-chain vaults with separated governance and on-chain guardians.",
    },
    {
      icon: BookOpenCheck,
      title: "Continuous learning",
      description:
        "Ethereum bootcamp, Cyfrin Updraft, Blockchain Sec Academy, and a Master’s in Blockchain keep my practice sharp.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Spanish-speaking mentor via ThaddeusCrypto and workshops that help teams mature their security posture.",
    },
  ]

  return (
    <section id="sobre-mi" className="py-20 md:py-32 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">About me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            I’m a blockchain engineer with dual citizenship (Costa Rica / Mexico) and 5+ years building and auditing smart
            contracts. I have led development for Disruptive Studio, Ignichat, and open communities, while participating in
            reviews for Cantina, Code4rena, and Cyfrin Codehawks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow bg-card">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{feature.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
