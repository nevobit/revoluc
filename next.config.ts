// import type { NextConfig } from "next";
//@typescript-eslint/no-var-requires
import nextTranslate from 'next-translate';

const nextConfig = {
  ...nextTranslate(),
};

export default nextConfig;
