import React from 'react';
import { Cpu, GitBranch, RefreshCw, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { analytics } from '../utils/analytics.ts';

interface BehindTheBuildProps {
  onNavigateDevlog: () => void;
}

export const BehindTheBuild: React.FC<BehindTheBuildProps> = ({
  onNavigateDevlog,
}) => {
  const steps = [
    {
      step: '01',
      title: 'Concept & Prototyping',
      desc: 'Exploring core themes, sketching Tamil street brawler silhouettes, and testing quick 2D mechanics for snappy hit-reactions.',
    },
    {
      step: '02',
      title: 'Character & Visual Design',
      desc: 'Developing distinctive outfit variations, sprite frames, and authentic backdrop architecture with Thanjavur and Madurai gopuram silhouettes.',
    },
    {
      step: '03',
      title: 'Godot Engine Implementation',
      desc: 'Constructing robust animation state machines, deterministic collision shapes, virtual mobile touch pads, and 60 FPS mobile performance loops.',
    },
    {
      step: '04',
      title: 'Testing & Refinement',
      desc: 'Running internal combat stress tests, adjusting hit-stun and counter windows, and optimizing texture memory on diverse Android chipsets.',
    },
    {
      step: '05',
      title: 'Playtest & Release Prep',
      desc: 'Packaging verified APK builds, gathering community feedback via closed playtests, and finalizing Google Play store assets.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#17130F] text-[#F6ECDD] border-t border-[#79542D]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-cinzel font-semibold tracking-[0.25em] text-[#C99A45] uppercase">
              BEHIND THE BUILD
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F6ECDD]">
              Made With Imagination. <br />
              <span className="text-[#E6C99A]">Built Through Iteration.</span>
            </h2>
            <p className="text-base text-[#F6ECDD]/80 leading-relaxed">
              We leverage the open-source power of the <strong className="text-[#E6C99A]">Godot Engine</strong> to engineer responsive 2D action games with precision control, modular node hierarchies, and lightweight mobile footprints.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => {
                analytics.track('behind_build_devlog_click');
                onNavigateDevlog();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-cinzel font-semibold tracking-wider text-[#C99A45] hover:text-[#E6C99A] border border-[#C99A45]/40 hover:border-[#C99A45] rounded-md transition-colors bg-[#211C16]"
            >
              <span>VIEW STUDIO DEVLOG</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Process Roadmap Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#211C16] border border-[#79542D]/35 hover:border-[#C99A45]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-cinzel text-2xl font-black text-[#C99A45]">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-[#E6C99A]/60">
                    PHASE
                  </span>
                </div>
                <h3 className="font-cinzel text-sm font-bold text-[#F6ECDD] mb-2 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs text-[#F6ECDD]/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#79542D]/20 flex items-center gap-1.5 text-[#C99A45] text-xs">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span className="text-[10px] uppercase tracking-wider font-cinzel">Studio Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Godot Technology Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#211C16] via-[#2A231C] to-[#211C16] border border-[#C99A45]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C99A45]">
              <Cpu className="w-4 h-4" />
              <span>TECHNOLOGY STACK: GODOT ENGINE</span>
            </div>
            <h4 className="font-cinzel text-lg sm:text-xl font-bold text-[#F6ECDD]">
              Built for 60 FPS Mobile Combat Responsiveness
            </h4>
            <p className="text-xs sm:text-sm text-[#F6ECDD]/75 max-w-2xl leading-relaxed">
              Our 2D pipelines utilize custom GDScript finite state machines, frame-accurate hurtboxes, texture atlases optimized for low draw-calls, and zero-bloat compilation for fast downloads across Tamil Nadu and global regions.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-4">
            <div className="p-3 rounded-lg bg-[#17130F] border border-[#79542D]/50 text-center">
              <span className="font-mono text-xl font-bold text-[#C99A45] block">60 FPS</span>
              <span className="text-[10px] text-[#F6ECDD]/60 font-cinzel">Target Performance</span>
            </div>
            <div className="p-3 rounded-lg bg-[#17130F] border border-[#79542D]/50 text-center">
              <span className="font-mono text-xl font-bold text-[#C99A45] block">&lt;80MB</span>
              <span className="text-[10px] text-[#F6ECDD]/60 font-cinzel">Target Package Size</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
