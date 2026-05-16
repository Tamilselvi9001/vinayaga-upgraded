/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface LumaSpinProps {
  className?: string;
}

export const Component = ({ className }: LumaSpinProps) => {
  return (
    <div className={`relative w-full h-full ${className || ''}`}>
      <span className="absolute rounded-full animate-loader-anim shadow-[inset_0_0_0_2px] shadow-gray-800 dark:shadow-white" />
      <span className="absolute rounded-full animate-loader-anim animation-delay-luma shadow-[inset_0_0_0_2px] shadow-gray-800 dark:shadow-white" />
    </div>
  );
};

export const LumaSpin = Component;
