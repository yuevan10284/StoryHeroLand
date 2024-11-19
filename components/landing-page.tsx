'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion"
import { Upload, Wand2, Download, Instagram, Twitter, Facebook } from 'lucide-react'

export function LandingPageComponent() {
  const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/embed/dQw4w9WgXcQ')

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#1A1B26] to-black text-gray-100 relative overflow-x-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,107,0.1)_0%,transparent_65%)]" />

      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-[#1A1B26]/80 backdrop-blur supports-[backdrop-filter]:bg-[#1A1B26]/80">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-15%20at-C14tjOLLCiDbs5qgafOmHDfmQqEK7t.png" 
              alt="StoryHero Logo" 
              width={32}
              height={32}
              className="h-8 w-auto" 
            />
            <span className="font-bold text-lg text-[#FF6B6B]">StoryHero</span>
          </div>
          <nav className="flex items-center space-x-4 lg:space-x-6">
            <Link href="#features" className="text-sm font-medium transition-colors hover:text-[#FF6B6B]">
              Features
            </Link>
            <Link href="#blog" className="text-sm font-medium transition-colors hover:text-[#FF6B6B]">
              Blog
            </Link>
            <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-[#FF6B6B]">
              Pricing
            </Link>
          </nav>
          <div className="w-[100px]"></div>
        </div>
      </header>

      <main className="flex-1 relative z-10">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#FF6B6B]">
                  Transform your content into viral shorts 10x faster
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  StoryHero analyzes your footage for you and turns it into ready-to-post stories, memes, and highlights.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input 
                    className="flex-1 bg-gray-900/50 border-gray-800 text-gray-100"
                    placeholder="Enter YouTube URL" 
                    type="text"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                  />
                  <Button type="submit" className="bg-[#FF6B6B] text-white hover:bg-[#FF6B6B]/90">Try Now</Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-black/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#FF6B6B]">Example Video</h2>
              </div>
              <div className="mx-auto max-w-4xl w-full">
                <div className="aspect-video bg-gray-900/50 flex items-center justify-center text-2xl font-bold text-gray-400">
                  Coming soon...
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#FF6B6B]">How it works</h2>
            <div className="grid gap-10 sm:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Upload className="h-12 w-12 text-[#FF6B6B]" />
                <h3 className="text-xl font-bold">1. Import</h3>
                <p className="text-gray-300">Input a YouTube link or upload your file</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Wand2 className="h-12 w-12 text-[#FF6B6B]" />
                <h3 className="text-xl font-bold">2. Choose and customize your style</h3>
                <p className="text-gray-300">Choose between a variety of clips such as short stories, memes, and highlights.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Download className="h-12 w-12 text-[#FF6B6B]" />
                <h3 className="text-xl font-bold">3. Render & Export</h3>
                <p className="text-gray-300">Download your clip, export to Premiere Pro for fine-tuning, and auto post directly to YouTube, TikTok, or Instagram</p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-black/30">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#FF6B6B]">Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h3 className="text-xl font-bold">AI-Driven Editing</h3>
                <p className="text-gray-300">Transform long-form content into viral-ready short stories.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <h3 className="text-xl font-bold">Customizable Narratives</h3>
                <p className="text-gray-300">Choose from comedic, epic, suspenseful, and more.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <h3 className="text-xl font-bold">Automated Highlights & Memes</h3>
                <p className="text-gray-300">Create meme-worthy and shareable moments instantly.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <h3 className="text-xl font-bold">Time-Saving</h3>
                <p className="text-gray-300">No more hours spent reviewing VODs and editing.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <h3 className="text-xl font-bold">Auto-Post</h3>
                <p className="text-gray-300">Automatically post your content to platform of your choice (Tiktok, Instagram)</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#FF6B6B]">Testimonials</h2>
            <div className="grid gap-10 sm:grid-cols-2">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Image 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/magicprofile-qXKEzdAbsveFN9JgRQKj0NdFIOXPYo.png" 
                  alt="MagicGum" 
                  width={96}
                  height={96}
                  className="rounded-full w-24 h-24 object-cover"
                />
                <h3 className="text-xl font-bold">MagicGum - Youtube Creator 500k+</h3>
                <p className="text-gray-300">&ldquo;I&apos;ve always needed a tool to help me repurpose my content after uploading! Every agency charges thousands for what StoryHero does in minutes.&rdquo;</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Image 
                  src="/placeholder.svg" 
                  alt="Anonymous User" 
                  width={100}
                  height={100}
                  className="rounded-full" 
                />
                <h3 className="text-xl font-bold">Anonymous User</h3>
                <p className="text-gray-300">&ldquo;Whenever I&apos;m too lazy to repurpose my content, I go to StoryHero to do it all for me. It&apos;s free views!&rdquo;</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-black/30">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#FF6B6B]">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does StoryHero work?</AccordionTrigger>
                <AccordionContent>
                  StoryHero uses AI to analyze your footage, identify key moments, and create engaging short-form content automatically.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What platforms can I post to?</AccordionTrigger>
                <AccordionContent>
                  You can auto-post your content directly to YouTube, TikTok, and Instagram.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is there a free trial?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer a free trial so you can experience the power of StoryHero before committing to a subscription.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-black/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#FF6B6B]">Ready to get started?</h2>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Transform your content into viral shorts today!
              </p>
              <Button className="mt-4 bg-[#FF6B6B] text-white hover:bg-[#FF6B6B]/90" size="lg">
                Get Started Now
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-[#1A1B26] border-t border-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-4">
              <Link href="https://instagram.com/storyhero" className="text-gray-300 hover:text-[#FF6B6B] transition-colors duration-200">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com/storyhero" className="text-gray-300 hover:text-[#FF6B6B] transition-colors duration-200">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://facebook.com/storyhero" className="text-gray-300 hover:text-[#FF6B6B] transition-colors duration-200">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <Link href="https://storyhero.gg/terms" className="text-sm text-gray-300 hover:text-[#FF6B6B] transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="https://storyhero.gg/privacy" className="text-sm text-gray-300 hover:text-[#FF6B6B] transition-colors duration-200">
                Privacy Policy
              </Link>
            </div>
            <p className="text-xs text-gray-300">© 2024 StoryHero LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}