/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Component } from "@/src/components/ui/luma-spin";

export default function DemoOne() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] p-8 bg-brand-surface rounded-[2rem] border border-brand-muted/10">
      <h3 className="text-xs font-black text-brand-muted uppercase tracking-[0.3em] mb-8">Luma Spin Loader</h3>
      <Component className="w-16 h-16" />
      <p className="mt-8 text-[10px] font-bold text-brand-muted uppercase tracking-widest">Interactive Component Demo</p>
    </div>
  );
}
