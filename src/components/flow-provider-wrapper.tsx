"use client";

import { FlowProvider } from "@onflow/react-sdk";
import { ReactNode } from "react";
import flowJSON from "../../flow.json";

interface FlowProviderWrapperProps {
  children: ReactNode;
}

export function FlowProviderWrapper({ children }: FlowProviderWrapperProps) {
  return (
    <FlowProvider
      config={{
        // Emulator configuration
        accessNodeUrl: "http://localhost:8888",
        discoveryWallet: "http://localhost:8701/fcl/authn",
        flowNetwork: "emulator",

        // App metadata
        appDetailTitle: "Flow React SDK Starter",
        appDetailUrl:
          typeof window !== "undefined" ? window.location.origin : "",
        appDetailIcon: "https://avatars.githubusercontent.com/u/62387156?v=4",
        appDetailDescription:
          "A Next.js starter template for Flow blockchain applications",

        // Optional configuration
        computeLimit: 1000,
      }}
      flowJson={flowJSON}
    >
      {children}
    </FlowProvider>
  );
}
