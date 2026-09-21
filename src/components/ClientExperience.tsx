"use client";

import dynamic from "next/dynamic";

const ImpulseScene = dynamic(() => import("@/components/three/ImpulseScene"), {
  ssr: false,
});

const AnimeScrollOrchestrator = dynamic(
  () => import("@/components/AnimeScrollOrchestrator"),
  { ssr: false }
);

const ImpulseCursor = dynamic(() => import("@/components/ImpulseCursor"), {
  ssr: false,
});

export default function ClientExperience() {
  return (
    <>
      <ImpulseScene />
      <AnimeScrollOrchestrator />
      <ImpulseCursor />
    </>
  );
}
