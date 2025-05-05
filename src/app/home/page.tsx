"use client";
import { Flex } from "@chakra-ui/react";
import { AudioGear } from "@/components/audio-gear";
import EarphoneDisplay from "@/components/earphone-display";
import HeroSection from "@/components/hero";
import AudioShowcase from "@/components/audio-showcase";
import SpeakerShowcase from "@/components/speaker-showcase/speakerShowcase";
import ZxSpeaker from "@/components/zx-speaker";

export default function Home() {
  return (
    <Flex width="100vw" direction="column">
      <HeroSection />
      <AudioShowcase />
      <SpeakerShowcase />
      <ZxSpeaker />
      <EarphoneDisplay />
      <AudioGear />
    </Flex>
  );
}
