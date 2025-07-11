import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Zap, Shield, BarChart3, Clock, Database, Check } from "lucide-react"
import { MemoryNodes } from "@/components/memory-nodes"
import { TechDiagram } from "@/components/tech-diagram"
import { PricingCards } from "@/components/pricing-cards"
import { Testimonials } from "@/components/testimonials"
import { UseCases } from "@/components/use-cases"
import { TrustedBy } from "@/components/trusted-by"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <MemoryNodes />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 px-3 py-1 animate-fade-in">
              Introducing Vrin
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              <span className="gradient-text">Smart Memory</span> for Your AI
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-up stagger-1">
              Give your healthcare LLMs a brain with our persistent memory orchestration platform. Reduce repetition,
              enhance context, and deliver better patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up stagger-2">
              <Link href="/signup">
                <Button size="lg" className="gradient-bg text-white hover:opacity-90 w-full sm:w-auto">
                  Get Started Free
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  Watch Demo
                </Button>
              </Link>
            </div>
            <div className="mt-12 animate-slide-up stagger-3">
              <p className="text-sm text-muted-foreground mb-4">Trusted by healthcare AI teams at</p>
              <TrustedBy />
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-6">The Problem</h2>
              <p className="text-lg text-muted-foreground mb-6">
                LLMs in healthcare suffer from memory limitations, causing:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
                    <span className="text-red-600 dark:text-red-400">✕</span>
                  </div>
                  <div>
                    <p className="font-medium">Context Amnesia</p>
                    <p className="text-muted-foreground">LLMs forget critical patient history between sessions</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
                    <span className="text-red-600 dark:text-red-400">✕</span>
                  </div>
                  <div>
                    <p className="font-medium">Token Waste</p>
                    <p className="text-muted-foreground">15-20 minutes spent re-feeding context in each session</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
                    <span className="text-red-600 dark:text-red-400">✕</span>
                  </div>
                  <div>
                    <p className="font-medium">Safety Risks</p>
                    <p className="text-muted-foreground">
                      Missing critical medication interactions and patient history
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Vrin provides a comprehensive memory orchestration platform:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                    <Check className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Persistent Memory</p>
                    <p className="text-muted-foreground">Store and retrieve patient context across sessions</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                    <Check className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Intelligent Retrieval</p>
                    <p className="text-muted-foreground">Reduce information gathering from 15 minutes to 2 seconds</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                    <Check className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">HIPAA Compliance</p>
                    <p className="text-muted-foreground">Enterprise-grade security with complete audit logging</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Features for Healthcare AI</h2>
            <p className="text-lg text-muted-foreground">
              Our platform provides everything you need to give your LLMs a reliable, secure memory system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg gradient-bg flex items-center justify-center mb-6">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Episodic Memory</h3>
                <p className="text-muted-foreground">
                  Store conversational episodes with vector embeddings optimized for medical terminology and semantic
                  search.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg gradient-bg flex items-center justify-center mb-6">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Semantic Knowledge Graph</h3>
                <p className="text-muted-foreground">
                  Extract and store medical facts, relationships, and entities for complex healthcare queries.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg gradient-bg flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Hybrid Retrieval Engine</h3>
                <p className="text-muted-foreground">
                  Patent-pending technology combines vector embeddings and graph traversal for superior recall.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg gradient-bg flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
                <p className="text-muted-foreground">
                  HIPAA-ready with end-to-end encryption, audit logging, and complete data isolation.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg gradient-bg flex items-center justify-center mb-6">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Intelligent Analytics</h3>
                <p className="text-muted-foreground">
                  Track memory usage, optimize retrieval, and gain insights into your AI's learning patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg gradient-bg flex items-center justify-center mb-6">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Automated Memory Management</h3>
                <p className="text-muted-foreground">
                  Smart consolidation and forgetting policies based on clinical importance and usage patterns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">See It In Action</h2>
            <p className="text-lg text-muted-foreground">
              Watch how Vrin transforms healthcare AI interactions with persistent memory.
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden border shadow-lg">
            <div className="aspect-video bg-black/5 dark:bg-white/5 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-lg font-medium mb-4">Demo Video</p>
                <Button className="gradient-bg text-white hover:opacity-90">Watch Demo</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              Our patent-pending architecture combines multiple memory systems for optimal recall and performance.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <TechDiagram />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Use Cases</h2>
            <p className="text-lg text-muted-foreground">
              See how different healthcare stakeholders leverage Vrin for better outcomes.
            </p>
          </div>

          <UseCases />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Healthcare Innovators</h2>
            <p className="text-lg text-muted-foreground">See what our customers are saying about Vrin.</p>
          </div>

          <Testimonials />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30" id="pricing">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground">Choose the plan that's right for your healthcare AI needs.</p>
          </div>

          <PricingCards />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Give Your AI a Memory?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join leading healthcare organizations using Vrin to build more intelligent, context-aware AI applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="gradient-bg text-white hover:opacity-90 w-full sm:w-auto">
                  Get Started Free
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  Schedule a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
