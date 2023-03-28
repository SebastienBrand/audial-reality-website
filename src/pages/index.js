import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import WebpageWrapper from '@/WebpageWrapper'

import { HeroSection } from '@/HeroSection'
import { GridSection } from '@/GridSection'
import { FeaturesSection } from "@/FeaturesSection"
import { SponsorSection } from "@/SponsorSection"
import { SupportSection } from "@/SupportSection"
import { BlogSection } from "@/BlogSection"
import { SearchBar } from "@/components/SearchBar/__index.js"

import { gql } from "@apollo/client";
import { getApolloClient } from "../lib/apollo-client";


export default function Home({ page, posts }) {
  console.log(posts)

  return (
      <WebpageWrapper>
        <HeroSection />
        <FeaturesSection />
        <SponsorSection />
        <SupportSection />
        <BlogSection  allPosts={posts} />
      </WebpageWrapper>
  )
}


