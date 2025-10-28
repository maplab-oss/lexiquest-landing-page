"use client";
import { useState } from "react";
import { cx } from "./cx";
import { contentConfig } from "./content-config";

interface Props {
  id?: string;
}

const ArrowIcon = () => (
  <svg width="8" height="15" viewBox="0 0 8 15" fill="none" className="h-4 w-2">
    <path
      d="M1 1.76027L7 7.59278L1 13.4253"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function HowItWorks({ id }: Props) {
  const [activeTab, setActiveTab] = useState(
    contentConfig.howItWorks.steps[0]?.id || "tab1",
  );

  return (
    <section id={id} className="bg-white pt-12 pb-24">
      <div className="section-container">
        <div className="mr-auto max-w-5xl">
          <h2 className="heading-l2">{contentConfig.howItWorks.title}</h2>

          {/* Mobile Layout - Stacked */}
          <div className="md:hidden">
            <div className="mb-8 space-y-2">
              {contentConfig.howItWorks.steps.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cx(
                    "garamond flex h-14 w-full items-center rounded-3xl px-5 py-2 text-xl font-bold",
                    activeTab === tab.id
                      ? "bg-green-400 text-gray-950"
                      : "bg-green-100 text-gray-800",
                  )}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Layout - Sidebar + Content */}
          <div className="flex md:gap-16">
            <div className="flex md:gap-6">
              <div className="hidden flex-col space-y-2 md:flex">
                {contentConfig.howItWorks.steps.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cx(
                      "garamond flex h-14 items-center rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl px-5 py-2 text-xl font-bold",
                      activeTab === tab.id
                        ? "bg-green-400 text-gray-950"
                        : "bg-transparent text-gray-800 hover:bg-gray-50",
                    )}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              {/* Visual Indicators Column */}
              <div className="relative hidden flex-col items-center md:flex">
                <div className="relative flex flex-col space-y-2">
                  {contentConfig.howItWorks.steps.map((tab, index) => {
                    const isActive = activeTab === tab.id;
                    const isLast =
                      index === contentConfig.howItWorks.steps.length - 1;

                    return (
                      <div
                        key={tab.id}
                        className="relative flex h-14 items-center justify-center"
                      >
                        {!isLast && (
                          <div className="absolute top-1/2 left-1/2 h-[calc(100%+0.5rem)] w-px -translate-x-1/2 transform bg-green-200" />
                        )}
                        <div
                          className={`relative z-10 h-4 w-4 rounded-full ${
                            isActive ? "bg-green-500" : "bg-green-200"
                          }`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="flex-1 pt-2">
              {contentConfig.howItWorks.steps.map((tab) => (
                <div
                  key={tab.id}
                  className={`${activeTab === tab.id ? "block" : "hidden"}`}
                >
                  <div className="flex h-full flex-col justify-between">
                    <div className="mb-3">
                      <h3 className="heading-l3">{tab.heading}</h3>
                      <p className="text-normal">{tab.content}</p>
                    </div>
                    <a
                      href={tab.linkHref}
                      className="inline-flex items-center gap-3 text-2xl font-medium text-green-600 transition-colors duration-200"
                    >
                      <span>{tab.linkText}</span>
                      <ArrowIcon />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
